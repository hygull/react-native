package main


import (
	"fmt"
	"log"
	"gopkg.in/kataras/iris.v6"
	"gopkg.in/kataras/iris.v6/adaptors/httprouter"
	// "github.com/kataras/iris"
	// "net/http"
	// "encoding/json"
	_"github.com/go-sql-driver/mysql"	
	"database/sql"
	"reflect"
	"strconv"
	"strings"
)

// User bind struct
// type User struct {
// 	Firstname string `json:"firstname"`
// 	Lastname  string `json:"lastname"`
// 	Age       int    `json:"age"`
// }


// func Get(ctx *iris.Context) {
// 		peter := User{
// 			Firstname: "John",
// 			Lastname:  "Doe",
// 			Age:       25,
// 		}

// 		ctx.JSON(iris.StatusOK, peter)
// }

type Error struct {
	Status int16 `json:"status"`
	Message string `json:"message"`
}

func Products(ctx *iris.Context) {
		fmt.Println("1 Starting connection")
	// db, err := sql.Open("mysql", "<username>:<password>@tcp(127.0.0.1:<port>)/<dbname>"	)
		db, err := sql.Open("mysql", "hygull:admin@67@tcp(127.0.0.1:3306)/practice_db?charset=utf8")
		
		rows, err := db.Query("select id, title, image, price, stock_status, target_url, merchant from products")

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
			Merchant string `json:"merchant"`
		}
			
		var products []Product

		for rows.Next() {
			var id int
			var title, image, stoctkStatus, tagetUrl, merchant string
			var price float64

			rows.Scan(&id , &title, &image, &price, &stoctkStatus, &tagetUrl, &merchant)
			products = append(products, Product{id , title, image, price, stoctkStatus, tagetUrl, merchant})
		}
		
		// productsBytes, _ := json.Marshal(&products)
		
		// w.Write(productsBytes)

		fmt.Println("Returning JSON representation of all products")
		ctx.JSON(iris.StatusOK, products)
		db.Close()
}

func Product(ctx *iris.Context) {
		fmt.Println("2 Starting connection")
		db, err := sql.Open("mysql", "hygull:admin@67@tcp(127.0.0.1:3306)/practice_db?charset=utf8")
		
		if err != nil {
			log.Fatal(err)
		}

		id := ctx.Param("id")

		rows, err := db.Query("select id, title, image, price, stock_status, target_url, merchant from products where id="+id)

		if err != nil {
			log.Fatal(err)
		}else{
			fmt.Println("Query succesfully excuted while fetching single product")
		}

		type Product struct {
			Id int 		 `json:"id"`
			Title string `json:"title"`
			Image string `json:"image"`
			Price float64  `json:"price"`
			StockStatus string `json:"stock_status"`
			TargetUrl string `json:"target_url"`
			Merchant string `json:"merchant"`
		}
			
		var product Product
	    found := false
		for rows.Next() {
			var id int
			var title, image, stoctkStatus, tagetUrl, merchant string
			var price float64

			fmt.Println("Scanning")
			rows.Scan(&id , &title, &image, &price, &stoctkStatus, &tagetUrl, &merchant)
			product = Product{id , title, image, price, stoctkStatus, tagetUrl, merchant}
			found = true
		}
		
		// productsBytes, _ := json.Marshal(&products)
		
		// w.Write(productsBytes)
		fmt.Println(found)
		if found==true {
			fmt.Println("Returning JSON representation of a product")
			ctx.JSON(iris.StatusOK, product)
		} else {
			fmt.Println("Returning JSON representation of a product")
			ctx.JSON(iris.StatusBadRequest, Error{400, "product with this id does not exist"})
		}
		
		db.Close()	
}

func CreateProduct(ctx *iris.Context) {
		fmt.Println("3 Starting connection")
		db, err := sql.Open("mysql", "hygull:admin@67@tcp(127.0.0.1:3306)/practice_db?charset=utf8")
		
		if err != nil {
			log.Fatal(err, "H")
		}

		forms := ctx.FormValues()

		title := ctx.FormValue("title")
		image := ctx.FormValue("image") 
		price := ctx.FormValue("price")
		stockStatus := ctx.FormValue("stock_status")
		tagetUrl := ctx.FormValue("target_url")
		merchant := ctx.FormValue("merchant")
		// merchant := forms["merchant"][0]

		fmt.Println("================")
		for key, value := range forms {
			// fmt.Println("key:", key, len(key),", value: ", value)

			if strings.TrimSpace(key) == "merchant" {
				// fmt.Println ("Fetching .....")
				// fmt.Println(reflect.TypeOf(value))
				merchant = value[0]
			}
		}

		fmt.Println(".....", forms["merchant"])
		fmt.Println()
		fmt.Println("================")

		fmt.Println("Got", title, image, price, stockStatus)
		fmt.Println("Target: ", tagetUrl, "Merchant: ",merchant)

		query := "INSERT INTO products(title, image, price, stock_status, target_url, merchant) values('"+
					  title +"', '"+image+"', "+price+", "+stockStatus+", '"+tagetUrl+"', '"+merchant+"')" 
		
		fmt.Println("Executing ", query)
		stmt, err := db.Prepare(query)

		if err != nil {
			ctx.JSON(iris.StatusInternalServerError, map[string]interface{}{"message": "error while processing INSERT query, all the fields are required","required_fields": "title, image, price, stock_status, target_url" ,"status": 500})
			return
		} 

		_, err = stmt.Exec()
		if err != nil {
			log.Fatal(err)
		} else {
			ctx.JSON(iris.StatusOK, map[string]interface{}{"message": "product successfully created", "status": 200})
			fmt.Println("Query succesfully excuted while INSERTING record of single product")
		}
		
		db.Close()	
}

func UpdateProduct(ctx *iris.Context) {
		fmt.Println("4 Starting connection")
		db, err := sql.Open("mysql", "hygull:admin@67@tcp(127.0.0.1:3306)/practice_db?charset=utf8")
		
		// fmt.Println(ctx.PathString())
		if err != nil {
			log.Fatal(err, "Error while updating product")
		}

		id := ctx.FormValue("id")
		title := ctx.FormValue("title")
		image := ctx.FormValue("image") 
		price := ctx.FormValue("price")
		stockStatus := ctx.FormValue("stock_status")
		tagetUrl := ctx.FormValue("target_url")
		merchant := ctx.FormValue("merchant")

		fmt.Println(id, reflect.TypeOf(id), len(id))
		if id == "" {
			fmt.Println("Blank id")
			ctx.JSON(iris.StatusBadRequest, map[string]interface{}{"message": "id is required", "status": 400})
			return
		} else {
			_, err = strconv.Atoi(id)
			fmt.Println("Worng id")
			if err != nil {
				ctx.JSON(iris.StatusBadRequest, map[string]interface{}{"message": "id should be a number", "status": 400})
				return
			}
		}

		fields := []string{"title", "image", "price", "stock_status", "target_url", "merchant"}
		fieldsValue := []string{title, image, price, stockStatus, tagetUrl, merchant}

		
		fmt.Println("Got", title, image, price, stockStatus, tagetUrl, merchant)
		// query := "INSERT INTO products(title, image, price, stock_status, target_url) values('"+
		// 			  title +"', '"+image+"', "+price+", "+stockStatus+", '"+tagetUrl+"')" 
		query := "UPDATE products set "
		for index,v := range fields {
			fmt.Println(index, v)
			if v != "" {
				query +=  fields[index] +"="
				if fields[index] == "price" || fields[index] == "stock_status" {
					query += fieldsValue[index] + ","
				} else {
					query += "'"+fieldsValue[index] + "',"
				}
			}
		}
		fmt.Println(query)
		fmt.Println(reflect.TypeOf(query))
		fmt.Println(query[:len(query)-1])

		query = query[:len(query)-1]
		query += " where id="+id

		fmt.Println("Executing ", query)

		// fmt.Println("Executing ", query)
		stmt, err := db.Prepare(query)

		if err != nil {
			ctx.JSON(iris.StatusInternalServerError, map[string]interface{}{"message": "error while processing UPDATE query", "status": 500})
			return
		} 

		_, err = stmt.Exec()

		if err != nil {
			log.Fatal(err)
		} else {
			ctx.JSON(iris.StatusOK, map[string]interface{}{"message": "product successfully updated", "status": 200})
			fmt.Println("Query succesfully executed while UPDATING record of single product")
		}
		
		db.Close()	
}

// func CreateProductUi(ctx *iris.Context) {
// 	ctx.SetContentType("text/html")
// 	fmt.Println("Rendering page")
// 	ctx.Render("create_product.html", struct{Name string}{Name: "Rishikesh"})
// }

func main() {
	app := iris.New()
	app.Adapt(httprouter.New())

	app.Get("/products/", Products)
	app.Get("/products/:id", Product)
	app.Post("/products/create/", CreateProduct)
	app.Put("/products/update/", UpdateProduct)
	// app.Get("/ui/create/", CreateProductUi)

	app.Listen(":8080")


	// iris.Get("/products/", Products)
	// iris.Get("/products/:id", Product)
	// iris.Post("/products/create/", CreateProduct)
	// iris.Get("/ui/create/", CreateProductUi)

	// iris.Listen(":8080")
}