
class YoutubeScreen extends React.Component{
	static navigationOptions = {
		title: "Youtube"
	}

	render() {
		return <View>
					<ScrollView>
							<WebView
							source={{uri: "https://www.youtube.com/"}}
							style={{marginTop: 45, flex:1, height:700}}
							/>
					</ScrollView>
				</View>
	}
}