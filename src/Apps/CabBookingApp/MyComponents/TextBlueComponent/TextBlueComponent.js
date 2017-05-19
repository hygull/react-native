import React, {Component} from "react"

import { Text, View, StyleSheet,AppRegistry } from "react-native"

export default class TextBlueComponent extends Component{
	render(){
		return (
			<View>
				<Text style={styles.text}>The{" "} 

					<Text style={{ color:"black", fontWeight:"bold"}}>BlackBerry </Text>
					is awesome mobile phone.
				</Text>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	text:{
		color:"blue",
		textAlign:"center",
	}
})

AppRegistry.registerComponent("TextBlueComponent", () => TextBlueComponent)
