import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import { Font } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

import Button from '../../../v1/buttons/Button';
import TextButton from '../../../v1/buttons/TextButton';
import Input from '../../../v1/input/Input';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../../../assets/images/bg_screen1.jpg');

export default class LoginScreen1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      email: '',
      email_valid: true,
      password: '',
      login_failed: false,
      showLoading: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'georgia': require('../../../assets/fonts/Georgia.ttf'),
      'regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
      'light': require('../../../assets/fonts/Montserrat-Light.ttf'),
      'bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  }

  submitLoginCredentials() {
    const { showLoading } = this.state;

    this.setState({
      showLoading: !showLoading
    });
  }

  render() {
    const { email, password, email_valid, showLoading } = this.state;

    return (
      <View style={styles.container}>
        <Image
          source={BG_IMAGE}
          style={styles.bgImage}
        >
        { this.state.fontLoaded ?
          <View style={styles.loginView}>
            <View style={styles.loginTitle}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.travelText}>TRAVEL</Text>
                <Text style={styles.plusText}>+</Text>
              </View>
              <View style={{marginTop: -10}}>
                <Text style={styles.travelText}>LEISURE</Text>
              </View>
            </View>
            <View style={styles.loginInput}>
              <View style={{marginVertical: 10}}>
                <Input
                  width={230}
                  icon={
                    <Icon
                      name='user-o'
                      color='rgba(171, 189, 219, 1)'
                      size={25}
                    />
                  }
                  onChangeText={email => this.setState({email})}
                  value={email}
                  inputStyle={{marginLeft: 10, color: 'white'}}
                  keyboardAppearance="light"
                  placeholder="Email"
                  autoFocus={false}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  returnKeyType="next"
                  ref={ input => this.emailInput = input }
                  onSubmitEditing={() => {
                    this.setState({email_valid: this.validateEmail(email)});
                    this.passwordInput.focus();
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                  displayError={!email_valid}
                  errorStyle={{textAlign: 'center', fontSize: 12}}
                  errorMessage="Please enter a valid email address"
                />
              </View>
              <View style={{marginVertical: 10}}>
                <Input
                  width={230}
                  icon={
                    <Icon
                      name='lock'
                      color='rgba(171, 189, 219, 1)'
                      size={25}
                    />
                  }
                  onChangeText={(password) => this.setState({password})}
                  value={password}
                  inputStyle={{marginLeft: 10, color: 'white'}}
                  secureTextEntry={true}
                  keyboardAppearance="light"
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="default"
                  returnKeyType="done"
                  ref={ input => this.passwordInput = input}
                  blurOnSubmit={true}
                  placeholderTextColor="white"
                  displayError={false}
                  errorStyle={{textAlign: 'center', fontSize: 12}}
                  errorMessage="The email and password you entered did not match out records. Please try again!"
                />
              </View>
            </View>
            <View style={styles.loginButton}>
              <Button
                text ='LOG IN'
                activeOpacity={1}
                underlayColor="transparent"
                onPress={this.submitLoginCredentials.bind(this)}
                loading={showLoading}
                loadingProps={{size: 'small', color: 'white'}}
                disabled={ !email_valid && password.length < 8}
                buttonStyle={{height: 50, width: 250, backgroundColor: 'transparent', borderWidth: 2, borderColor: 'white', borderRadius: 30}}
                containerStyle={{marginVertical: 10}}
                textStyle={{fontWeight: 'bold'}}
              />
            </View>
            <View style={styles.footerView}>
              <Text style={{color: 'grey'}}>
                New here?
              </Text>
              <TextButton
                text="Create an Account"
                activeOpacity={0.5}
                textStyle={{color: 'white', fontSize: 15}}
                containerStyle={{marginTop: -10}}
                onPress={() => console.log('Account created')}
              />
            </View>
          </View> :
          <Text>Loading...</Text>
        }
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginView: {
    marginTop: 150,
    backgroundColor: 'transparent',
    width: 250,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginTitle: {
    flex: 1,
  },
  travelText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'bold'
  },
  plusText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'regular'
  },
  loginInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButton: {
    flex: 1,
  },
  footerView: {
    marginTop: 20,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
