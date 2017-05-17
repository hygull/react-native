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
  View
} from 'react-native';

export default class CabBookingApp extends Component {

  constructor() {
    super() //Calling the constructor of parent class
    this.state = {
          name : "Rishikesh Agrawani",
          company : "Offlinetrend solutions pvt ltd",
          languages : ["C", "C++", "Python", "Golang", "TypeScript", "JavaScript", "HTML", "CSS"],
          // getLanguagesList : () => {
          //       var s = "";
          //       for(var i; i<this.languages.length; i++) {
          //         if(i==this.languages.length-1){
          //             s += this.languages[i] + "."
          //         }else{
          //             s += this.languages[i]+","
          //         }
          //       }
          //       return s;
          //     }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello {this.state.name}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        
        <Text>
          {this.state.getLanguagesList} {'\n'}
          Comapany name : {this.state.company}
        </Text>
        <Text style={styles.instructions2}>
          &lt;Instructions&gt;,{"\n"}
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'green',
    marginBottom: 5,
  },
  instructions2:{
    textAlign:"center",
    color:"navy",
    margin:5,
  }

});

AppRegistry.registerComponent('CabBookingApp', () => CabBookingApp);
