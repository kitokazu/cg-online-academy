package database

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"time"

	"golang.org/x/crypto/bcrypt"
)

// 1) Get user information (Name, email, password, other data maybe)
// 2) append user information to sql database
// 3) if user already exists, return something on frontend
// 3.5) remember password feature? is this frontend?
// 4) is payment on stripe or the existing google form
// 5) because if we do stripe, then we'll we have to keep track of when courses change and whattnot
// 6) My idea. Have an admin site that communicates to same courses sql data base. Should reflect the change on the
// actual website
// So this website won't change anything on the course database, it will only read from it
// might have to use dynamodb for pricing reasons
// ticket system for when app crashes

type User struct {
	CustomerID        int       `json:"id"`
	Name              string    `json:"name"`
	Email             string    `json:"email"`
	Password          string    `json:"password"`
	RegisteredCourses []string  `json:"registered_courses"`
	DateCreated       time.Time `json:"date_created"`
	LastActive        time.Time `json:"last_active"`
}

// TODO: Do I do *time.Time or time.Time
// TODO: On the frontend, strip any white spaces
// TODO: If we have empty name, email and password, then don't do anything, but this should be checked on frontend
// TODO: Log vs FMT
// TODO: Convert to MVC format
// TODO: Create mock database to ensure that we don't mess up with master database
func (conn *Database) RegisterUser(w http.ResponseWriter, r *http.Request) {
	pool := conn.Pool
	var req User
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	log.Println(req)
	// Check if the request has all the valid information (should be checked on frontend)
	if req.Password == "" || req.Email == "" || req.Name == "" {
		http.Error(w, "Fill in all the information", http.StatusBadRequest)
		return
	}

	// Determine if email already exists
	var emailExists bool
	err := pool.QueryRow(context.Background(), `SELECT EXISTS (
        SELECT 1
        FROM users
        WHERE email = $1
    )`, req.Email).Scan(&emailExists)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if emailExists {
		http.Error(w, "Email already exists", http.StatusBadRequest)
		return
	}

	// use bcrypt to encrypt password
	passwordHash, err := bcrypt.GenerateFromPassword([]byte(req.Password), 10)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	insertQuery := `
	INSERT INTO users (name, email, password, registered_courses, date_created, last_active)
	VALUES ($1, $2, $3, $4, $5, $6)
	`
	_, err = pool.Exec(context.Background(), insertQuery, req.Name, req.Email, string(passwordHash), req.RegisteredCourses, time.Now(), time.Now())
	if err != nil {
		log.Printf("Error occurred while inserting data:%v", err)
		return
	}
	response := struct {
		UserInfo User   `json:"user"`
		Status   string `json:"status"`
	}{
		UserInfo: req,
		Status:   "success",
	}

	jsonResponse, err := json.Marshal(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonResponse)

}
