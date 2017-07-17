import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Input from '../../beta/input/Input';

const SCREEN_WIDTH = Dimensions.get('window').width;

class InputHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    const { email, password } = this.state;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.contentView}>
          <Text style={{color: 'rgba(114,208,193,1)', fontWeight: '500', fontSize: 22}}>Login</Text>
          <View style={{
              justifyContent: 'center', alignItems: 'center', marginTop: 10, width: 300
            }}
          >
            <Input
              icon={
                <Icon
                  name='user-o'
                  color='rgba(171, 189, 219, 1)'
                  size={25}
                />
              }
              containerStyle={{width: 300}}
              onChangeText={email => this.setState({email})}
              value={email}
              inputStyle={{marginLeft: 10, color: 'black'}}
              keyboardAppearance="light"
              placeholder="name@example.com"
              autoFocus={false}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              ref={ input => this.emailInput = input }
              onSubmitEditing={() => {
                this.passwordInput.focus();
              }}
              blurOnSubmit={false}
              placeholderTextColor="rgba(171, 189, 219, 1)"
              displayError={true}
              errorStyle={{textAlign: 'center'}}
              errorMessage="Please enter a valid email address"
            />
          </View>
          <View style={{
              justifyContent: 'center', alignItems: 'center', width: 300
            }}
          >
            <Input
              icon={
                <Icon
                  name='lock'
                  color='rgba(171, 189, 219, 1)'
                  size={25}
                />
              }
              containerStyle={{width: 300}}
              onChangeText={(password) => this.setState({password})}
              value={password}
              inputStyle={{marginLeft: 10, color: 'black'}}
              secureTextEntry={true}
              keyboardAppearance="light"
              placeholder="password"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              returnKeyType="done"
              ref={ input => this.passwordInput = input}
              blurOnSubmit={true}
              placeholderTextColor="rgba(171, 189, 219, 1)"
              displayError={true}
              errorStyle={{textAlign: 'center'}}
              errorMessage="The email and password you entered did not match out records. Please try again!"
            />
          </View>
          <View style={{backgroundColor: 'rgba(46, 50, 72, 1)', width: SCREEN_WIDTH, alignItems: 'center', marginTop: 20}}>
            <Text style={{color: 'white', fontSize: 30, marginVertical: 10, fontWeight: '300'}}>Sign up</Text>
            <Input
              containerStyle={{borderRadius: 40, borderWidth: 1, borderColor: 'rgba(110, 120, 170, 1)', height: 50, width: SCREEN_WIDTH - 50, marginVertical: 10}}
              icon={
                <SimpleIcon
                  name='user'
                  color='rgba(110, 120, 170, 1)'
                  size={25}
                />
              }
              iconContainerStyle={{marginLeft: 20}}
              placeholder="Username"
              placeholderTextColor="rgba(110, 120, 170, 1)"
              inputStyle={{marginLeft: 10, color: 'white'}}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="light"
              keyboardType="email-address"
              returnKeyType="next"
              ref={ input => this.usernameInput = input }
              onSubmitEditing={() => {
                this.email2Input.focus();
              }}
              blurOnSubmit={false}
            />
            <Input
              containerStyle={{borderRadius: 40, borderWidth: 1, borderColor: 'rgba(110, 120, 170, 1)', height: 50, width: SCREEN_WIDTH - 50, marginVertical: 10}}
              icon={
                <MaterialIcon
                  name='email-outline'
                  color='rgba(110, 120, 170, 1)'
                  size={25}
                />
              }
              iconContainerStyle={{marginLeft: 20}}
              placeholder="Email"
              placeholderTextColor="rgba(110, 120, 170, 1)"
              inputStyle={{marginLeft: 10, color: 'white'}}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="light"
              keyboardType="email-address"
              returnKeyType="next"
              ref={ input => this.email2Input = input }
              onSubmitEditing={() => {
                this.password2Input.focus();
              }}
              blurOnSubmit={false}
            />
            <Input
              containerStyle={{borderRadius: 40, borderWidth: 1, borderColor: 'rgba(110, 120, 170, 1)', height: 50, width: SCREEN_WIDTH - 50, marginVertical: 10}}
              icon={
                <SimpleIcon
                  name='lock'
                  color='rgba(110, 120, 170, 1)'
                  size={25}
                />
              }
              iconContainerStyle={{marginLeft: 20}}
              placeholder="Password"
              placeholderTextColor="rgba(110, 120, 170, 1)"
              inputStyle={{marginLeft: 10, color: 'white'}}
              autoCapitalize="none"
              keyboardAppearance="light"
              secureTextEntry={true}
              autoCorrect={false}
              keyboardType="default"
              returnKeyType="next"
              ref={ input => this.password2Input = input }
              onSubmitEditing={() => {
                this.confirmPassword2Input.focus();
              }}
              blurOnSubmit={false}
            />
            <Input
              containerStyle={{borderRadius: 40, borderWidth: 1, borderColor: 'rgba(110, 120, 170, 1)', height: 50, width: SCREEN_WIDTH - 50, marginTop: 10, marginBottom: 30}}
              icon={
                <SimpleIcon
                  name='lock'
                  color='rgba(110, 120, 170, 1)'
                  size={25}
                />
              }
              iconContainerStyle={{marginLeft: 20}}
              placeholder="Confirm Password"
              placeholderTextColor="rgba(110, 120, 170, 1)"
              inputStyle={{marginLeft: 10, color: 'white'}}
              autoCapitalize="none"
              keyboardAppearance="light"
              secureTextEntry={true}
              autoCorrect={false}
              keyboardType="default"
              returnKeyType="done"
              ref={ input => this.confirmPassword2Input = input }
              blurOnSubmit={true}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  contentView: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default InputHome;
