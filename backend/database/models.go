package database

import "time"

// Models for the postgresql database

type UserInfo struct {
	CustomerID   string    `json:"customer_id"`
	Name         string    `json:"name"`
	Email        string    `json:"email"`
	CourseID     string    `json:"course_id"`
	RegisteredAt time.Time `json:"registered_at"`
	Active       bool      `json:"active"`
}

type Course struct {
	CourseID    string    `json:"course_id"`
	NumEnrolled string    `json:"num_enrolled"`
	Active      string    `json:"active"`
	StartDate   time.Time `json:"start_date"`
	EndDate     time.Time `json:"end_date"`
}
