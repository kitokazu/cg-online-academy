package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"

	"github.com/kitokazu/cg-online-academy/application"
	"github.com/kitokazu/cg-online-academy/controllers"
)

func main() {
	// Starting App
	app := application.New()
	app.Initialize()
	controllers.GetPrice()
	ctx, cancel := signal.NotifyContext(context.Background(), os.Interrupt)
	defer cancel()

	err := app.Start(ctx)
	if err != nil {
		fmt.Println("failed to start", err)
	}

}
