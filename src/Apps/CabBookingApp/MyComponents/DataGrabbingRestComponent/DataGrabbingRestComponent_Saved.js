import React, { Component } from "react"
import { AppRegistry, Text, View, ListView, StyleSheet, AlertIOS, Button, 
		TouchableOpacity
} from "react-native"

export default class DataGrabbingRestComponent extends Component {
	constructor() {
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2})
		this.state = {
			userDataSource: ds
		}

	}

	// componentDidMount() {
	// 	this.fetchUsers()
	// }	

	fetchUsers() {
		// fetch("http://127.0.0.1:8080/users/")
		fetch("https://jsonplaceholder.typicode.com/users")
		// fetch("https://jsonplaceholder.typicode.com/posts")
		// fetch("http://services.groupkt.com/country/get/all")
		// fetch("http://rishikesh67.pythonanywhere.com/hygull/api/videos/")
		// fetch(
		// 	"http://rishikesh67.pythonanywhere.com/hygull/api/videos/",
		// 	 {
		// 	  method: 'GET',
		// 	  headers: {
		// 	    'Accept': 'application/json',
		// 	    'Content-Type': 'application/json',
		// 	    "Access-Control-Allow-Origin": "http://rishikesh67.pythonanywhere.com",
		// 	  },			  
		// 	})		
		.then((response) => response.json())
		.then((response) => {
			this.setState({
				userDataSource: this.state.userDataSource.cloneWithRows(response.slice(0,5))
			})
		})
		.catch((error) => {
			console.log("Error occured")
			AlertIOS.alert("Error while GET request")
			// throw error
		})
	}

	showUsers() {
		this.fetchUsers()
	}
	

	renderRow(user) {
		return (
			<View style={styles.row}>
				<Text style={styles.rowText}> 
					<Text style={{color:"green"}} >{user.name}</Text>, <Text style={{color:"red"}}>{user.address.street}</Text>
				</Text>

			</View>
		)
	}

	render() {
		return (
				<View style={{borderRadius:5}}>
				 <TouchableOpacity onPress={() => this.showUsers()} 
				 	style={{margin: 10, marginLeft:10, marginRight: 10,borderRadius:5 }}
				 >
				 	<View>
				 		<Text style={{backgroundColor:"#27ae60",borderRadius: 5, borderWidth: 1, borderColor: "#3498db", padding: 5, fontSize: 15,color: "white", textAlign: "center", fontWeight: "bold"}}>
				 			See Users
				 		</Text>
				 	</View>
				 </TouchableOpacity>	
					<ListView
						dataSource = { this.state.userDataSource }
						renderRow = { this.renderRow.bind(this) }
					/>
				</View>
		)
	}
}

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "#f4f4f4",
		marginBottom: 3,
	},
	rowText: {
		flex: 1,
		textAlign: "center"
	},
	button:{
		backgroundColor: "green",
		color: "red",
		fontWeight: "bold",
	}
})

AppRegistry.registerComponent("DataGrabbingRestComponent", () => DataGrabbingRestComponent)
