import React from "react"
import { AppRegistry, Text} from "react-native"
import { StackNavigator } from "react-navigation"

//Home Screen
class CabBookingHomeScreen extends React.Component {
	static navigationOptions = {
		title: "Home",
	}

	render() {
		return <Text style={
							{color: "green", fontWeight: "bold", 
							textAlign: "center", paddingTop: 20, fontFamily:"Verdana"}
				}> 
					Hello, programmers!
				</Text>;
	}
}

const CabBookingApp = StackNavigator(
	{
		Home: {screen: CabBookingHomeScreen}
	}
)

AppRegistry.registerComponent("CabBookingApp", () => CabBookingApp)