import { 
			Text, View, AppRegistry, 
			TouchableHighlight,
			TouchableOpacity, TouchableWithoutFeedback,
			AlertIOS,
			StyleSheet,
		} from "react-native"
import React, { Component } from "react"

export default class TouchableComponent extends Component {

	onPressOpacity () {
		AlertIOS.alert("You pressed Opacity Component")
	}

	onPressHighlight () {
		AlertIOS.alert("You pressed Highlight Component")
	}

	onPressWithoutFeedback () {
		AlertIOS.alert("You pressed Without Feedback Component")
	}

	render() {
		return (
			<View style={styles.view}>
				<TouchableHighlight onPress={ this.onPressHighlight }>
					<Text style={styles.text1}> Press Me - TouchableHighlight </Text>
				</TouchableHighlight>
				
				<TouchableOpacity onPress={ this.onPressOpacity }>
					<Text style={styles.text2}> Press Me - TouchableOpacity</Text>
				</TouchableOpacity>

				<TouchableWithoutFeedback>
					<View><Text onPress={ this.onPressWithoutFeedback } style={styles.text3}>Press Me {this.props.name} - TouchableWithoutFeedback </Text></View>
				</TouchableWithoutFeedback>
			</View>
		)
	} 
}

const styles = StyleSheet.create({
	view: {
		"justifyContent" : "center",
		"alignItems": "center",
	},
	text1: {
		color: "green"
	},
	text2: {
		color: "blue"
	},
	text3: {
		color: "orange"
	}
})