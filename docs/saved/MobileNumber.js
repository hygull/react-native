<TextInput
							placeholder="Mobile Number"
							autoCapitalize="none"
							placeholderTextColor="#bdc3c7"
							returnKeyType="next"
							style={styles.text_input}
							autoFocus
							onChangeText={(number) => this.setState({number})}
						/>