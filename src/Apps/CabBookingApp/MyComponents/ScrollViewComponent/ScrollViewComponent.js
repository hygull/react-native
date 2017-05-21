import React, { Component } from "react"
import { AppRegistry, ScrollView, Text, View } from "react-native"

export default ScrollViewComponent = (props) =>  {
			const getUsersEach = (user) => (
				<Text key={user.age} style={styles.text}>
					{user.name}
				</Text>
			)	

		
			return (
				<View>
					<ScrollView>
						{ props.persons.map(getUsersEach) }
					</ScrollView>
				</View>
			)
		
	
} 

const styles = {
	text: {
		color: "green",
		fontWeight: "bold",
		textAlign: "center"
	}
}