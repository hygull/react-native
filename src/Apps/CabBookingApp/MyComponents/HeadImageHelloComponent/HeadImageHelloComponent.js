import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Image,
  View,
} from 'react-native';

import styles from "../../MyStyles/Styles"

export default class HeadImageHelloComponent extends Component { 
      constructor() {
          super()
          this.state = {
              company : "Offlinetrend solutions pvt ltd",
              name : "User",
          }
      }

      render(){
                return(
                          <View style={styles.container}>
                            <Text style={{fontSize:20, color:"black", marginTop:40}}> Welcome to </Text>
                            
                            <Text style={{fontWeight:"bold", color:"green", fontSize:30, marginBottom:1}}>CabBooking Service</Text>
                            
                            <Text style={styles.company}>
                              Developed at{" "}
                                  <Text style={styles.company_text}>
                                    {this.state.company}
                                  </Text>
                            </Text>
                            <Image source={require("../../img/car.jpg")} style={{height:200, width:375}}/>
                                                
                            <Text style={styles.welcome}>
                                Hello {this.state.name} {" "}
                                <Text style={{color:"gray", fontWeight:"bold"}}>
                                    Enjoy this app 
                                </Text>  
                            </Text>
                          </View>
                      )
              }
}

AppRegistry.registerComponent('HeadImageHelloComponent', () => HeadImageHelloComponent);
