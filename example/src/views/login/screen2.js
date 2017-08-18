import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native'
import { Font } from 'expo'

import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { Button, Input } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

console.disableYellowBox = true

export default class LoginScreen3 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fontLoaded: false,
      username: '',
      email: '',
      password: '',
      confirmationPassword: '',
      emailValid: true,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      light: require('../../../assets/fonts/Ubuntu-Light.ttf'),
      bold: require('../../../assets/fonts/Ubuntu-Bold.ttf'),
      lightitalic: require('../../../assets/fonts/Ubuntu-Light-Italic.ttf'),
    })

    this.setState({ fontLoaded: true })
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(email)
  }

  render() {
    const {
      fontLoaded,
      confirmationPassword,
      email,
      emailValid,
      password,
      username,
    } = this.state
    return !fontLoaded
      ? <Text> Loading... </Text>
      : <View style={styles.container}>
          <KeyboardAvoidingView
            behavior="position"
            contentContainerStyle={styles.formContainer}
          >
            <Text style={styles.signUpText}>Sign up</Text>
            <Text style={styles.whoAreYouText}>WHO YOU ARE ?</Text>
            <View style={styles.userTypesContainer}>
              <UserTypeItem label="parent" />
              <UserTypeItem label="child" />
              <UserTypeItem label="teacher" />
						</View>
						<View>
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
              displayError={!emailValid}
              errorMessage="Please enter a valid email address"
              onSubmitEditing={() => {
                this.setState({ emailValid: this.validateEmail(email) })
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
						</View>
            <Button
              text="SIGNUP"
              containerStyle={{ flex: -1 }}
              buttonStyle={styles.signUpButton}
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: [1, 0],
                end: [0.2, 0],
              }}
              textStyle={styles.signUpButtonText}
            />
          </KeyboardAvoidingView>
          <View style={styles.loginHereContainer}>
            <Text style={styles.alreadyAccountText}>
              Already have an account. 
            </Text>
            <Text style={styles.loginHereText}>Login here</Text>
          </View>
        </View>;
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
      icon={<Icon name={icon} color="#7384B4" size={18} />}
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
		paddingBottom: 20,
		paddingTop: 20,
    backgroundColor: '#293046',
    width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
		alignItems: 'center',
		justifyContent: 'space-around',
  },
  formContainer: {
		flex: 1,
		justifyContent: 'space-around',
    alignItems: 'center',
  },
  signUpText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'light',
  },
  whoAreYouText: {
    color: '#7384B4',
    fontFamily: 'bold',
    fontSize: 14,
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
    paddingTop: 4,
    color: 'yellow',
    fontFamily: 'bold',
  },
  inputContainer: {
    paddingLeft: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(110, 120, 170, 1)',
    height: 45,
    marginVertical: 10,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    color: 'white',
    fontFamily: 'light',
    fontSize: 16,
  },
  signUpButtonText: {
    fontFamily: 'bold',
    fontSize: 13,
  },
  signUpButton: {
    width: 250,
    borderRadius: 50,
    height: 45,
  },
  loginHereContainer: {
    flexDirection: 'row',
  },
  alreadyAccountText: {
    fontFamily: 'lightitalic',
		fontSize: 12,
		color: 'white',
  },
  loginHereText: {
    color: '#FF9800',
    fontFamily: 'lightitalic',
    fontSize: 12,
  },
})
