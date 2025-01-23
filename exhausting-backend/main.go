package main

import (
	"context"
	"fmt"
	"net/http"

	"github.com/danielgtaylor/huma/v2"
	"github.com/danielgtaylor/huma/v2/adapters/humachi"
	"github.com/danielgtaylor/huma/v2/humacli"
	"github.com/go-chi/chi/v5"

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
