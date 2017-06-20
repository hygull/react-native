import React from "react"
import { AppRegistry, Text, View, Button, Image, ScrollView, TextInput,
	KeyboardAvoidingView, AlertIOS
 } from "react-native"
 import PhoneInput from 'react-native-phone-input'

export default class CabBookingApp extends React.Component {
	f(n) {
		AlertIOS.alert("Hello "+n)
	}
	render() {
		return <KeyboardAvoidingView behavior={"padding"} ref={'keyboardView'} keyboardVerticalOffset={-500} style={{"flex":1}}>
					<ScrollView >
						<View>
							<Text style={{marginTop:60, textAlign:"center"}}>Type something on the below Screen</Text>
							<TextInput
								placeholder="Enter text"
								style={{
									height: 40, 
									backgroundColor: "#ffffe6", 
									textAlign: "center",
									margin: 10,
									padding: 5,
									borderRadius: 5,
								}}
							/>

							<PhoneInput ref="phone" 
								textProps= {{placeholder: 'Telephone number'}}
								initialCountry="in"
								cancelText="Cancel"
								value="91"
								onChangePhoneNumber={(number) => this.setState({number})}
								style={{
									height: 40, 
									backgroundColor: "#ffffe6", 
									
									margin: 10,
									padding: 5,
									borderRadius: 5,
								}}/>
						</View>
					</ScrollView>
			</KeyboardAvoidingView>



	}
}

AppRegistry.registerComponent("CabBookingApp", () => CabBookingApp)
