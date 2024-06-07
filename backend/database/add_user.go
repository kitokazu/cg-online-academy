package database

import (
	"context"
	"log"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/stripe/stripe-go/v78"
	"github.com/stripe/stripe-go/v78/customer"
)

type Database struct {
	Pool *pgxpool.Pool
}

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
		log.Printf("Error occured while getting customer")
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
	log.Println("Printing Customer Info in database")
	log.Println(customerInfo)

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
