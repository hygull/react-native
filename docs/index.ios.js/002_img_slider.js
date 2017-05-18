
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import ImageSlider from "react-native-image-slider";


class CabBookingApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null
        };
    }

    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageSlider
                    images={[
                        "./img/car.jpg",
                        "./img/car-ancient.jpg"
                    ]}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({position})}/>
            </View>
        );
    }
}


const styles = StyleSheet.create(
{
    container:{
        backgroundColor:"green",
    }
}
)
AppRegistry.registerComponent('CabBookingApp', () => CabBookingApp);