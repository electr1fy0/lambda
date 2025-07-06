package handler

import (
	"lambda/views"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	component := views.Page("Hello from Templ", "This is rendered")
	w.Header().Set("Content-Type", "text/html")
	component.Render(r.Context(), w)
}
