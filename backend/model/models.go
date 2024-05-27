package model

import (
	"time"

	"github.com/google/uuid"
)

type Course struct {
	CustomerID   uuid.UUID  `json:"customer_id"`
	FirstName    string     `json:"first_name"`
	LastName     string     `json:"last_name"`
	Email        string     `json:"email"`
	Course       string     `json:"course"`
	RegisteredAt *time.Time `json:"registered_at"`
	Active       bool       `json:"active"`
}

func (crs *Course) TableName() string {
	return "courses"
}
