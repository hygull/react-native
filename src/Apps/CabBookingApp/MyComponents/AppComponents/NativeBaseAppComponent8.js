import React from "react"
import { AppRegistry, Text, View, Button, Image, ScrollView, TextInput,
	KeyboardAvoidingView, StyleSheet, WebView, TouchableOpacity, AlertIOS
 } from "react-native"
import { StackNavigator } from "react-navigation"
import Cookie from "react-native-cookie"
// import Video  from "react-native-video"
var Video = require("react-native-video")

import DataGrabbingRestComponent from "../../MyComponents/DataGrabbingRestComponent/DataGrabbingRestComponent"
import HeadImageHelloComponent from "../../MyComponents/HeadImageHelloComponent/HeadImageHelloComponent"
import GeoComponent from "../../MyComponents/GeoComponent/GeoComponent"
//Home Screen
class CabBookingHomeScreen extends React.Component {
	static navigationOptions = {
		title: "Home",
	}

	render() {
		//Linking to About Screen
		const { navigate } = this.props.navigation

		return 	<View style={{backgroundColor: "#d8f3d8", flex: 1, alignItems: "center", justifyContent: "center"}}>
					<Image source={require("../../img/CAB2.png")}  style={{ height: 120, width: 120}}/>
					<Text style={{color: "black",fontWeight: "bold", fontSize: 25}}> CabBooking App</Text>
					<Text style={{color: "navy", fontSize: 10,}}>An {" "}
						<Text style={{color: "blue", fontSize: 10, fontWeight: "bold"}}>Indian app to book taxies/cabs</Text>
					
					</Text>

					<View style={{ flexDirection: "row"}}> 
						<TouchableOpacity style={[styles.booknow, { marginRight: 20}]} onPress={() => navigate("SignUp")}>
							<Text style={[styles.booknow_txt, {textAlign: "center", fontFamily: "Thonburi"}]}>
								REGISTER
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.booknow} onPress={() => navigate("Login")}>
							<Text style={[styles.booknow_txt, {textAlign: "center", fontFamily: "Thonburi"}]}>
								LOGIN
							</Text>
						</TouchableOpacity>
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
					<GeoComponent />
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
							source={{uri: "https://www.youtube.com/"}} style={{marginTop: 45, flex:1, height:700}}
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
					
					<Image source={require('../../img/USER2.png')} style={styles.pic_small}/>
	
						<TextInput
							placeholder="Email"
							placeholderTextColor="#bdc3c7"
							autoCapitalize="none"
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

	constructor() {
		super()
		this.state = {
			typedOtp: 0 
		}
	}

	static navigationOptions = ({navigation}) => ({
		// title: `OTP , ${navigation.state.params.passedOtp}`
		title: `OTP Validation`
	})

	testOtp(){
		const { navigate } = this.props.navigation;
		const {params} = this.props.navigation.state;
		// AlertIOS.alert("Here I am")

		console.log(params.passedOtp, this.state.typedOtp)
		console.log(typeof params.passedOtp, typeof this.state.typedOtp)
		console.log(params.passedOtp != this.state.typedOtp)
		if(params.passedOtp != this.state.typedOtp){
			AlertIOS.alert("Wrong OTP, Retry")
			navigate("SignUp")
		} else {
			AlertIOS.alert("OTP is correct")
			navigate("CabBook")
		}
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
							onChangeText={(typedOtp) => this.setState({typedOtp})}
							autoFocus
							
							
						/>
						
						<TouchableOpacity style={styles.login} onPress={() => {this.testOtp() }}>
							<Text style={styles.login_txt} >
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
			fname: "",
			lname: "",
			contact: "",
			email : "",
			password: "",
			conf_password: "",
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

				// Cookie.set("/cab-booking/signup/", { path: "signup", email: "email@gmail.com" }).then(console.log("Successfully set the cookie"))
				console.log("Redirecting to CabBook Screen") 
				navigate("OtpEnteringScreen", {passedOtp: response.otp})
				return
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
					
					<Image source={require('../../img/USER2.png')} style={styles.pic_small}/>
	
						<TextInput
							placeholder="First name"
							autoCapitalize="none"
							placeholderTextColor="#bdc3c7"
							returnKeyType="next"
							style={styles.text_input}
							autoFocus
							onChangeText={(fname) => this.setState({fname})}
						/>
						
						<TextInput
							placeholder="Last name"
							autoCapitalize="none"
							placeholderTextColor="#bdc3c7"
							returnKeyType="next"
							style={styles.text_input}
							autoFocus
							onChangeText={(lname) => this.setState({lanme})}
						/>

						<TextInput
							placeholder="Mobile Number"
							autoCapitalize="none"
							placeholderTextColor="#bdc3c7"
							returnKeyType="next"
							style={styles.text_input}
							autoFocus
							onChangeText={(lname) => this.setState({lanme})}
						/>

						<TextInput
							placeholder="Email"
							autoCapitalize="none"
							placeholderTextColor="#bdc3c7"
							returnKeyType="next"
							style={styles.text_input}
							autoFocus
							onChangeText={(email) => this.setState({email})}
							
						/>

						<TextInput
							placeholder="Password"
							autoCapitalize="none"
							placeholderTextColor="#bdc3c7"
							returnKeyType="next"
							style={styles.text_input}
							autoFocus
							onChangeText={(password) => this.setState({password})}
						/>

						<TextInput
							placeholder="Confirm password"
							autoCapitalize="none"
							placeholderTextColor="#bdc3c7"
							returnKeyType="next"
							style={styles.text_input}
							autoFocus
							onChangeText={(conf_password) => this.setState({conf_password})}
						/>

						<TouchableOpacity style={styles.login} onPress={() => { this.getOTP() }}>
							<Text style={styles.login_txt}>
								Register
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
		height: 85, width:85,
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

