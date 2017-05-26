	/**
		{
			"created_on": "26 may 2017",
			"todos": [
				"go get github.com/go-sql-driver/mysql",
				"postman(optional)",
				"browser(optional)",	
			],
			"aim": "Reading fname column into []string(slice of strings)"
		}
	*/


	/* 
	mysql> select * from users;
	+----+-----------+----------+----------+-------------------------------+--------------+
	| id | fname     | lname    | uname    | email                         | contact      |
	+----+-----------+----------+----------+-------------------------------+--------------+
	|  1 | Rishikesh | Agrawani | hygull   | rishikesh0014051992@gmail.com | 917353787704 |
	|  2 | Sandeep   | E        | sandeep  | sandeepeswar8@gmail.com       | 919739040038 |
	|  3 | Darshan   | Sidar    | darshan  | sidardarshan@gmail.com        | 917996917565 |
	|  4 | Surendra  | Prajapat | surendra | surendrakgadwal@gmail.com     | 918385894407 |
	|  5 | Mukesh    | Jakhar   | mukesh   | mjakhar.kjahhar@gmail.com     | 919772254140 |
	+----+-----------+----------+----------+-------------------------------+--------------+
	5 rows in set (0.00 sec)

	mysql> 
	*/

	package main

	import "log"
	import "net/http"
	import "encoding/json"

	import (
		_"github.com/go-sql-driver/mysql"	
		"database/sql"
	)

	func users(w http.ResponseWriter, r *http.Request) {
		// db, err := sql.Open("mysql", "<username>:<password>@tcp(127.0.0.1:<port>)/<dbname>"	)
		db, err := sql.Open("mysql", "hygull:admin@67@tcp(127.0.0.1:3306)/practice_db?charset=utf8")

		w.Header().Set("Content-Type", "application/json")

		if err != nil {
			log.Fatal(err)
		}

		rows, err := db.Query("select id, fname, lname, uname, email, contact from users")

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
		}
			
		var users []User

		for rows.Next() {
			var id, contact int
			var fname string
			var lname string
			var uname, email string

			rows.Scan(&id ,&fname, &lname, &uname, &email, &contact)
			users = append(users, User{id, fname, lname, uname, email, contact })
		}
		
		usersBytes, _ := json.Marshal(&users)
		
		w.Write(usersBytes)
		db.Close()
	}

	func main() {
		http.HandleFunc("/users/", users)
		http.ListenAndServe(":8080", nil)
	}

/* REQUSET

   http://127.0.0.1:8080/users/
*/

/* RESPONSE

[
  {
    "id": 1,
    "firstname": "Rishikesh",
    "lastname": "Agrawani",
    "username": "hygull",
    "email": "mjakhar.kjakhar@gmail.com",
    "contact": 917353787704
  },
  {
    "id": 2,
    "firstname": "Sandeep",
    "lastname": "E",
    "username": "sandeep",
    "email": "mjakhar.kjakhar@gmail.com",
    "contact": 919739040038
  },
  {
    "id": 3,
    "firstname": "Darshan",
    "lastname": "Sidar",
    "username": "darshan",
    "email": "mjakhar.kjakhar@gmail.com",
    "contact": 917996917565
  },
  {
    "id": 4,
    "firstname": "Surendra",
    "lastname": "Prajapat",
    "username": "surendra",
    "email": "mjakhar.kjakhar@gmail.com",
    "contact": 918385894407
  },
  {
    "id": 5,
    "firstname": "Mukesh",
    "lastname": "Jakhar",
    "username": "mukesh",
    "email": "mjakhar.kjakhar@gmail.com",
    "contact": 919772254140
  }
]
*/
