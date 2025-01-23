package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/danielgtaylor/huma/v2"
	"github.com/danielgtaylor/huma/v2/adapters/humachi"
	"github.com/danielgtaylor/huma/v2/humacli"
	"github.com/go-chi/chi/v5"
	appsv1 "k8s.io/api/apps/v1"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/util/intstr"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/tools/clientcmd"

	_ "github.com/danielgtaylor/huma/v2/formats/cbor"
)

// Options for the CLI.
type Options struct {
	Port int `help:"Port to listen on" short:"p" default:"8888"`
}

type DatabaseCreationRequest struct {
	Body struct {
		Name string `json:"name" doc:"Name of the database" required:"true"`
		Type string `json:"type" doc:"Type of the database (e.g., postgresql, mysql)" required:"true"`
		Tier string `json:"tier" doc:"Tier of the database (e.g., standard, premium)" required:"true"`
	}
}

type DatabaseCreationResponse struct {
	Body struct {
		ID   string `json:"id" doc:"Unique identifier for the database"`
		Name string `json:"name" doc:"Name of the database"`
		Type string `json:"type" doc:"Type of the database"`
		Tier string `json:"tier" doc:"Tier of the database"`
	}
}

var databases = map[string]DatabaseCreationResponse{}

type GreetingOutput struct {
	Body struct {
		Message string `json:"message" example:"Hello, world!" doc:"Greeting message"`
	}
}

func main() {
	// Kubernetes Client Initialization
	config, err := clientcmd.BuildConfigFromFlags("", filepath.Join(homeDir(), ".kube", "config"))
	if err != nil {
		log.Fatalf("Failed to load Kubernetes config: %v", err)
	}
	clientset, err := kubernetes.NewForConfig(config)
	if err != nil {
		log.Fatalf("Failed to create Kubernetes client: %v", err)
	}
	cli := humacli.New(func(hooks humacli.Hooks, options *Options) {
		// Create a new router & API
		router := chi.NewMux()
		api := humachi.New(router, huma.DefaultConfig("My API", "1.0.0"))

		// Register GET /greeting/{name}
		huma.Register(api, huma.Operation{
			OperationID: "get-greeting",
			Method:      http.MethodGet,
			Path:        "/greeting/{name}",
			Summary:     "Get a greeting",
			Description: "Get a greeting for a person by name.",
			Tags:        []string{"Greetings"},
		}, func(ctx context.Context, input *struct {
			Name string `path:"name" maxLength:"30" example:"world" doc:"Name to greet"`
		}) (*GreetingOutput, error) {
			resp := &GreetingOutput{}
			resp.Body.Message = fmt.Sprintf("Hello, %s!", input.Name)
			return resp, nil
		})

		// Register POST /database
		huma.Register(api, huma.Operation{
			OperationID:   "post-database",
			Method:        http.MethodPost,
			Path:          "/database",
			Summary:       "Post a database",
			Tags:          []string{"Databases"},
			DefaultStatus: http.StatusCreated,
		}, func(ctx context.Context, i *DatabaseCreationRequest) (*DatabaseCreationResponse, error) {
			// Define PostgreSQL Deployment
			deployment := &appsv1.Deployment{
				ObjectMeta: metav1.ObjectMeta{
					Name:      "postgres-instance",
					Namespace: "default",
				},
				Spec: appsv1.DeploymentSpec{
					Replicas: int32Ptr(1),
					Selector: &metav1.LabelSelector{
						MatchLabels: map[string]string{"app": "postgres"},
					},
					Template: corev1.PodTemplateSpec{
						ObjectMeta: metav1.ObjectMeta{
							Labels: map[string]string{"app": "postgres"},
						},
						Spec: corev1.PodSpec{
							Containers: []corev1.Container{
								{
									Name:  "postgres",
									Image: "postgres:15",
									Ports: []corev1.ContainerPort{
										{ContainerPort: 5432},
									},
									Env: []corev1.EnvVar{
										{Name: "POSTGRES_USER", Value: "admin"},
										{Name: "POSTGRES_PASSWORD", Value: "password"},
										{Name: "POSTGRES_DB", Value: "testdb"},
									},
								},
							},
						},
					},
				},
			}

			// Define PostgreSQL Service
			service := &corev1.Service{
				ObjectMeta: metav1.ObjectMeta{
					Name:      "postgres-service",
					Namespace: "default",
				},
				Spec: corev1.ServiceSpec{
					Selector: map[string]string{"app": "postgres"},
					Ports: []corev1.ServicePort{
						{Port: 5432, TargetPort: intstrPtr(5432)},
					},
					Type: corev1.ServiceTypeClusterIP,
				},
			}

			// Create Deployment
			_, err := clientset.AppsV1().Deployments("default").Create(context.TODO(), deployment, metav1.CreateOptions{})
			if err != nil {
				log.Printf("Error creating deployment: %v", err)
			}

			// Create Service
			_, err = clientset.CoreV1().Services("default").Create(context.TODO(), service, metav1.CreateOptions{})
			if err != nil {
				log.Printf("Error creating service: %v", err)
			}

			// TODO: save review in data store.
			resp := &DatabaseCreationResponse{}
			resp.Body.Name = i.Body.Name
			return resp, nil
		})

		// Tell the CLI how to start your server.
		hooks.OnStart(func() {
			fmt.Printf("Starting server on port %d...\n", options.Port)
			http.ListenAndServe(fmt.Sprintf(":%d", options.Port), router)
		})
	})

	// Run the CLI. When passed no commands, it starts the server.
	cli.Run()

}

func homeDir() string {
	if h := os.Getenv("HOME"); h != "" {
		return h
	}
	return os.Getenv("USERPROFILE") // For Windows
}

func int32Ptr(i int32) *int32 {
	return &i
}

func intstrPtr(i int) intstr.IntOrString {
	v := intstr.FromInt(i)
	return v
}
