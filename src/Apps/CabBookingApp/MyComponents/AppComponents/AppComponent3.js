import React from "react"
import { AppRegistry, Text, View, Button, Image, ScrollView, TextInput,
	KeyboardAvoidingView
 } from "react-native"
import { StackNavigator } from "react-navigation"

import DataGrabbingRestComponent from "../../MyComponents/DataGrabbingRestComponent/DataGrabbingRestComponent"
import HeadImageHelloComponent from "../../MyComponents/HeadImageHelloComponent/HeadImageHelloComponent"

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
					
					<View style={styles.view1}>
						<Button 
							onPress={ () => 
								navigate("Chat", { user: "Rojert" })
							} 
							title="About"
						/>
					</View>
					<View style={styles.view2}>
						<Button 
							onPress={ () => 
								navigate("CabBook")
							} 
							title="Get a Cab"
						/>
					</View>
					<View style={styles.view3}>
						<Button 
							onPress={ () => 
								navigate("Village")
							} 
							title="Pics"
						/>
					</View>

				</View>

	}
}

//About Screen
class CabBookingAboutScreen extends React.Component {
	// static navigationOptions = {
	// 	title: "About",
	// }
	static navigationOptions = ({ navigation }) => ({
		// title: `Hi, ${navigation.state.params.user}!`
		title: "About"
	})

	render() {
		const {params} = this.props.navigation.state
		return <View>
					<Text style={
									{color: "#1abc9c", fontWeight: "bold", 
									textAlign: "center", paddingTop: 20, 
									fontSize:20, fontFamily:"Arial", paddingBottom: 2
							}}
					>
						Hey {params.user}
					</Text>
					<Text style={
									{color: "#2c3e50", fontWeight: "bold", 
									textAlign: "center", paddingTop: 2, 
									fontSize:20, fontFamily:"Arial", paddingBottom: 10
							}
					}> these are our Developers</Text>
					<Image source={require("../../img/cute_child.jpg")} style={styles.pic}/>

					<DataGrabbingRestComponent />
				</View>
	}
}

class CabBookingScreen extends React.Component {
	static navigationOptions = {
		title: "Enjoy the Cab ride!!!"
	}

	render() {
		return  <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
				<View style={ styles.book_container_view }>
					
						<Text style={[styles.loctext,{marginTop: 25}]}>
						<Image source={require("../../img/from_map.png")} style={{height:20, width: 20}}/>
							Where are you now?
						</Text>
						<TextInput
							placeholder="Enter your location"
							style={styles.text_input}
						/>
				
						<Text style={[styles.loctext, {marginTop: 20}]}>
							<Image source={require("../../img/to_map.png")} style={{height:20, width: 20}}/>
							Where do you wanna go?
						</Text>
						<TextInput
							placeholder="Enter your destination"
							style={styles.text_input}
						/>
					
				</View>
				</KeyboardAvoidingView>
			
	}
}

//PicScreen
class CabBookingPicScreen extends React.Component {
	static navigationOptions = {
		title: "Pictures"
	}

	render() {
		return <View style={styles.container}>
					<ScrollView>

						<Text style={styles.txt}>Water filling - Awesome work</Text> 
						<Image source={require('../../img/sisters_pot_filling.jpg')} style={styles.pic}/>

						<Text style={styles.txt}>White Cab</Text> 
						<Image source={require('../../img/car_white.jpeg')} style={styles.pic}/>

						<Text style={styles.txt}>Huts</Text> 
						<Image source={require('../../img/huts.jpg')} style={styles.pic}/>

						<Text style={styles.txt}>Another huts</Text> 
						<Image source={require('../../img/huts2.jpeg')} style={styles.pic}/>

						<Text style={styles.txt}>Yellow Cab</Text> 
						<Image source={require('../../img/car_yellow.jpg')} style={styles.pic}/>

						<Text style={styles.txt}>Bull Cart</Text> 
						<Image source={require('../../img/bull_cart.jpg')} style={styles.pic}/>

						<Text style={styles.txt}>House</Text> 
						<Image source={require('../../img/house.jpg')} style={styles.pic}/>

						<Text style={styles.txt}>Village of mat houses</Text> 
						<Image source={require('../../img/village-of-mat-houses-near-garoet-java-by-marianne-north-1876.jpg')} style={styles.pic}/>

						<Text style={styles.txt}>Village</Text> 
						<Image source={require('../../img/village.jpg')} style={styles.pic}/>

						<Text style={styles.txt}>Bull Cart</Text> 
						<Image source={require('../../img/bull_cart.jpeg')} style={styles.pic}/>
						
						<Text style={styles.txt}>Wood cutter</Text> 
						<Image source={require('../../img/village_wood.jpg')} style={styles.pic}/>
						
						<Text style={styles.txt}>Rural area</Text> 
						<Image source={require('../../img/rural.jpg')} style={styles.pic}/>

						<Text style={styles.txt}>Food cooking women</Text> 
						<Image source={require('../../img/food_cooking_women_camel.jpg')} style={styles.pic}/>
					</ScrollView>
				</View>
	}
}


const CabBookingApp = StackNavigator(
	{
		Home: {screen: CabBookingHomeScreen},
		Chat: {screen: CabBookingAboutScreen},
		Village: {screen: CabBookingPicScreen},
		CabBook: {screen: CabBookingScreen},
	}
)

const styles = {
	pic: {height:200, width:375},
	txt: {
			fontFamily: "Verdana", textAlign: "center", 
			fontSize: 15,  marginTop:10, color: "white",
			marginBottom: 2,
		},
	container: {backgroundColor: "#1abc9c"},
	view1: {
		backgroundColor: "#ccffcc",
	},
	view2: {
		backgroundColor: "#c1f0c1"
	},
	view3: {
		backgroundColor: "#c1f0e1"
	},
	book_container_view: {
		// backgroundColor: "#d6f5d6",
		backgroundColor: "#333300",
		flex: 1,
		alignItems: "center",
		// justifyContent: "center",
	},
	text_input: {
		height: 40, 
		backgroundColor: "#ffffe6", 
		textAlign: "center",
		margin: 10,
		padding: 5,
		borderRadius: 5,

	},
	loctext: {
		color: "white",
		fontSize: 23,
		fontFamily: "Arial",
		fontWeight: "bold",
	},
	keyboard: {
		height: 300,
		width: 375,
		flex: 1,
	}
}
AppRegistry.registerComponent("CabBookingApp", () => CabBookingApp)

