/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * {
        "details" : {
                        "created_on" : "18 May 2017",
                        "aim" : "to create an application for mobile"
                    }
    }
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Image,
  View,
  TextInput,
  ListView,
  Switch,
  StyleSheet,
} from 'react-native';

import ImageSlider from "react-native-image-slider";
import { Container, Header, Button, Icon, Title, Left,Body, Right } from "native-base"

import styles from "./MyStyles/Styles"
import TextBlueComponent from "./MyComponents/TextBlueComponent/TextBlueComponent"
import ListPresentationalComponent from "./MyComponents/ListPresentationalComponent/ListPresentationalComponent"
import SwitchComponent from "./MyComponents/SwitchComponent/SwitchComponent"
import QuoteComponent from "./MyComponents/QuoteComponent/QuoteComponent"
import VideoGrabbingRestComponent from "./MyComponents/VideoGrabbingRestComponent/VideoGrabbingRestComponent"
import DataGrabbingRestComponent from "./MyComponents/DataGrabbingRestComponent/DataGrabbingRestComponent"
import HeadImageHelloComponent from "./MyComponents/HeadImageHelloComponent/HeadImageHelloComponent"

export default class CabBookingApp extends Component {
    constructor(props) {
            super(props)
            console.log("Super get called.")
            const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
           
            this.state = {
                dataSource: ds.cloneWithRows(["Rogert", "Michaelson", "GrowFill"]       ),
                name : "User",
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

                      <HeadImageHelloComponent />
                      <View style={styles.container}>
                        
                        <Text style={styles.instruction}>
                          It is nice, concise & easy to use. {"\n"}
                          It is excellent.
                        </Text>

                        <TextInput style={{height:20, marginBottom:1, textAlign:"center", borderWidth:1, borderColor:"green",padding:5, height:30}} placeholder="Enter your location" />

                        <QuoteComponent />
                        
                      </View>

                      <TextBlueComponent />

                      <Text style={styles.activeMessage}>Are you Active? <SwitchComponent /></Text>
                      
                      <Text style={{color:"orange", fontSize:10, textAlign:"center", flexDirection:"row"}}>Employees of Offlinetrend/Dotrixs</Text>

                      <ListPresentationalComponent dataSource={this.state.dataSource}/>

                      <DataGrabbingRestComponent />
                  </Container>      
        );
    }
}


AppRegistry.registerComponent('CabBookingApp', () => CabBookingApp);
