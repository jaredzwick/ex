package shared

type Database struct {
	ID   string `json:"id"`
	Name string `json:"name"`
	Tier string `json:"tier"`
}

type DatabaseCreationRequestBody struct {
	Name string `json:"name" doc:"Name of the database" required:"true"`
	Type string `json:"type" doc:"Type of the database (e.g., postgresql, mysql)" required:"true"`
	Tier string `json:"tier" doc:"Tier of the database (e.g., standard, premium)" required:"true"`
}
type DatabaseCreationRequest struct {
	Body DatabaseCreationRequestBody
}

type DatabaseCreationResponseBody struct {
	ID   string `json:"id" doc:"Unique identifier for the database"`
	Name string `json:"name" doc:"Name of the database"`
	Type string `json:"type" doc:"Type of the database"`
	Tier string `json:"tier" doc:"Tier of the database"`
}
type DatabaseCreationResponse struct {
	Body DatabaseCreationResponseBody
}
