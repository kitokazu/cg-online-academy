package handler

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/stripe/stripe-go/v78"
	"github.com/stripe/stripe-go/v78/checkout/session"
)

type CheckoutSessionRequest struct {
	Email  string `json:"email"`
	Name   string `json:"name"`
	Course string `json: "course"`
}

func HandleConfig(w http.ResponseWriter, r *http.Request) {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("couldn't load environment vars")
		os.Exit(1)
	}

	if r.Method != "GET" {
		http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
		return
	}
	writeJSON(w, struct {
		PublishableKey string `json:"publishableKey"`
	}{
		PublishableKey: os.Getenv("STRIPE_PUBLISHABLE_KEY"),
	})
}

func CreateCheckoutSession(w http.ResponseWriter, r *http.Request) {
	var req CheckoutSessionRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	// make sure to right strip email addresses
	// also get course number that corresponds to the price
	domain := "http://localhost:3000" // frontend
	params := &stripe.CheckoutSessionParams{
		UIMode:    stripe.String("embedded"),
		ReturnURL: stripe.String(domain + "/return?session_id={CHECKOUT_SESSION_ID}"),
		LineItems: []*stripe.CheckoutSessionLineItemParams{
			{
				Price:    stripe.String("price_1PKylXRt7cEVfD2g4FudgGW3"),
				Quantity: stripe.Int64(1),
			},
		},
		Mode:          stripe.String(string(stripe.CheckoutSessionModePayment)),
		CustomerEmail: stripe.String(req.Email),
	}

	s, err := session.New(params)
	if err != nil {
		log.Printf("session.New: %v", err)
	}

	writeJSON(w, struct {
		ClientSecret string `json:"clientSecret"`
	}{
		ClientSecret: s.ClientSecret,
	})

}

func writeJSON(w http.ResponseWriter, v interface{}) {
	var buf bytes.Buffer
	if err := json.NewEncoder(&buf).Encode(v); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		log.Printf("json.NewEncoder.Encode: %v", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	if _, err := io.Copy(w, &buf); err != nil {
		log.Printf("io.Copy: %v", err)
		return
	}
}
