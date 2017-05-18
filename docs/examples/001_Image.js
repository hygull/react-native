import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';

class DisplayAnImage extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('./img/favicon.png')}
        />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
      </View>
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);