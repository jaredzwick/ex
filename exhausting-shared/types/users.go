package shared

type User struct {
	ID       string `json:"id"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type UserCreationRequestBody struct {
	Email    string `json:"Email" doc:"Email of the user attempting to authenticate" required:"true"`
	Password string `json:"type" doc:"Password of the user" required:"true"`
}
type UserCreationRequest struct {
	Body UserCreationRequestBody
}

type UserCreationResponseBody struct {
	ID       string `json:"id" doc:"Unique identifier for the user"`
	Email    string `json:"Email" doc:"Email of the user"`
	Password string `json:"type" doc:"Password of the user"`
}
type UserCreationResponse struct {
	Body UserCreationResponseBody
}
