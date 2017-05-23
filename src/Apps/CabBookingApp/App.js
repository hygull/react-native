import React from "react"
import { AppRegistry, Text, View, Button, Image} from "react-native"
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
					<Button 
						onPress={ () => 
							navigate("Chat", { user: "Rojert" })
						} 
						title="About"
					/>
				</View>

	}
}

//About Screen
class CabBookingAboutScreen extends React.Component {
	// static navigationOptions = {
	// 	title: "About",
	// }
	static navigationOptions = ({ navigation }) => ({
		title: `Hi, ${navigation.state.params.user}!`
	})

	render() {
		const {params} = this.props.navigation.state
		return <View>
					<Text style={
									{color: "blue", fontWeight: "bold", 
									textAlign: "center", paddingTop: 20, 
									fontSize:20, fontFamily:"Georgia", paddingBottom: 10
							}
					}> Hey {params.user}, these are our users</Text>
					<Image source={require("./img/cute_child.jpg")} style={{height:200, width:375}}/>
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

