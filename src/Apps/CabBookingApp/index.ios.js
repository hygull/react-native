/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * {
        "details" : {
                        "created_on" : "17 May 2017",
                        "updated_on" : "20 May 2017",
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

import TextBlueComponent from "./MyComponents/TextBlueComponent/TextBlueComponent"
import ListPresentationalComponent from "./MyComponents/ListPresentationalComponent/ListPresentationalComponent"
import SwitchComponent from "./MyComponents/SwitchComponent/SwitchComponent"
import VideoGrabbingRestComponent from "./MyComponents/VideoGrabbingRestComponent/VideoGrabbingRestComponent"
import DataGrabbingRestComponent from "./MyComponents/DataGrabbingRestComponent/DataGrabbingRestComponent"
import HeadImageHelloComponent from "./MyComponents/HeadImageHelloComponent/HeadImageHelloComponent"
import PraiseInputQuoteComponent from "./MyComponents/PraiseInputQuoteComponent/PraiseInputQuoteComponent"
import SimpleTextComponent from "./MyComponents/SimpleTextComponent/SimpleTextComponent"

import styles from "./MyStyles/Styles"

export default class CabBookingApp extends Component {
    constructor(props) {
            super(props)
            console.log("Super get called.")
            const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
           
            this.state = {
                dataSource: ds.cloneWithRows(["Rogert", "Michaelson", "GrowFill"]       ),
            }
    }

    render() {

        let pic = {
            uri:"http://www.bestcoloringpagesforkids.com/wp-content/uploads/2013/07/Polar-Bear-Mother-and-Baby-Coloring-Pages.gif",
        }

        return (

                  <Container>

                      <HeadImageHelloComponent />
                      
                    
                      <DataGrabbingRestComponent />

                  </Container>      
        );
    }
}

AppRegistry.registerComponent('CabBookingApp', () => CabBookingApp);

