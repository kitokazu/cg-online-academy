package database

import (
	"context"
	"log"
	"net/http"

	//"os"
	"encoding/json"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/stripe/stripe-go/v78"
	"github.com/stripe/stripe-go/v78/customer"
)

type Database struct {
	Pool *pgxpool.Pool
}

type UserInfo struct {
	CustomerID   string    `json:"customer_id"`
	Name         string    `json:"name"`
	Email        string    `json:"email"`
	CourseID     string    `json:"course_id"`
	RegisteredAt time.Time `json:"registered_at"`
	Active       bool      `json:"active"`
}

type UserPost struct {
	Email    string `json:"email"`
	CourseID string `json:"course_id"`
}

type Course struct {
	CourseID    string    `json:"course_id"`
	NumEnrolled string    `json:"num_enrolled"`
	Active      string    `json:"active"`
	StartDate   time.Time `json:"start_date"`
	EndDate     time.Time `json:"end_date"`
}

func (conn *Database) CheckActiveUser(w http.ResponseWriter, r *http.Request) {
	// Get the user email and the course that they are registering
	// If it exists in the User database and it is currently active, then return true
	// Else return False as user does not exist
	pool := conn.Pool
	searchQuery := `
	SELECT COUNT (*) FROM users
	WHERE email = $1 AND course_id = $2 AND active = true
	`
	var req UserPost
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	var count int
	err := pool.QueryRow(context.Background(), searchQuery, req.Email, req.CourseID).Scan(&count)
	if err != nil {
		log.Printf("Error occured while querying: %v", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	response := struct {
		Status bool `json:"status"`
	}{
		Status: count > 0,
	}

	jsonData, err := json.Marshal(response)
	if err != nil {
		log.Printf("Error parsing json: %v", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonData)
}

// Helper functions camelCase, public functions PascalCase
func (conn *Database) AddUserInformation(event stripe.PaymentIntent) {
	pool := conn.Pool
	if event.Customer == nil {
		log.Println("Couldn't properly parse customer")
		return
	}
	customerID := event.Customer.ID

	// Fetch customer details
	info, err := customer.Get(customerID, nil)
	if err != nil {
		log.Printf("Error occured while Testing")
		return
	}

	customerInfo := UserInfo{
		CustomerID:   customerID,
		Name:         info.Name,
		Email:        info.Email,
		CourseID:     info.Metadata["course_id"],
		RegisteredAt: time.Now(),
		Active:       true,
	}

	rows, err := pool.Query(context.Background(), "SELECT * FROM users")
	if err != nil {
		log.Fatalf("Error executing query: %v\n", err)
	}
	defer rows.Close()
	log.Println("Printing USER rows")
	log.Println(rows)

	insertQuery := `
	INSERT INTO users (customer_id, name, email, course_id, registered_at, active)
	VALUES ($1, $2, $3, $4, $5, $6)
	`
	_, err = pool.Exec(context.Background(), insertQuery, customerInfo.CustomerID, customerInfo.Name, customerInfo.Email, customerInfo.CourseID, customerInfo.RegisteredAt, customerInfo.Active)
	if err != nil {
		log.Printf("Error occurred while inserting data:%v", err)
		return
	}
}
