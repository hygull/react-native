	fetchUsers() {
		fetch("https://jsonplaceholder.typicode.com/users")	
		.then((response) => response.json())
		.then((response) => {
			this.setState({
				userDataSource: this.state.userDataSource.cloneWithRows(response.slice(0,5))
			})
		})
		.catch((error) => {
			console.log("Error occured")
			AlertIOS.AlertIOSt("Error while GET request")
			// throw error
		})
	}