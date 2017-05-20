import React, {Component} from "react"
import {
	AppRegistry, 
	TouchableHighlight, 
	Text, 
	StyleSheet,
	AlertIOS
} from "react-native"

export default class VideoGrabbingRestComponent extends Component {

	getVideos() {
		console.log("Pressed")
		AlertIOS.alert("Hello. Are you are Rishikesh?")
	}

	render(){
		return (
			<TouchableHighlight style={styles.touch} onPresss={this.getVideos}>
				<Text style={styles.text}>Get videos</Text>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create(
	{
		touch:{
			backgroundColor:"navy",

		},
		text:{
			color:"white",
			textAlign:"center"
		}
	}
) 
AppRegistry.registerComponent("VideoGrabbingRestComponent", () => VideoGrabbingRestComponent)