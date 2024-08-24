package handler

// import (
// 	"log"
// 	"os"
// 	"net/smtp"
// 	"github.com/joho/godotenv"
// )

// func SendEmail (userEmail string) error {
// 	err := godotenv.Load()
// 	if err != nil {
// 		log.Println("Couldn't load environment vars")
// 		os.Exit(1)
// 	}
// 	from := os.Getenv("EMAIL_USER")
// 	pass := os.Getenv("EMAIL_PASS")

// 	to := []string{
// 		userEmail,
// 	}

// 	// smtp server configuration
// 	smtpHost := "smt.gmail.com"
// 	smtpPort := "587"

// 	return nil
// }
