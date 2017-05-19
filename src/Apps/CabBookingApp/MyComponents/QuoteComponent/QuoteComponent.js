import React, {Component} from "react"
import {Switch, AppRegistry, StyleSheet,Text} from "react-native"

export default class QuoteComponent extends Component {

	render() {
		return (
				<Text style={styles.quote}>
	        		Everything that teaches you something is{"\n"} your teacher.
				</Text>
		)
	}


}

const styles = StyleSheet.create({
	   quote:{
	    margin:5,
	    color:"green",
	    backgroundColor:"white",
	    textAlign:"center",
	    padding:10,
	    fontFamily:"Verdana"
	  }
	}
 )

AppRegistry.registerComponent('QuoteComponent', () => QuoteComponent)
