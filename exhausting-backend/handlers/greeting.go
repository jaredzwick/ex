package handlers

import (
	"context"
	"fmt"

	shared "pypes.dev/exhausting-shared/types"
)

func GreetingHandler() func(ctx context.Context, input *struct {
	Name string `path:"name" maxLength:"30" example:"world" doc:"Name to greet"`
}) (*shared.GreetingOutput, error) {
	return func(ctx context.Context, input *struct {
		Name string `path:"name" maxLength:"30" example:"world" doc:"Name to greet"`
	}) (*shared.GreetingOutput, error) {
		resp := &shared.GreetingOutput{}
		resp.Body.Message = fmt.Sprintf("Hello, %s!", input.Name)
		return resp, nil
	}
}
