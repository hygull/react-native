import React, { Component } from "react"
import { AppRegistry, Text, View, Listview, StyleSheet } from "react-native"

const users = [
	{
		"name" : "Rishikesh Agrawani",
		"age" : 25,
	},
	{
		"name" : "Hemkesh Agrawani",
		"age" : 23,
	},
	{
		"name" : "Malinikesh Agrawani",
		"age" : 21,
	}
]

export default class ListViewComponent extends Component {
	constructor() {
		super();
		const ds = Listview.DataSource({rowHasChanged: (r1, r2) => r1!==r2})
		this.state = {
			userDataSource: ds.cloneWithRows(users)
		}

	}

	renderRow(user, sectionId, rowId, highlighrRow) {
		return (
			<View style={styles.row}>
				<Text style={styles.rowText> 
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
		flexdirection: "row",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "#f4f4f4",
		marginBottom: 3,
	},
	rowText: {
		flex: 1
	}
})

AppRegistry.registerComponent("ListViewComponent", () => ListViewComponent)
