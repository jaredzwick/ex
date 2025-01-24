package main

import (
	"fmt"
	"net/http"

	"github.com/danielgtaylor/huma/v2"
	"github.com/danielgtaylor/huma/v2/adapters/humachi"
	_ "github.com/danielgtaylor/huma/v2/formats/cbor"
	"github.com/danielgtaylor/huma/v2/humacli"
	"github.com/go-chi/chi/v5"
	"k8s.io/apimachinery/pkg/util/intstr"
	handlers "pypes.dev/exhausting-backend/handlers"
	types "pypes.dev/exhausting-backend/types"
	utils "pypes.dev/exhausting-backend/utils"
	shared "pypes.dev/exhausting-shared/types"
)

var databases = map[string]shared.DatabaseCreationResponse{}

func main() {
	clientset, err := utils.InitializeKubernetesClient()
	if err != nil {
		panic(err)
	}

	cli := humacli.New(func(hooks humacli.Hooks, options *types.ServerStartOptions) {
		router := chi.NewMux()
		api := humachi.New(router, huma.DefaultConfig("Exhausting Backend API", "0.0.0"))

		// Healthcheck
		huma.Register(api, huma.Operation{
			OperationID: "get-greeting",
			Method:      http.MethodGet,
			Path:        "/greeting/{name}",
			Summary:     "Get a greeting",
			Description: "Get a greeting for a person by name.",
			Tags:        []string{"Greetings"},
		}, handlers.GreetingHandler())

		// Register POST /database
		huma.Register(api, huma.Operation{
			OperationID:   "post-database",
			Method:        http.MethodPost,
			Path:          "/database",
			Summary:       "Post a database",
			Tags:          []string{"Databases"},
			DefaultStatus: http.StatusCreated,
		}, handlers.DatabaseCreationHandler(clientset))

		// Register POST /users

		// Tell the CLI how to start your server.
		hooks.OnStart(func() {
			fmt.Printf("Starting server on port %d...\n", options.Port)
			http.ListenAndServe(fmt.Sprintf(":%d", options.Port), router)
		})
	})

	// Run the CLI. When passed no commands, it starts the server.
	cli.Run()

}

func int32Ptr(i int32) *int32 {
	return &i
}

func intstrPtr(i int) intstr.IntOrString {
	v := intstr.FromInt(i)
	return v
}
