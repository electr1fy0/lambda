package handler

import (
	"lambda/views"
	"net/http"
	"runtime"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	msg := runtime.Version() + " says hi from serverless"
	component := views.Page("hello everyone!", msg)

	w.Header().Set("Content-Type", "text/html")
	component.Render(r.Context(), w)
}
