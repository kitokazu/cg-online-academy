package application

import (
	"context"
	"fmt"
	"net/http"
)

type App struct {
	router http.Handler
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

	err := server.ListenAndServe()
	if err != nil {
		return fmt.Errorf("failed to start server: %w", err)
	}
	return nil
	// ch := make(chan error, 1)

	// go func() {
	// 	err := server.ListenAndServe()
	// 	if err != nil {
	// 		ch <- fmt.Errorf("failed: %w", err)
	// 	}
	// 	close(ch)
	// }()

	// select {
	// case err := <-ch:
	// 	return err
	// case <-ctx.Done():
	// 	timeout, cancel := context.WithTimeout(context.Background(), time.Second*10)
	// 	defer cancel()
	// 	return server.Shutdown(timeout)
	// }

}
