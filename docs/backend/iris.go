package main


import (
	"fmt"
	"log"
	"gopkg.in/kataras/iris.v6"
	"gopkg.in/kataras/iris.v6/adaptors/httprouter"
	// "github.com/kataras/iris"
	// "net/http"
	"encoding/json"
	_"github.com/go-sql-driver/mysql"	
	"database/sql"
	"reflect"
	"strconv"
	"strings"
	// "net/http"
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

func Login(ctx *iris.Context) {
	fmt.Println("4 Starting connection")
		db, err := sql.Open("mysql", "hygull:admin@67@tcp(127.0.0.1:3306)/practice_db?charset=utf8")

		if err != nil {
			fmt.Println("Check DB connection")
		}

		email := ctx.FormValue("email")
		password := ctx.FormValue("password")		
		// fmt.Println("URL => ",ctx.URLParam("email"))

		// myMap := ctx.FormValues()
		// var keyStrMap	string
		// for k,_ := range myMap {
		// 	keyStrMap = k 
		// 	break
		// }

		// type AuthData struct{
		// 	Email string `json:"email"`
		// 	Password string `json:"password"`
		// }
		// keyMap := AuthData{}
		// err = json.Unmarshal([]byte(keyStrMap), &keyMap)
		// fmt.Println(keyMap, reflect.TypeOf(keyMap))


		// email := keyMap.Email
		// password := keyMap.Password

		if email == "" || password == "" {
			fmt.Println("Email & Password(OR)")
			
				fmt.Println("Email & Password(AND)")
				myMap := ctx.FormValues()
				var keyStrMap	string
				for k,_ := range myMap {
					keyStrMap = k 
					break
				}

				type AuthData struct{
					Email string `json:"email"`
					Password string `json:"password"`
				}
				keyMap := AuthData{}
				err = json.Unmarshal([]byte(keyStrMap), &keyMap)
				fmt.Println(keyMap, reflect.TypeOf(keyMap))


				email = keyMap.Email
				password = keyMap.Password

			if email == "" || password == "" {
				fmt.Println("Blank email or password")
				ctx.JSON(iris.StatusBadRequest, map[string]interface{}{"message": "email & password are required fields", "status": 400})
				return
			}
		} 

		fmt.Println("Got", email, " & ", password)

		var fetchedId int
		var fetchedEmail, fetchedPassword, fetchedFirstname, fetchedLastname string
		rows, err := db.Query("Select id, email, password, fname, lname from users where email='"+email+"' AND password='"+password+"';")

		if err != nil {
			log.Fatal(err)
			ctx.JSON(iris.StatusInternalServerError, map[string]interface{}{"message": "error while processing SELECT(login) query", "status": 500})
			return
		} 

		found := false
		for rows.Next(){
			rows.Scan(&fetchedId, &fetchedEmail, &fetchedPassword, &fetchedFirstname, &fetchedLastname)
			found = true
		}
		
		if !found {
			ctx.JSON(iris.StatusUnauthorized, map[string]interface{}{"message": "email or password is incorrect", "status": 401})
			return
		}

		ctx.JSON(iris.StatusOK, map[string]interface{}{"message": "user found", "id": fetchedId, "email": fetchedEmail, "fullname": fetchedFirstname+" "+fetchedLastname, "status": 200})
		fmt.Println("Query succesfully executed while UPDATING record of single user")

		
		db.Close()	

}

func Users(ctx *iris.Context) {
		// db, err := sql.Open("mysql", "<username>:<password>@tcp(127.0.0.1:<port>)/<dbname>"	)
		db, err := sql.Open("mysql", "hygull:admin@67@tcp(127.0.0.1:3306)/practice_db?charset=utf8")

		// w.Header().Set("Content-Type", "application/json")

		if err != nil {
			log.Fatal(err)
		}

		rows, err := db.Query("select id, fname, lname, uname, email, contact, profile_pic from users")

		if err != nil {
			log.Fatal(err)
		}

		type User struct {
			Id int 		 `json:"id"`
			Fname string `json:"firstname"`
			Lname string `json:"lastname"`
			Uname string `json:"username"`
			Email string `json:"email"`
			Contact int `json:"contact"`
			ProfilePic string `json:"profile_pic"`
		}
			
		var users []User

		for rows.Next() {
			var id, contact int
			var fname string
			var lname string
			var uname, email, profile_pic string

			rows.Scan(&id ,&fname, &lname, &uname, &email, &contact, &profile_pic)
			users = append(users, User{id, fname, lname, uname, email, contact, profile_pic })
		}
		
		// usersBytes, _ := json.Marshal(&users)
		
		ctx.JSON(iris.StatusOK, users)
		db.Close()
}


func User(ctx *iris.Context) {
		fmt.Println("Starting connection")
		db, err := sql.Open("mysql", "hygull:admin@67@tcp(127.0.0.1:3306)/practice_db?charset=utf8")
		
		if err != nil {
			log.Fatal(err)
		}

		id := ctx.Param("id")

		_, err = strconv.Atoi(id)

		if err != nil {
			ctx.JSON(iris.StatusOK, map[string]interface{}{"message": "id should be an integer", "status": 400})
			return 
		}

		rows, err := db.Query("select id, fname, lname, uname, email, contact, profile_pic from users where id="+id)

		if err != nil {
			ctx.JSON(iris.StatusInternalServerError, map[string]interface{}{"message": "Error while query execution", "status": 500})
			return 
		}else{
			fmt.Println("Query succesfully excuted while fetching single user")
		}

		type User struct {
			Id int 		 `json:"id"`
			Fname string `json:"fname"`
			Lname string `json:"lname"`
			Uname string `json:"uname"`
			Email string `json:"email"`
			Contact int `json:"contact"`
			ProfilePic string `json:"profile_pic"`
		}
			
		var user User

	    found := false

		for rows.Next() {
			var id, contact int
			var fname, lname, uname, email, profile_pic string

			fmt.Println("Scanning")
			rows.Scan(&id, &fname, &lname, &uname, &email, &contact, &profile_pic)
			if profile_pic == "" {
				profile_pic = "https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-512.png"
			}

			user = User{id , fname, lname, uname,  email, contact, profile_pic}

			found = true
		}
		
		// productsBytes, _ := json.Marshal(&products)
		
		// w.Write(productsBytes)
		fmt.Println(found)
		if found==true {
			fmt.Println("Returning JSON representation of a user")
			ctx.JSON(iris.StatusOK, user)
		} else {
			fmt.Println("Returning JSON representation of a product")
			ctx.JSON(iris.StatusBadRequest, Error{400, "user with this id does not exist"})
		}
		
		db.Close()
}

func Register(ctx *iris.Context) {
		fmt.Println("4 Starting connection")
		fmt.Println(ctx.FormValues())

		db, err := sql.Open("mysql", "hygull:admin@67@tcp(127.0.0.1:3306)/practice_db?charset=utf8")

		fname := ctx.FormValue("fname")
		lname := ctx.FormValue("lname")
		uname := ctx.FormValue("uname")
		contact := ctx.FormValue("contact")
		email := ctx.FormValue("email")
		password := ctx.FormValue("password")
		var contactInt int		

		fmt.Println(reflect.TypeOf(contact), contact)
		// fmt.Println("URL => ",ctx.URLParam("email"))

		// myMap := ctx.FormValues()
		// var keyStrMap	string
		// for k,_ := range myMap {
		// 	keyStrMap = k 
		// 	break
		// }

		// type AuthData struct{
		// 	Email string `json:"email"`
		// 	Password string `json:"password"`
		// }
		// keyMap := AuthData{}
		// err = json.Unmarshal([]byte(keyStrMap), &keyMap)
		// fmt.Println(keyMap, reflect.TypeOf(keyMap))


		// email := keyMap.Email
		// password := keyMap.Password

		if email == "" && password == "" && fname == "" && lname == "" && uname == "" && contact == ""{
				fmt.Println("Email & Password & Fname, Lname, Uname (AND)")
				myMap := ctx.FormValues()
				var keyStrMap	string
				for k,_ := range myMap {
					keyStrMap = k 
					break
				}

				fmt.Println("Key Str Map => ", keyStrMap)

				type AuthData struct{
					Fname string `json:"fname"`
					Lname string `json:"lname"`
					Uname string `json:"uname"`
					Contact int `json:"contact"`
					Email string `json:"email"`
					Password string `json:"password"`
				}

				keyMap := AuthData{}
				err = json.Unmarshal([]byte(keyStrMap), &keyMap)
				fmt.Println(keyMap, reflect.TypeOf(keyMap))

				email = keyMap.Email
				fmt.Println("Email: ",email)
				password = keyMap.Password
				fmt.Println("Password: ",password)
				fname = keyMap.Fname
				fmt.Println("Fname: ", fname)
				lname = keyMap.Lname
				fmt.Println("Lname: ",lname)
				contactInt = keyMap.Contact
				fmt.Println("Contact: ", contactInt)
				uname = keyMap.Uname
				fmt.Println("Uname: ",uname)

			fmt.Println("Details: ",fname, lname, uname, password, email, contactInt)

			if email == "" || password == "" || uname == "" || fname == "" {
				fmt.Println("Details: ",fname, lname, uname, password, email, contactInt)
				fmt.Println("email, password, fname, uname & contact are required fields")
				ctx.JSON(iris.StatusBadRequest, map[string]interface{}{"message": "email, password, fname, uname & contact are required fields", "status": 400})
				return
			}
		} 

		fmt.Println("Got", email, fname, lname, uname, contact, " & ", password)
		
		// _, err = strconv.Atoi(contact)
		// if err != nil {
		// 	ctx.JSON(iris.StatusBadRequest, map[string]interface{}{"message": "contact should be a mobile number of the form 917353787704", "status": 500})
		// 	return
		// }
		email = strings.TrimSpace(email)
		// password = strings.TrimSpace(password)

		rows, err := db.Query("SELECT id, fname, lname from users where email='"+email+"'")

		found := false

		for rows.Next() {
			found = true
			break
		}

		if found {
			ctx.JSON(iris.StatusBadRequest, map[string]interface{}{"message": "This email is already registered", "status": 400})
			return
		}

		stmt, err := db.Prepare("INSERT INTO users( fname, lname, uname, email, contact, profile_pic, password) values('"+
					fname+"', '"+lname+"', '"+uname+"', '"+email+"', "+strconv.Itoa(contactInt)+", 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-512.png', '"+
					password+"' )")

		if err != nil {
			log.Fatal(err)
			ctx.JSON(iris.StatusInternalServerError, map[string]interface{}{"message": "error while processing INSERT(signup) query", "status": 500})
			return
		} 

		res, err := stmt.Exec()
		if err != nil {
			// log.Fatal(err)
			ctx.JSON(iris.StatusInternalServerError, map[string]interface{}{"message": "error while processing INSERT(signup) query", "status": 500})
			return
		}

		userId, err := res.LastInsertId()
		if err != nil {
			// log.Fatal(err)
			ctx.JSON(iris.StatusInternalServerError, map[string]interface{}{"message": "error while fetching user id", "status": 500})
			return
		}

		ctx.JSON(iris.StatusOK, map[string]interface{}{"message": "you got your account successfully registered", "userId": userId, "status": 200})
		fmt.Println("Query succesfully executed while INSERTING(CREATING) a new user")

		db.Close()	
}

func CacheFile(ctx *iris.Context) {
	fmt.Println("Ok, Printing data at a time.")
	// ctx.Render("catche_file.html", struct {} {})
	// ctx.Write([]byte("<h1>Cookie</h1>"))
	ctx.Write([]byte(htmlText))
}

func Home(ctx *iris.Context) {
	fmt.Println("Ok, Visiting Home")
	// ctx.Render("catche_file.html", struct {} {})
	// ctx.Write([]byte("<h1>Cookie</h1>"))
	ctx.Write([]byte(htmlTextHome))
}


func Profile(ctx *iris.Context) {
	fmt.Println("Ok, Visiting Profile")
	// ctx.Render("catche_file.html", struct {} {})
	// ctx.Write([]byte("<h1>Cookie</h1>"))
	ctx.Write([]byte(htmlTextProfile))
}

func main() {
	fmt.Println("Starting the development server at 8080")
	// iris.Config.IsDevelopment = true
	app := iris.New()
	app.Adapt(httprouter.New())

	app.Get("/products/", Products)
	app.Get("/products/:id", Product)
	app.Post("/products/create/", CreateProduct)
	app.Put("/products/update/", UpdateProduct)
	app.Post("/login/", Login)
	app.Post("/register/", Register)
	app.Get("/users/", Users)
	app.Get("/users/:id", User)
	app.Get("/catche_file/",CacheFile)
	app.Get("/",Home)
	app.Get("/profile/", Profile)
	app.Post("/", Home)
	// app.Get("/ui/create/", CreateProductUi)

	app.Listen("0.0.0.0:8000")


	// iris.Get("/products/", Products)
	// iris.Get("/products/:id", Product)
	// iris.Post("/products/create/", CreateProduct)
	// iris.Get("/ui/create/", CreateProductUi)

	// iris.Listen(":8080")
}

var htmlText = `<!DOCTYPE html>
<html>
<head>
<script>

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    console.log("Hello"+user)
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

</script>
</head>
<body onload="checkCookie()">
    <h1>Cookie</h1>
</body>
</html>
`

var htmlTextHome = `<!DOCTYPE html>
<html>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
<style type="text/css">
  body{
    background-color: #7f8c8d;
  }
</style>
<body>
  <!--NAVBAR-->
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="index.html"  style="color: white">Sharpseller </a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="about.html">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
       <!--  <li><a href="#">Sign in</a></li>
        <li><a href="#">Sign up</a></li> -->
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="login.html"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
<!--NAVBAR END-->
    <h1 style="color: white" class="text-center" >SharpSeller</h1>
    <div id="login-overlay" class="modal-dialog" style="margin-top: 5%">
      <div class="modal-content">
          <div class="modal-header">
             <!--  <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button> -->
              <h4 class="modal-title" id="myModalLabel" style="color: blue">Login to <span style="color: green">sharpseller.com</span></h4>
          </div>
          <div class="modal-body">
              <div class="row">
                  <div class="col-xs-6">
                      <div class="well">
                          <form id="loginForm" method="post" novalidate="novalidate" onsubmit="return login()">
                              <div class="form-group">
                                  <label for="username" class="control-label">Email</label>
                                  <input type="text" class="form-control" id="email" name="email" value="" required="" title="Please enter you username" placeholder="sharpseller@gmail.com" />
                                  <span class="help-block"></span>
                              </div>
                              <div class="form-group">
                                  <label for="password" class="control-label">Password</label>
                                  <input type="password" class="form-control" id="password" name="password" value="" required="" placeholder="******" title="Please enter your password" />
                                  <span class="help-block"></span>
                              </div>
                              <div id="loginErrorMsg" class="alert alert-error hide">Wrong username og password</div>
                              <div class="checkbox">
                                  <label>
                                      <input type="checkbox" name="remember" id="remember" /> Remember login
                                  </label>
                                  <p class="help-block">(if this is a private computer)</p>
                              </div>
                              <input type="submit" class="btn btn-success btn-block" value="Submit" />
                              <a href="/forgot/" class="btn btn-default btn-block">Help to login</a>
                          </form>
                      </div>
                  </div>
                  <div class="col-xs-6">
                      <p class="lead">Register now for <span class="text-success">FREE</span></p>
                      <ul class="list-unstyled" style="line-height: 2">
                          <li><span class="fa fa-check text-success"></span> See all your orders</li>
                          <li><span class="fa fa-check text-success"></span> Fast re-order</li>
                          <li><span class="fa fa-check text-success"></span> Save your favorites</li>
                          <li><span class="fa fa-check text-success"></span> Fast checkout</li>
                          <li><span class="fa fa-check text-success"></span> Get a gift <small>(only new customers)</small></li>
                          <li><a href="#"><u>Read more</u></a></li>
                      </ul>
                      <p><a href="#" class="btn btn-info btn-block">Yes please, register now!</a></p>
                  </div>
              </div>
          </div>
      </div>
  </div>

<script type="text/javascript">
  function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    console.log("Hello"+user)
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

  function login(){
  console.log("Happening")
  // alert("Great")
  var em = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  console.log(em, pass)
  alert(em + " - " + pass)
  // alert(email + " - "+password)
//   $http.post("http://127.0.0.1:8080/login/",JSON.stringify( { username: em, password: pass })).success(
//       function(data, status, headers, config){
//         // console.log(response.data)
//         alert(data)
//         // return false
//       }.error(
//       function(data, status, headers, config){
//         // console.log(response.data)
//         alert("Error occured")
//         // return false
//       })
//   )
// 


    // var v = $http({
    //     url: 'http://127.0.0.1:8080/login/',
    //     method: "POST",
    //     data: { email: em, password: pass }
    // })
    // .then(function(response) {
    //         // success
    //         alert("Hello")
    // }, 
    // function(response) { // optional
    //         // failed
    //         alert("Error")
    // });



        // fetch('http://127.0.0.1:8080/login/', {
        //   method: 'POST',
        //   body: JSON.stringify( { email: em, password: pass })
        // }).then(function(response) {
        //   console.log(response.json(), response.data)
        //   alert(response.json())
        //   return response.json();
        // }).then(function(data) {
        //   alert("error")
        // });

        fetch("http://0.0.0.0:8080/login/",{method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json"} ,body:  JSON.stringify({email: em, password: pass}) })
    .then((response) => response.json())
    .then((response) => { 
      // if(response.status==200){
      //   alert("success") 
      // } else {
      //   alert("no success") 
      // }
      console.log( response )
      if (response.status==200){
        try{
          // document.cookie = "userId=Rishikesh; expires=Thu 07 Jun 2017 00:00:00 UTC; path=/"+
          // console.log(document.cookie)
          // alert("Cookie Set", document.cookie)
          console.log(response.id, typeof response.id)
          setCookie("utaxi_hygull_id",response.id,1)
          console.log("cookie set")
        } catch(err) {
          alert(err.message)
        }
          
          window.location.href = "http://0.0.0.0:8080/profile/"
          console.log(response)
          return true
      } else {
          // window.location.href = "error.html"
          alert("Invalid credentials")
          console.log(response)
          return false
      }
      // for(v of ){
      //   console.log(v)
      // }
    })
    .catch((error) => {
      alert("Error while OTP Request")
      return false
    })
    
    // console.log(v)
}
</script>
</body>
</html> `

var htmlTextProfile = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Profile</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<style type="text/css">
  

.card {
    padding-top: 20px;
    margin: 10px 0 20px 0;
    background-color: rgba(214, 224, 226, 0.2);
    border-top-width: 0;
    border-bottom-width: 2px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.card .card-heading {
    padding: 0 20px;
    margin: 0;
}

.card .card-heading.simple {
    font-size: 20px;
    font-weight: 300;
    color: #777;
    border-bottom: 1px solid #e5e5e5;
}

.card .card-heading.image img {
    display: inline-block;
    width: 46px;
    height: 46px;
    margin-right: 15px;
    vertical-align: top;
    border: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}

.card .card-heading.image .card-heading-header {
    display: inline-block;
    vertical-align: top;
}

.card .card-heading.image .card-heading-header h3 {
    margin: 0;
    font-size: 14px;
    line-height: 16px;
    color: #262626;
}

.card .card-heading.image .card-heading-header span {
    font-size: 12px;
    color: #999999;
}

.card .card-body {
    padding: 0 20px;
    margin-top: 20px;
}

.card .card-media {
    padding: 0 20px;
    margin: 0 -14px;
}

.card .card-media img {
    max-width: 100%;
    max-height: 100%;
}

.card .card-actions {
    min-height: 30px;
    padding: 0 20px 20px 20px;
    margin: 20px 0 0 0;
}

.card .card-comments {
    padding: 20px;
    margin: 0;
    background-color: #f8f8f8;
}

.card .card-comments .comments-collapse-toggle {
    padding: 0;
    margin: 0 20px 12px 20px;
}

.card .card-comments .comments-collapse-toggle a,
.card .card-comments .comments-collapse-toggle span {
    padding-right: 5px;
    overflow: hidden;
    font-size: 12px;
    color: #999;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.card-comments .media-heading {
    font-size: 13px;
    font-weight: bold;
}

.card.people {
    position: relative;
    display: inline-block;
    width: 170px;
    height: 300px;
    padding-top: 0;
    margin-left: 20px;
    overflow: hidden;
    vertical-align: top;
}

.card.people:first-child {
    margin-left: 0;
}

.card.people .card-top {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 170px;
    height: 150px;
    background-color: #ffffff;
}

.card.people .card-top.green {
    background-color: #53a93f;
}

.card.people .card-top.blue {
    background-color: #427fed;
}

.card.people .card-info {
    position: absolute;
    top: 150px;
    display: inline-block;
    width: 100%;
    height: 101px;
    overflow: hidden;
    background: #ffffff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.card.people .card-info .title {
    display: block;
    margin: 8px 14px 0 14px;
    overflow: hidden;
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
    color: #404040;
}

.card.people .card-info .desc {
    display: block;
    margin: 8px 14px 0 14px;
    overflow: hidden;
    font-size: 12px;
    line-height: 16px;
    color: #737373;
    text-overflow: ellipsis;
}

.card.people .card-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    padding: 10px 20px;
    line-height: 29px;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.card.hovercard {
    position: relative;
    padding-top: 0;
    overflow: hidden;
    text-align: center;
    background-color: rgba(214, 224, 226, 0.2);
}

.card.hovercard .cardheader {
    background: url("http://lorempixel.com/850/280/nature/4/");
    background-size: cover;
    height: 135px;
}

.card.hovercard .avatar {
    position: relative;
    top: -50px;
    margin-bottom: -50px;
}

.card.hovercard .avatar img {
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 5px solid rgba(255,255,255,0.5);
}

.card.hovercard .info {
    padding: 4px 8px 10px;
}

.card.hovercard .info .title {
    margin-bottom: 4px;
    font-size: 24px;
    line-height: 1;
    color: #262626;
    vertical-align: middle;
}

.card.hovercard .info .desc {
    overflow: hidden;
    font-size: 12px;
    line-height: 20px;
    color: #737373;
    text-overflow: ellipsis;
}

.card.hovercard .bottom {
    padding: 0 20px;
    margin-bottom: 17px;
}

.btn{ border-radius: 50%; width:32px; height:32px; line-height:18px;  }

h1{
  color: green;
}
</style>
<style type="text/css">
  body{
    background-color: #ecf0f1;
  }
</style>
</head>
<body>

<div class="container" ng-app="myApp" ng-controller="customersCtrl">
  <h1 class="text-center">Profile</h1>
  <div class="row">
    <div class="col-lg-6 col-sm-6 col-md-6 col-sm--offset-3 col-lg-offset-3 col-md-offset-3 col-xs-10 col-xs-offset-1">

            <div class="card hovercard">
                <div class="cardheader">

                </div>
                <div class="avatar">
                    <img alt="" src="{{user.profile_pic}}">
                </div>
                <div class="info">
                    <div class="title">
                        <a target="_blank" href="http://scripteden.com/">{{user.fname}}</a>
                    </div>
                    <div class="desc">{{user.email}}</div>
                    <div class="desc">Software developer at Google</div>
                    <div class="desc">One of the creator of Golang</div>
                </div>
                <div class="bottom">
                    <a class="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a class="btn btn-danger btn-sm" rel="publisher"
                       href="https://plus.google.com/+ahmshahnuralam">
                        <i class="fa fa-google-plus"></i>
                    </a>
                    <a class="btn btn-primary btn-sm" rel="publisher"
                       href="https://plus.google.com/shahnuralam">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a class="btn btn-warning btn-sm" rel="publisher" href="https://plus.google.com/shahnuralam">
                        <i class="fa fa-behance"></i>
                    </a>
                </div>
            </div>

        </div>

  </div>
  <p id="pId"></p>
</div>
<script type="text/javascript">
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
        var myCookie = document.cookie;
        console.log("cookie value is ", myCookie)
        // document.getElementById("pId").innerHTML = myCookie+"some";
        console.log("cookie type: ", typeof myCookie)
        console.log("Split", myCookie.split("="))
        uid = 1

        cookieArr = myCookie.split("=")
        console.log(cookieArr)

        var uid = cookieArr[1]

        console.log("User id: ", uid)

  $http.get("http://0.0.0.0:8080/users/"+uid).then(function (response) {
  	  console.log("response.data: ", response.data)
      $scope.user = response.data;
  });
});
</script>

</body>
</html>
`
