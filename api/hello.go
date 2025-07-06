package main

import (
	"fmt"
	"net/http"
	"runtime"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Go version: %s\n", runtime.Version())
}
