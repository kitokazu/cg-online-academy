package handler

import (
	"fmt"
	"net/http"
)

type Order struct {
}

func (o *Order) Create(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Order Created")
}

func (o *Order) List(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Listing all Items")
}

func (o *Order) GetById(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Get an order by id")
}

func (o *Order) UpdateById(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Update an order by id")
}

func (o *Order) RemoveById(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Remove order by id")
}
