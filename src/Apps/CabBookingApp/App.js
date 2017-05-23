import React from "react"
import { AppRegistry, Text, View, Button, Image, ScrollView, FlatList} from "react-native"
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
		title: `Hi, ${navigation.state.params.user}!`
	})

	render() {
		const {params} = this.props.navigation.state
		return <View>
					<Text style={
									{color: "blue", fontWeight: "bold", 
									textAlign: "center", paddingTop: 20, 
									fontSize:20, fontFamily:"Arial", paddingBottom: 10
							}
					}> Hey {params.user}, these are our Developers</Text>
					<Image source={require("./img/cute_child.jpg")} style={styles.pic}/>

					<DataGrabbingRestComponent />
				</View>
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
						<Image source={require('./img/sisters_pot_filling.jpg')} style={styles.pic}/>

						<Text style={styles.txt}>White Cab</Text> 
						<Image source={require('./img/car_white.jpeg')} style={styles.pic}/>

						<Text style={styles.txt}>Huts</Text> 
						<Image source={require('./img/huts.jpg')} style={styles.pic}/>

						<Text style={styles.txt}>Another huts</Text> 
						<Image source={require('./img/huts2.jpeg')} style={styles.pic}/>

						<Text style={styles.txt}>Yellow Cab</Text> 
						<Image source={require('./img/car_yellow.jpg')} style={styles.pic}/>

						<Text style={styles.txt}>Bull Cart</Text> 
						<Image source={require('./img/bull_cart.jpg')} style={styles.pic}/>

						<Text style={styles.txt}>House</Text> 
						<Image source={require('./img/house.jpg')} style={styles.pic}/>

						<Text style={styles.txt}>Village of mat houses</Text> 
						<Image source={require('./img/village-of-mat-houses-near-garoet-java-by-marianne-north-1876.jpg')} style={styles.pic}/>

						<Text style={styles.txt}>Village</Text> 
						<Image source={require('./img/village.jpg')} style={styles.pic}/>

						<Text style={styles.txt}>Bull Cart</Text> 
						<Image source={require('./img/bull_cart.jpeg')} style={styles.pic}/>
						
						<Text style={styles.txt}>Wood cutter</Text> 
						<Image source={require('./img/village_wood.jpg')} style={styles.pic}/>
						
						<Text style={styles.txt}>Food cooking women</Text> 
						<Image source={require('./img/food_cooking_women_camel.jpg')} style={styles.pic}/>
					</ScrollView>
				</View>
	}
}


const CabBookingApp = StackNavigator(
	{
		Home: {screen: CabBookingHomeScreen},
		Chat: {screen: CabBookingAboutScreen},
		Village: {screen: CabBookingPicScreen},
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
	}
}
AppRegistry.registerComponent("CabBookingApp", () => CabBookingApp)

