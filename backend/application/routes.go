package application

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/kitokazu/cg-online-academy/handler"
)

func loadRoutes() *chi.Mux {
	router := chi.NewRouter()
	router.Use(middleware.Logger)
	router.Use(cors.Handler(cors.Options{
		// AllowedOrigins:   []string{"https://foo.com"}, // Use this to allow specific origin hosts
		AllowedOrigins: []string{"https://*", "http://*"},
		// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))

	router.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
	})

	// subrouters
	router.Route("/orders", loadOrderRoutes)
	router.Route("/config", loadConfigRoute)
	router.Route("/create-checkout-session", loadCheckoutRoute)
	return router
}

func loadOrderRoutes(router chi.Router) {
	orderHandle := &handler.Order{}

	router.Get("/", orderHandle.List)
	router.Get("/{id}", orderHandle.GetById)
	router.Post("/", orderHandle.Create)
	router.Put("/{id}", orderHandle.UpdateById)
	router.Delete("/{id}", orderHandle.RemoveById)
}

func loadConfigRoute(router chi.Router) {
	router.Get("/", handler.HandleConfig)
}

func loadCheckoutRoute(router chi.Router) {
	router.Post("/", handler.CreateCheckoutSession)
}
