package model

import (
	"time"
)

type UserInfo struct {
	CustomerID   string    `json:"customer_id"`
	Name         string    `json:"name"`
	Email        string    `json:"email"`
	CourseID     string    `json:"course_id"`
	RegisteredAt time.Time `json:"registered_at"`
	Active       bool      `json:"active"`
}

func (user *UserInfo) TableName() string {
	return "user_information"
}
