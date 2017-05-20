import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
} from 'react-native';

import QuoteComponent from "../QuoteComponent/QuoteComponent"

import styles from "../../MyStyles/Styles"

export default class PraiseInputQuoteComponent extends Component { 

      render(){
                return(
                       <View style={styles.container}>
                        
                        <Text style={styles.instruction}>
                          It is nice, concise & easy to use. {"\n"}
                          It is excellent.
                        </Text>

                        <TextInput style={{height:20, marginBottom:1, textAlign:"center", borderWidth:1, borderColor:"green",padding:5, height:30}} placeholder="Enter your location" />

                        <QuoteComponent />
                        
                      </View>
                      )
              }
}

AppRegistry.registerComponent('PraiseInputQuoteComponent', () => PraiseInputQuoteComponent);

