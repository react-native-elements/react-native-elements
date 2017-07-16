import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../../beta/input/Input';

class InputHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      full_name: '',
      address_line_1: '',
      address_line_2: '',
      city: '',
      zip_code: ''
    };
  }

  render() {
    const { email, password, full_name, address_line_1, address_line_2, city, zip_code } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerView}>
          <Icon color="white" name="list" size={62} />
          <Text style={styles.headerTitle}>Inputs</Text>
        </View>
        <View style={styles.contentView}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
            <Text style={{marginTop: 20, color: 'rgba(102,187,222,1)', fontWeight: '500', fontSize: 22}}>Details</Text>
            <View style={{
                justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 30, width: 300, borderWidth: 1, borderRadius: 10, borderColor: 'black'
              }}
            >
              <Input
                containerStyle={{width: 300}}
                onChangeText={full_name => this.setState({full_name})}
                value={full_name}
                inputStyle={{marginLeft: 10, color: 'black'}}
                keyboardAppearance="light"
                placeholder="Full Name"
                autoFocus={false}
                autoCorrect={false}
                returnKeyType="next"
                ref={ input => this.fullNameInput = input }
                onSubmitEditing={() => {
                  this.addressLine1Input.focus();
                }}
                blurOnSubmit={false}
                placeholderTextColor="rgba(171, 189, 219, 1)"
              />
              <Input
                containerStyle={{width: 300}}
                onChangeText={address_line_1 => this.setState({address_line_1})}
                value={address_line_1}
                inputStyle={{marginLeft: 10, color: 'black'}}
                keyboardAppearance="light"
                placeholder="Address Line 1"
                autoFocus={false}
                returnKeyType="next"
                ref={ input => this.addressLine1Input = input }
                onSubmitEditing={() => {
                  this.addressLine2Input.focus();
                }}
                blurOnSubmit={false}
                placeholderTextColor="rgba(171, 189, 219, 1)"
              />
              <Input
                containerStyle={{width: 300}}
                onChangeText={address_line_2 => this.setState({address_line_2})}
                value={address_line_2}
                inputStyle={{marginLeft: 10, color: 'black'}}
                keyboardAppearance="light"
                placeholder="Address Line 2"
                autoFocus={false}
                returnKeyType="next"
                ref={ input => this.addressLine2Input = input }
                onSubmitEditing={() => {
                  this.cityInput.focus();
                }}
                blurOnSubmit={false}
                placeholderTextColor="rgba(171, 189, 219, 1)"
              />
              <Input
                containerStyle={{width: 300}}
                onChangeText={city => this.setState({city})}
                value={city}
                inputStyle={{marginLeft: 10, color: 'black'}}
                keyboardAppearance="light"
                placeholder="City"
                autoFocus={false}
                returnKeyType="next"
                ref={ input => this.cityInput = input }
                onSubmitEditing={() => {
                  this.zipCodeInput.focus();
                }}
                blurOnSubmit={false}
                placeholderTextColor="rgba(171, 189, 219, 1)"
              />
              <Input
                containerStyle={{width: 300, borderBottomWidth: 0}}
                onChangeText={zip_code => this.setState({zip_code})}
                value={zip_code}
                inputStyle={{marginLeft: 10, color: 'black'}}
                keyboardAppearance="light"
                placeholder="Zip Code"
                autoFocus={false}
                keyboardType="numeric"
                returnKeyType="done"
                ref={ input => this.zipCodeInput = input }
                blurOnSubmit={false}
                placeholderTextColor="rgba(171, 189, 219, 1)"
              />
            </View>
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
  headerView: {
    height: 125,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 28,
    textAlign: 'center'
  },
  contentView: {
    flex: 1,
    marginTop: 10,
  }
});

export default InputHome;
