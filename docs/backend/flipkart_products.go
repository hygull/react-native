	/**
		{
			"created_on": "2 june 2017",
			"todos": [
				"go get github.com/go-sql-driver/mysql",
				"postman(optional)",
				"browser(optional)",	
			],
			"aim": "Preaparing a structure for filpkart like products"
		}
	*/

	package main

	import "log"
	import "net/http"
	import "encoding/json"

	import (
		_"github.com/go-sql-driver/mysql"	
		"database/sql"
	)

	func products(w http.ResponseWriter, r *http.Request) {
		// db, err := sql.Open("mysql", "<username>:<password>@tcp(127.0.0.1:<port>)/<dbname>"	)
		db, err := sql.Open("mysql", "hygull:admin@67@tcp(127.0.0.1:3306)/practice_db?charset=utf8")

		w.Header().Set("Content-Type", "application/json")

		if err != nil {
			log.Fatal(err)
		}

		rows, err := db.Query("select id, title, image, price, stock_status, target_url from products")

		if err != nil {
			log.Fatal(err)
		}

		type Product struct {
			Id int 		 `json:"id"`
			Title string `json:"title"`
			Image string `json:"image"`
			Price float64  `json:"price"`
			StockStatus string `json:"stock_status"`
			TargetUrl string `json:"target_url"`
		}
			
		var products []Product

		for rows.Next() {
			var id int
			var title, image, stoctkStatus, tagetUrl string
			var price float64

			rows.Scan(&id , &title, &image, &price, &stoctkStatus, &tagetUrl)
			products = append(products, Product{id , title, image, price, stoctkStatus, tagetUrl})
		}
		
		productsBytes, _ := json.Marshal(&products)
		
		w.Write(productsBytes)
		db.Close()
	}

	func main() {
		http.HandleFunc("/products/", products)
		http.ListenAndServe("0.0.0.0:8080", nil)
	}

