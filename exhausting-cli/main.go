package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/spf13/cobra"
	shared "pypes.dev/exhausting-shared/types"
)

func main() {
	var rootCmd = &cobra.Command{
		Use:   "db-cli",
		Short: "A CLI for managing database resources",
	}

	// Add the `db` namespace
	var dbCmd = &cobra.Command{
		Use:   "db",
		Short: "Manage databases",
	}

	// Add subcommands to `db`
	dbCmd.AddCommand(dbCreateCmd)
	dbCmd.AddCommand(dbListCmd)
	dbCmd.AddCommand(dbConnectionInfoCmd)

	// Add the `db` namespace to the root command
	rootCmd.AddCommand(dbCmd)

	if err := rootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}

// Subcommand: db create
var dbCreateCmd = &cobra.Command{
	Use:   "create [name]",
	Short: "Create a new database",
	Args:  cobra.ExactArgs(1),
	Run: func(cmd *cobra.Command, args []string) {
		name := args[0]
		dbType, _ := cmd.Flags().GetString("type")
		tier, _ := cmd.Flags().GetString("tier")

		if dbType == "" || tier == "" {
			fmt.Println("Error: Both --type and --tier flags are required")
			return
		}

		// Prepare request payload
		requestPayload := shared.DatabaseCreationRequest{
			Body: shared.DatabaseCreationRequestBody{
				Name: name,
				Type: dbType,
				Tier: tier,
			},
		}

		// Send POST request
		requestBody, _ := json.Marshal(requestPayload)
		resp, err := http.Post("http://localhost:8080/api/v1/databases", "application/json", bytes.NewBuffer(requestBody))
		if err != nil {
			fmt.Println("Error sending request:", err)
			return
		}
		defer resp.Body.Close()

		if resp.StatusCode == http.StatusCreated {
			fmt.Printf("Database '%s' created successfully\n", name)
		} else {
			fmt.Printf("Failed to create database. Status: %s\n", resp.Status)
		}
	},
}

func init() {
	dbCreateCmd.Flags().String("type", "", "Type of the database (e.g., postgresql, mysql)")
	dbCreateCmd.Flags().String("tier", "", "Tier of the database (e.g., standard, premium)")
}

// Subcommand: db list
var dbListCmd = &cobra.Command{
	Use:   "list",
	Short: "List all databases",
	Run: func(cmd *cobra.Command, args []string) {
		resp, err := http.Get("http://localhost:8080/api/v1/databases")
		if err != nil {
			fmt.Println("Error fetching database list:", err)
			return
		}
		defer resp.Body.Close()

		if resp.StatusCode == http.StatusOK {
			var databases []map[string]interface{}
			json.NewDecoder(resp.Body).Decode(&databases)

			fmt.Println("Databases:")
			for _, db := range databases {
				fmt.Printf(" - %s (%s, %s)\n", db["name"], db["type"], db["tier"])
			}
		} else {
			fmt.Printf("Failed to fetch databases. Status: %s\n", resp.Status)
		}
	},
}

// Subcommand: db connection-info
var dbConnectionInfoCmd = &cobra.Command{
	Use:   "connection-info [name]",
	Short: "Get connection details for a database",
	Args:  cobra.ExactArgs(1),
	Run: func(cmd *cobra.Command, args []string) {
		name := args[0]
		url := fmt.Sprintf("http://localhost:8080/api/v1/databases/%s/connection-info", name)

		resp, err := http.Get(url)
		if err != nil {
			fmt.Println("Error fetching connection details:", err)
			return
		}
		defer resp.Body.Close()

		if resp.StatusCode == http.StatusOK {
			var connectionDetails map[string]interface{}
			json.NewDecoder(resp.Body).Decode(&connectionDetails)
			fmt.Printf("Connection details for '%s': %v\n", name, connectionDetails)
		} else {
			fmt.Printf("Failed to fetch connection details. Status: %s\n", resp.Status)
		}
	},
}
