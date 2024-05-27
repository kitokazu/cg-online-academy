package controllers

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"github.com/stripe/stripe-go/v78"
	"github.com/stripe/stripe-go/v78/price"
)

func GetPrice() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("couldn't load environment vars")
		os.Exit(1)
	}
	stripe.Key = os.Getenv("STRIPE_SECRET_KEY")
	i := price.List(nil)
	for i.Next() {
		p := i.Price()
		fmt.Println(p.ID)
	}
}
