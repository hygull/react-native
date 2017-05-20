import React, { Component } from "react"
import { Text, AppRegistry, View } from "react-native" 

export default class SimpleTextComponent extends Component {
	render() {
		return (
			<View>
				<Text style = {styles.text}>Employees of Offlinetrend/Dotrixs</Text>
			</View>
		)
	}
}

const styles = {
	text: {
			color: "red", 
			fontSize: 10, 
			textAlign: "center", 
			flexDirection: "row"
	}
}