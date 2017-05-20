import React, { Component } from "react"
import { AppRegistry, Text, View, ListView, StyleSheet, AlertIOS } from "react-native"

export default class DataGrabbingRestComponent extends Component {
	constructor() {
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2})
		this.state = {
			userDataSource: ds
		}

	}

	componentDidMount() {
		this.fetchUsers()
	}

	fetchUsers() {
		fetch("https://jsonplaceholder.typicode.com/users")
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
				userDataSource: this.state.userDataSource.cloneWithRows(response)
			})
		})
		.catch((error) => {
			console.log("Error occured")
			// AlertIOS.alert("Error while GET request")
			// throw error
		})
	}

	renderRow(user, sectionId, rowId, highlighrRow) {
		return (
			<View style={styles.row}>
				<Text style={styles.rowText}> 
					{user.name}
				</Text>
			</View>
		)
	}

	render() {
		return (
			<ListView
				dataSource={this.state.userDataSource}
				renderRow={this.renderRow.bind(this)}
			/>
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
		flex: 1
	}
})

AppRegistry.registerComponent("DataGrabbingRestComponent", () => DataGrabbingRestComponent)
