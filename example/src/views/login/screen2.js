import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	Text,
	Image,
	Dimensions,
	KeyboardAvoidingView,
} from 'react-native'

import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Input from '../../../v1/input/Input'
import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

console.disableYellowBox = true

export default class LoginScreen3 extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			email: '',
			password: '',
			confirmationPassword: '',
			email_valid: true,
		}
	}

	validateEmail(email) {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

		return re.test(email)
	}

	render() {
		const {
			username,
			email,
			password,
			confirmationPassword,
			email_valid,
		} = this.state
		return (
			<KeyboardAvoidingView
				contentContainerStyle={styles.container}
				behavior="position"
			>
				<Text style={styles.signUpText}>Sign up</Text>
				<Text style={styles.whoAreYouText}>WHO YOU ARE ?</Text>
				<View style={styles.userTypesContainer}>
					<UserTypeItem label="parent" />
					<UserTypeItem label="child" />
					<UserTypeItem label="teacher" />
				</View>
				<FormInput
					ref={input => (this.usernameInput = input)}
					icon="user"
					value={username}
					onChangeText={username => this.setState({ username })}
					placeholder="Username"
					returnKeyType="next"
					onSubmitEditing={() => {
						this.emailInput.focus()
					}}
				/>
				<FormInput
					ref={input => (this.emailInput = input)}
					icon="envelope"
					value={email}
					onChangeText={email => this.setState({ email })}
					placeholder="Email"
					keyboardType="email-address"
					returnKeyType="next"
					displayError={!email_valid}
					errorMessage="Please enter a valid email address"
					onSubmitEditing={() => {
						this.setState({ email_valid: this.validateEmail(email) })
						this.passwordInput.focus()
					}}
				/>
				<FormInput
					ref={input => (this.passwordInput = input)}
					icon="lock"
					value={password}
					onChangeText={password => this.setState({ password })}
					placeholder="Password"
					keyboardType="password"
					returnKeyType="next"
					onSubmitEditing={() => {
						this.confirmationPasswordInput.focus()
					}}
				/>
				<FormInput
					ref={input => (this.confirmationPasswordInput = input)}
					icon="lock"
					value={confirmationPassword}
					onChangeText={confirmationPassword =>
						this.setState({ confirmationPassword })}
					placeholder="Confirm Password"
					keyboardType="passwor"
					returnKeyType="go"
					onSubmitEditing={() => {}}
				/>
        <Button
          text="SIGN UP"
        />
			</KeyboardAvoidingView>
		)
	}
}

export const UserTypeItem = props => {
	const { label } = props
	return (
		<View style={styles.userTypeItemContainer}>
			<View style={styles.userTypeMugshot} />
			<Text style={styles.userTypeLabel}>label</Text>
		</View>
	)
}

export const FormInput = props => {
	const { icon, ...otherProps } = props
	return (
		<Input
			{...otherProps}
			containerStyle={styles.inputContainer}
			icon={<Icon name={icon} color="#7384B4" size={25} />}
			inputStyle={styles.inputStyle}
			keyboardAppearance="light"
			autoFocus={false}
			autoCapitalize="none"
			autoCorrect={false}
			blurOnSubmit={false}
			placeholderTextColor="#7384B4"
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#293046',
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
    alignItems: 'center',
    paddingTop: 20,
		justifyContent: 'space-around',
	},
	signUpText: {
		color: 'white',
	},
	whoAreYouText: {
		color: '#7384B4',
	},
	userTypesContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: SCREEN_WIDTH,
	},
	userTypeItemContainer: {
		alignItems: 'center',
	},
	userTypeMugshot: {
		height: 70,
		width: 70,
		borderRadius: 35,
		backgroundColor: 'yellow',
	},
	userTypeLabel: {
		color: 'yellow',
	},
	inputContainer: {
		paddingLeft: 16,
		borderRadius: 40,
		borderWidth: 1,
		borderColor: 'rgba(110, 120, 170, 1)',
		height: 50,
		marginVertical: 10,
	},
	inputStyle: {
		flex: 1,
		marginLeft: 10,
		color: 'white',
	},
})
