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

        <Text style={styles.company}>
          You are working in{" "}
              <Text style={styles.company_text}>
                {this.state.company}
              </Text>
        </Text>
        
        
        <Text style={styles.instruction}>
          Learn how to code, its optimization etc. {"\n"}
          Work hard and enjoy.
        </Text>

        <Text style={styles.quote}>
              Everything that teaches you something is your teacher.
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
    backgroundColor:"pink",
    color:"red",
  }

});

AppRegistry.registerComponent('CabBookingApp', () => CabBookingApp);
