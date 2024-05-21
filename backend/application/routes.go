package application

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/kitokazu/cg-online-academy/handler"
)

func loadRoutes() *chi.Mux {
	router := chi.NewRouter()
	router.Use(middleware.Logger)
	router.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
	})

	// subrouters
	router.Route("/orders", loadOrderRoutes)
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
