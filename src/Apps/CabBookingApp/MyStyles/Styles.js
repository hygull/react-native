import {StyleSheet} from "react-native" 

export default StyleSheet.create({
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
  activeMessage:{
    color:"gray",
    fontSize:35,
    fontWeight:"bold",
    paddingLeft:5
  }

});