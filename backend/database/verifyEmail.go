package database

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"time"
)

// NOtes
// Decoder -- Unmarshal from json - string
// Encode -- Marhsal from string -json

func (conn *Database) VerifyEmail(w http.ResponseWriter, r *http.Request) {
	// Should we check if its a valid email in frontend?
	// make sure to set random seed
	// first step is that we should check if the email exists
	// and that they have a valid, active course.
	// else return, either email does not exist, or that you are not registered
	// under any active courses.
	// code should expire after a 10 minutes
	pool := conn.Pool
	rand.Seed(time.Now().UnixNano())
	// Random 6-digit number
	randomNumber := 100000 + rand.Intn(900000)
	fmt.Println(randomNumber)
	type VerifyEmailBody struct {
		Email string `json:"email"`
	}
	var req VerifyEmailBody
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	// is req.email in the users database?
	// user database, so that its a valid customer
	var exists bool

	query := `SELECT EXISTS (SELECT 1 FROM users WHERE email=$1 AND active=true)`
	err := pool.QueryRow(context.Background(), query, req.Email).Scan(&exists)
	if err != nil {
		log.Printf("Error occured while querying: %v", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Println(exists)
	// Now append the random 6 digit code to the verifyUser
	verifyQuery :=
		`INSERT INTO verify (email, code, active)
	VALUES ($1, $2, $3)
	ON CONFLICT (email)
	DO UPDATE SET code = EXCLUDED.code, active = EXCLUDED.active`
	_, err = pool.Exec(context.Background(), verifyQuery, req.Email, randomNumber, true)
	if err != nil {
		log.Fatalf("Exec failed: %v\n", err)
	}

	// If everything good, we know the user exists. So send that 6 digit code in "randomNumber" to email
	// Give this email a life of 10 minutes before the active column in verify turns to False

	response := struct {
		Status bool `json:"status"`
	}{ // this is if the user exists in the users database
		Status: exists,
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
