package database

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

func (conn *Database) Login(w http.ResponseWriter, r *http.Request) {
	// Look up request user
	pool := conn.Pool
	var req struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	var userID int
	var userEmail string
	query := `
		SELECT id, email
		FROM users
		WHERE email = $1
	`
	err := pool.QueryRow(context.Background(), query, req.Email).Scan(&userID, &userEmail)
	if err != nil {
		log.Println(err.Error())
		http.Error(w, "Email doesn't exist", http.StatusBadRequest)
		return
	}
	if userEmail == "" {
		http.Error(w, "Email does not exist, redirect to registration", http.StatusBadRequest)
		return
	}
	// Compare the request password with corresponding password hash
	var dbPass string
	query = `SELECT password from users
	WHERE email = $1`
	err = pool.QueryRow(context.Background(), query, req.Email).Scan(&dbPass)
	if err != nil {
		http.Error(w, "Invalid password", http.StatusBadRequest)
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(dbPass), []byte(req.Password))
	if err != nil {
		http.Error(w, "Password do not match", http.StatusBadRequest)
		return
	}

	// Generate a jwt token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": userID,
		"exp": time.Now().Add(time.Minute * 1).Unix(),
	})
	tokenString, err := token.SignedString([]byte(os.Getenv("TOKEN_SECRET")))

	if err != nil {
		log.Println(err.Error())
		http.Error(w, "Failed to parse token", http.StatusBadGateway)
		return
	}
	response := struct {
		Token string `json:"token"`
	}{
		Token: tokenString,
	}
	jsonResponse, err := json.Marshal(response)
	if err != nil {
		http.Error(w, "failed to marshal json", http.StatusBadRequest)
		return
	}
	// send it back
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonResponse)
}
