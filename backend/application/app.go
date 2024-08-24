package application

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
)

type App struct {
	router http.Handler
	db     *pgxpool.Pool
}

func initializeDatabase() *pgxpool.Pool {
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
	config, err := pgxpool.ParseConfig(dbURL)
	if err != nil {
		fmt.Println("Failed to parse DB URL:", err)
		os.Exit(1)
	}

	pool, err := pgxpool.NewWithConfig(context.Background(), config)
	if err != nil {
		fmt.Println("Failed to create connection pool:", err)
		os.Exit(1)
	}

	fmt.Println("Database connected")
	// defer pool.Close()

	return pool
}

func New() *App {
	app := &App{
		db: initializeDatabase(),
	}
	app.loadRoutes()
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

// query := `
// CREATE TABLE IF NOT EXISTS users (
// 	id SERIAL PRIMARY KEY,
// 	name TEXT NOT NULL,
// 	email TEXT NOT NULL,
// 	password TEXT NOT NULL,
// 	registered_courses TEXT[],
// 	date_created TIMESTAMP NOT NULL,
// 	last_active TIMESTAMP NOT NULL
// )`

// _, err := pool.Exec(context.Background(), query)
// if err != nil {
// 	log.Printf(err.Error())
// 	return
// }
