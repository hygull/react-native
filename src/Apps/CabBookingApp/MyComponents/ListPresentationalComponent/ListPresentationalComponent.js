import React, { Component } from "react"
import { View, Text, AppRegistry, ListView, StyleSheet } from "react-native"

export default ListPresentationalComponent = (props) => {	
		return (
		
				<ListView
					dataSource = {props.dataSource} 
					renderRow = {
						(rowData) => 
							<Text style={styles.users}>
									{rowData}
							</Text>	 
						
					}
				/>
			
		)

}

const styles = StyleSheet.create({
	users:{
		color: "navy",
		textAlign:"center"
	}
})