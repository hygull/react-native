import React from "react"
import { AppRegistry, Text, View, Button, Image, ScrollView, TextInput,
	KeyboardAvoidingView, StyleSheet, WebView, TouchableOpacity, AlertIOS
 } from "react-native"
import { StackNavigator } from "react-navigation"
// import Video  from "react-native-video"
var Video = require("react-native-video")

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
					<View style={styles.view3	}>
						<Button 
							onPress={ () => 
								navigate("SignUp")
							} 
							title="Create Account"
						/>
					</View>
					<View style={styles.view2	}>
						<Button 
							onPress={ () => 
								navigate("Login")
							} 
							title="Sign in"
						/>
					</View>
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

					<View style={styles.view2}>
						<Button 
							onPress={ () => 
								navigate("Youtube")
							} 
							title="Youtube"
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
		return <ScrollView>
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
				</ScrollView>
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
						<TouchableOpacity style={styles.booknow}>
							<Text style={styles.booknow_txt}>
								Book Now
							</Text>
						</TouchableOpacity>
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

		// // Later to trigger fullscreen
		// this.player.presentFullscreenPlayer()

		// // To set video position in seconds (seek)
		// this.player.seek(0)

		

		return <View style={styles.book_container_view}>
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


class YoutubeScreen extends React.Component{
	static navigationOptions = {
		title: "Youtube"
	}

	render() {
		return <View>
					<ScrollView>
							<WebView
							source={{uri: "https://www.youtube.com/"}}
							style={{marginTop: 45, flex:1, height:700}}
							/>
					</ScrollView>
				</View>
	}
}

class LoginScreen extends React.Component {
	constructor() {
		super()
		this.state = {
			email : "",
		}
	}

	static navigationOptions = {
		title: "Login"
	}

	render() {
		return <KeyboardAvoidingView behavior="padding" style={styles.keyboard2}>
			<View style={styles.login_container_view}>
					
					<Image source={require('../../img/rishi.jpg')} style={styles.pic_small}/>
	
						<TextInput
							placeholder="Email"
							placeholderTextColor="#bdc3c7"
							returnKeyType="next"
							style={styles.text_input}
							autoFocus
							onChangeText={(email) => this.setState({email})}
							
						/>
						<TextInput
							placeholder="Password"
							style={styles.text_input}
							returnKeyType="go"
							secureTextEntry
						/>
						<TouchableOpacity style={styles.login}>
							<Text style={styles.login_txt}>
								LOGIN
							</Text>
						</TouchableOpacity>
						<Text style={styles.txt}>{this.state.email}</Text>
				</View>
			</KeyboardAvoidingView>
	}
}

class OtpEnteringScreen extends React.Component {
	static navigationOptions = {
		title: "OTP Validation"
	}

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.keyboard2}>
			<View style={styles.login_container_view}>
					
					<Image source={require('../../img/otp.png')} style={styles.pic_small}/>
	
						<TextInput
							placeholder="Enter the OTP that you got"
							placeholderTextColor="#bdc3c7"
							returnKeyType="go"
							style={styles.text_input}
							autoFocus
							
							keyboardType="numeric"
						/>
						
						<TouchableOpacity style={styles.login}>
							<Text style={styles.login_txt}>
								Submit
							</Text>
						</TouchableOpacity>
						
				</View>
			</KeyboardAvoidingView>
		)
	}
}

class SignUpScreen extends React.Component {
	constructor() {
		super()
		this.state = {
			email : "",
			otp: 0
		}
	}	

	static navigationOptions = {
		title: "Create Account"
	}

	getOTP() {
		const { navigate } = this.props.navigation;

		fetch("http://127.0.0.1:8080/create/",{method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json"} ,body: 	JSON.stringify({email: this.state.email}) })
		.then((response) => response.json())
		.then((response) => { 
			if(response.status==200){
				AlertIOS.alert(JSON.stringify("OTP: "+response.otp))
				console.log("Redirecting to CabBook Screen") 
				navigate("OtpEnteringScreen")
			} else {
				AlertIOS.alert(JSON.stringify("Error Message: "+response.message)) 
			}
		})
		.catch((error) => {
			AlertIOS.alert("Error while OTP Request")
		})
	}

	render() {
		return <KeyboardAvoidingView behavior="padding" style={styles.keyboard2}>
			<View style={styles.login_container_view}>
					
					<Image source={require('../../img/user.png')} style={styles.pic_small}/>
	
						<TextInput
							placeholder="Email"
							placeholderTextColor="#bdc3c7"
							returnKeyType="next"
							style={styles.text_input}
							autoFocus
							onChangeText={(email) => this.setState({email})}
							
						/>
						
						<TouchableOpacity style={styles.login} onPress={() => { this.getOTP() }}>
							<Text style={styles.login_txt}>
								Get OTP
							</Text>
						</TouchableOpacity>
						<Text style={styles.txt}>{this.state.email}</Text>
				</View>
			</KeyboardAvoidingView>
	}
}

const CabBookingApp = StackNavigator(
	{
		Home: {screen: CabBookingHomeScreen},
		Login: {screen: LoginScreen},
		SignUp: {screen: SignUpScreen},
		Chat: {screen: CabBookingAboutScreen},
		Village: {screen: CabBookingPicScreen},
		CabBook: {screen: CabBookingScreen},
		Youtube: {screen: YoutubeScreen},	
		OtpEnteringScreen: {screen: OtpEnteringScreen},
	}
)

const styles = StyleSheet.create({
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
	},
	video: {
		position: "absolute",
		top: 0,
		right:0,
		bottom: 0,
		left: 0,
	},
	login_container_view: {
		backgroundColor: "#1abc9c",
		// backgroundColor: "#333300",
		flex: 1,
		alignItems: "center",
		// justifyContent: "center",
	},
	login: {
		backgroundColor: "#2980b9",
	},
	login_txt: {
		
		backgroundColor:"#34495e",
		padding: 8,
		color: "white",
		fontWeight: "bold"
	},
	booknow: {
		backgroundColor: "#3498db",
		marginTop: 15,
	},

	booknow_txt: {
		padding: 12,
		color: "white",
		fontWeight: "bold",
		fontSize: 15,
		fontFamily: "AppleSDGothicNeo-Regular",
		borderRadius: 5,
	},

	pic_small: {
		height: 85, width:75,
		borderRadius:10

	},

	keyboard2: {
		height: 300,
		width: 375,
		flex: 1,
		// alignItems: "center",
		justifyContent: "center",
		paddingTop: 40,
		backgroundColor:"#1abc9c",
	},
})

AppRegistry.registerComponent("CabBookingApp", () => CabBookingApp)

