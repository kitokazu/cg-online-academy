package application

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/kitokazu/cg-online-academy/backend/database"
	"github.com/kitokazu/cg-online-academy/backend/handler"
)

func (a *App) loadRoutes() {
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
	router.Route("/config", loadConfigRoute)
	router.Route("/create-checkout-session", a.loadCheckoutRoute)
	router.Route("/session-status", loadRetrieveRoute)
	router.Route("/database", a.loadDatabaseRoutes)
	router.Route("/webhook", a.loadWebhookRouter)

	a.router = router
}

func loadConfigRoute(router chi.Router) {

	router.Get("/", handler.HandleConfig)
}

func (a *App) loadCheckoutRoute(router chi.Router) {
	paymentHandler := &handler.Payment{
		DatabaseConn: &database.Database{
			Pool: a.db,
		},
	}

	router.Post("/", paymentHandler.CreateCheckoutSession)
}

func loadRetrieveRoute(router chi.Router) {
	router.Get("/", handler.RetrieveCheckoutSession)
}

func (a *App) loadDatabaseRoutes(router chi.Router) {
	databaseConn := &database.Database{
		Pool: a.db,
	}
	router.Post("/check-active-user", databaseConn.CheckActiveUser)
}

func (a *App) loadWebhookRouter(router chi.Router) {
	webhookHandler := &handler.Payment{
		DatabaseConn: &database.Database{
			Pool: a.db,
		},
	}
	router.Post("/", webhookHandler.HandleWebhook)
}
