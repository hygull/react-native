import React from "react"
import { AppRegistry, Text, View} from "react-native"
import { StackNavigator } from "react-navigation"

//Home Screen
class CabBookingHomeScreen extends React.Component {
	static navigationOptions = {
		title: "Home",
	}

	render() {
		return 	<View>
				<Text style={
							{color: "green", fontWeight: "bold", 
							textAlign: "center", paddingTop: 20, fontFamily:"Verdana"}
				}> 
					Hello, programmers!
				</Text>
				</View>

	}
}

//About Screen
class CabBookingAboutScreen extends React.Component {
	static navigationOptions = {
		title: "About",
	}

	render() {
		return <View>
					<Text> This is About Us page</Text>
				</View>
	}
}

const CabBookingApp = StackNavigator(
	{
		Home: {screen: CabBookingHomeScreen}
	}
)

AppRegistry.registerComponent("CabBookingApp", () => CabBookingApp)