package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"

	"github.com/joho/godotenv"
	"github.com/kitokazu/cg-online-academy/backend/application"
	"github.com/stripe/stripe-go/v78"
)

func main() {
	// Initializaing app and database
	app := application.New()

	// Load env var for stripe Key
	err := godotenv.Load()
	if err != nil {
		fmt.Println("couldn't load environment vars")
		os.Exit(1)
	}

	// Loads Stripe
	stripe.Key = os.Getenv("STRIPE_SECRET_KEY")

	// Handles context signals/interruptions
	ctx, cancel := signal.NotifyContext(context.Background(), os.Interrupt)
	defer cancel()

	// Starts App
	err = app.Start(ctx)
	if err != nil {
		fmt.Println("failed to start", err)
	}

}
