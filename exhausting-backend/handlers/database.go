package handlers

import (
	"context"
	"log"

	appsv1 "k8s.io/api/apps/v1"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes"
	utils "pypes.dev/exhausting-backend/utils"
	shared "pypes.dev/exhausting-shared/types"
)

func DatabaseCreationHandler(clientset *kubernetes.Clientset) func(ctx context.Context, i *shared.DatabaseCreationRequest) (*shared.DatabaseCreationResponse, error) {
	return func(ctx context.Context, i *shared.DatabaseCreationRequest) (*shared.DatabaseCreationResponse, error) {
		// Define PostgreSQL Deployment
		deployment := &appsv1.Deployment{
			ObjectMeta: metav1.ObjectMeta{
				Name:      "postgres-instance",
				Namespace: "default",
			},
			Spec: appsv1.DeploymentSpec{
				Replicas: utils.Int32Ptr(1),
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
					{Port: 5432, TargetPort: utils.IntstrPtr(5432)},
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

		resp := &shared.DatabaseCreationResponse{}
		resp.Body.Name = i.Body.Name
		return resp, nil
	}
}
