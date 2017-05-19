/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * {
      "details" : {
        "created_on" : "18 May 2017",
        "aim" : "to create an application for mobile"
      }
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ListView
} from 'react-native';

import ImageSlider from "react-native-image-slider";
import { Container, Header, Button, Icon, Title, Left,Body, Right } from "native-base"
import TextBlueComponent from "./MyComponents/TextBlueComponent/TextBlueComponent"
import ListPresentationalComponent from "./MyComponents/ListPresentationalComponent/ListPresentationalComponent"

export default class CabBookingApp extends Component {
    constructor(props) {
            super(props)
            console.log("Super get called.")
            const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2})
            
            this.state = {
                dataSource: ds.cloneWithRows(["Mukesh", "Mukundh", "Sandeep", "Darshan", "Surendra", "Rishikesh" ]       ),
                name : "User",
                company : "Offlinetrend solutions pvt ltd",
            }
    }
      // constructor() {
      //   super() //Calling the constructor of parent class
      //   this.state = {
      //         name : "User",
      //         company : "Offlinetrend solutions pvt ltd",
      //   }
      // }

    render() {

        let pic = {
            uri:"http://www.bestcoloringpagesforkids.com/wp-content/uploads/2013/07/Polar-Bear-Mother-and-Baby-Coloring-Pages.gif",
        }

        return (

                  <Container>
                      <View style={styles.container}>
                        <Text style={{fontSize:20, color:"black", marginTop:40}}> Welcome to </Text>
                        
                        <Text style={{fontWeight:"bold", color:"green", fontSize:30, marginBottom:1}}>CabBooking Service</Text>
                        
                        <Text style={styles.company}>
                          Developed at{" "}
                              <Text style={styles.company_text}>
                                {this.state.company}
                              </Text>
                        </Text>
                        <Image source={require("./img/car.jpg")} style={{height:200, width:375}}/>
                        
                       
                        
                        <Text style={styles.welcome}>
                            Hello {this.state.name} {" "}
                            <Text style={{color:"gray", fontWeight:"bold"}}>
                                Enjoy this app 
                            </Text>  
                        </Text>
                        
                        <Text style={styles.instruction}>
                          It is nice, concise & easy to use. {"\n"}
                          It is excellent.
                        </Text>

                        <TextInput style={{height:20, margin:1, textAlign:"center", borderWidth:1, borderColor:"green",padding:5, height:30}} placeholder="Enter your location" />

                        
                        <Text style={styles.quote}>
                              Everything that teaches you something is{"\n"} your teacher.
                        </Text>
                      </View>

                      <TextBlueComponent />

                      <Text style={{color:"orange", fontSize:10, textAlign:"center", flexDirection:"row"}}>Employees of Offlinetrend/Dotrixs</Text>

                      <ListPresentationalComponent dataSource={this.state.dataSource}/>

                  </Container>      
        );
    }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6fff2',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  company: {
    textAlign: 'center',
    color: 'green',
    marginBottom: 5,
  },
  instruction:{
    textAlign:"center",
    color:"navy",
    margin:5,
  },
  company_text:{
    textAlign:"center",
    color:"gray",
    margin:1,
    fontWeight:"bold",
  },
  quote:{
    margin:5,
    color:"green",
    backgroundColor:"white",
    textAlign:"center",
    padding:10,
    fontFamily:"Verdana"
  }

});

AppRegistry.registerComponent('CabBookingApp', () => CabBookingApp);
