package database

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
)

// Struct to handle post request
type UserPost struct {
	Email    string `json:"email"`
	CourseID string `json:"course_id"`
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
