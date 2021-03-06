import React, {Component} from "react"
import {Switch, AppRegistry, StyleSheet, AlertIOS} from "react-native"

export default class SwitchComponent extends Component {

	constructor(){
		super()	//this is not allowed before super (if this line does not exist)
		this.state = {
			switchValue:false
		}
	}
	onSwitchChange(value){
		if(value){
			AlertIOS.alert("Switch ON")
		}else{
			AlertIOS.alert("Switch OFF")
		}
		this.setState(
			{
				switchValue:value
			}
		)
	}

	render() {
		return (
					<Switch
                            value={this.state.switchValue}
                            onValueChange={(value) => this.onSwitchChange(value)}
                    />
                )
	}
}


const styles = StyleSheet.create({
	switch:{
		color:"green"	//Can't find variable green {if we forget to include double quotes (" ") around the color}
	}
})