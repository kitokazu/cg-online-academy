package handler

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/joho/godotenv"
	"github.com/stripe/stripe-go/v78"
	"github.com/stripe/stripe-go/v78/checkout/session"
	"github.com/stripe/stripe-go/v78/price"
)

type CheckoutSessionRequest struct {
	Email        string `json:"email"`
	Name         string `json:"name"`
	CourseNumber string `json:"course_number"`
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
	// *Reminder to create webhooks
	// *Reminder to allow access to multiple langugages (japanese)
	var req CheckoutSessionRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Trimming spaces from email request
	req.Email = strings.TrimSpace(req.Email)

	// Getting the correct price tag according to user selection
	priceKey := getPrice(req.CourseNumber)
	if priceKey == "error" {
		log.Println("Couldn't get accesse to price tag")
		http.Error(w, "Internal Server Error: Price tag inaccessible", http.StatusInternalServerError)
		return
	}

	// Frontend Route
	domain := "http://localhost:3000"

	params := &stripe.CheckoutSessionParams{
		UIMode:    stripe.String("embedded"),
		ReturnURL: stripe.String(domain + "/return?session_id={CHECKOUT_SESSION_ID}"),
		LineItems: []*stripe.CheckoutSessionLineItemParams{
			{
				Price:    stripe.String(priceKey),
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

	if s.ClientSecret == "" {
		log.Println("ClientSecret is empty. Unable to process the payment.")
		http.Error(w, "Internal Server Error: Client secret is missing", http.StatusInternalServerError)
		return
	}

	writeJSON(w, struct {
		ClientSecret string `json:"clientSecret"`
	}{
		ClientSecret: s.ClientSecret,
	})

}

func RetrieveCheckoutSession(w http.ResponseWriter, r *http.Request) {
	s, err := session.Get(r.URL.Query().Get("session_id"), nil)

	if err != nil {
		http.Error(w, "Failed to retrieve session: "+err.Error(), http.StatusInternalServerError)
		return
	}

	if s == nil {
		http.Error(w, "Session not found", http.StatusNotFound)
		return
	}

	writeJSON(w, struct {
		Status        string `json:"status"`
		CustomerEmail string `json:"customer_email"`
	}{
		Status:        string(s.Status),
		CustomerEmail: string(s.CustomerDetails.Email),
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

func getPrice(courseNumber string) string {
	priceParams := &stripe.PriceSearchParams{
		SearchParams: stripe.SearchParams{
			Query: "active:'true'",
		},
	}

	result := price.Search(priceParams)

	for result.Next() {
		p := result.Price()
		if p.Metadata["course_id"] == courseNumber {
			return p.ID
		}
	}

	return "error"

}
