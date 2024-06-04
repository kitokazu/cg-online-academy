package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"

	"github.com/kitokazu/cg-online-academy/backend/application"
	"github.com/kitokazu/cg-online-academy/backend/controllers"
)

func main() {
	// Initializaing app and database
	app := application.New()
	controllers.GetPrice()
	ctx, cancel := signal.NotifyContext(context.Background(), os.Interrupt)
	defer cancel()

	err := app.Start(ctx)
	if err != nil {
		fmt.Println("failed to start", err)
	}

}
