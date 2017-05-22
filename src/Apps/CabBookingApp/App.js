import React from "react"
import { AppRegistry, Text, View, Button} from "react-native"
import { StackNavigator } from "react-navigation"

import DataGrabbingRestComponent from "./MyComponents/DataGrabbingRestComponent/DataGrabbingRestComponent"
import HeadImageHelloComponent from "./MyComponents/HeadImageHelloComponent/HeadImageHelloComponent"

//Home Screen
class CabBookingHomeScreen extends React.Component {
	static navigationOptions = {
		title: "Home",
	}

	render() {
		//Linking to About Screen
		const { navigate } = this.props.navigation

		return 	<View>
					<HeadImageHelloComponent />
					<Button onPress={ () => navigate("Chat")} title="About"/>
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
					<Text style={
									{color: "blue", fontWeight: "bold", 
									textAlign: "center", paddingTop: 20, 
									fontSize:20, fontFamily:"Verdana"
							}
					}> These are our Users</Text>
					<DataGrabbingRestComponent />
				</View>
	}
}

const CabBookingApp = StackNavigator(
	{
		Home: {screen: CabBookingHomeScreen},
		Chat: {screen: CabBookingAboutScreen},
	}
)

AppRegistry.registerComponent("CabBookingApp", () => CabBookingApp)