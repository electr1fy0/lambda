package handler

import (
	"lambda/views"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	component := views.Page("Hello from Templ and is supposed to be tht title", "This is a rendered message.")

	w.Header().Set("Content-Type", "text/html")
	component.Render(r.Context(), w)
}
