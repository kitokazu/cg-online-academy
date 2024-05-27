package application

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/jackc/pgx/v5"
	"github.com/joho/godotenv"
)

type App struct {
	router http.Handler
	db     *pgx.Conn
}

func (a *App) Initialize() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file")
		os.Exit(1)
	}
	dbURL := os.Getenv("DB_URL")
	if dbURL == "" {
		fmt.Println("db url empty")
		os.Exit(1)
	}
	conn, err := pgx.Connect(context.Background(), dbURL)
	if err != nil {
		fmt.Println("failed To launch postgresql", err)
		os.Exit(1)
	}
	fmt.Println("database connected")
	defer conn.Close(context.Background())
	a.db = conn
}

func New() *App {
	app := &App{
		router: loadRoutes(),
	}
	return app
}

func (a *App) Start(ctx context.Context) error {
	server := &http.Server{
		Addr:    "localhost:8000",
		Handler: a.router,
	}

	fmt.Println("Starting Server...")

	ch := make(chan error, 1)

	go func() {
		err := server.ListenAndServe()
		if err != nil {
			ch <- fmt.Errorf("failed: %w", err)
		}
		close(ch)
	}()

	select {
	case err := <-ch:
		return err
	case <-ctx.Done():
		timeout, cancel := context.WithTimeout(context.Background(), time.Second*10)
		defer cancel()
		return server.Shutdown(timeout)
	}

}
