import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions} from 'react-native';

import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Input from '../../v1/input/Input';

const SCREEN_WIDTH = Dimensions.get('window').width;

class InputHome extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.contentView}>
          <View style={{backgroundColor: '#2F343B', width: SCREEN_WIDTH, alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 30, marginVertical: 10, fontWeight: '300', marginTop: 10}}>Login</Text>
            <View style={styles.overlay}>
              <View style={styles.triangleLeft} />
              <Input
                containerStyle={{borderWidth: 1, borderColor: 'white', borderLeftWidth: 0, height: 50, width: SCREEN_WIDTH - 80, backgroundColor: 'white'}}
                icon={
                  <MaterialIcon
                    name='email-outline'
                    color='black'
                    size={25}
                  />
                }
                placeholder="Email"
                placeholderTextColor="black"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardAppearance="light"
                keyboardType="email-address"
                returnKeyType="next"
                ref={ input => this.emailInput = input }
                onSubmitEditing={() => {
                  this.passwordInput.focus();
                }}
                blurOnSubmit={false}
              />
              <View style={styles.triangleRight} />
            </View>
            <View style={[styles.overlay, { marginBottom: 30, marginTop: 1 }]}>
              <View style={styles.triangleLeft} />
              <Input
                containerStyle={{borderWidth: 1, borderColor: 'white', borderLeftWidth: 0, height: 50, width: SCREEN_WIDTH - 80, backgroundColor: 'white'}}
                icon={
                  <SimpleIcon
                  name='lock'
                  color='black'
                  size={25}
                />
                }
                placeholder="Password"
                placeholderTextColor="black"
                autoCapitalize="none"
                keyboardAppearance="light"
                secureTextEntry={true}
                autoCorrect={false}
                keyboardType="default"
                returnKeyType="done"
                ref={ input => this.passwordInput = input }
                blurOnSubmit={true}
              />
              <View style={styles.triangleRight} />
            </View>
          </View>
          <View style={{backgroundColor: 'rgba(46, 50, 72, 1)', width: SCREEN_WIDTH, alignItems: 'center'}}>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  triangleLeft: {
    position: 'absolute',
    left: -20,
    bottom: 0,
    width: 0,
    height: 0,
    borderRightWidth: 20,
    borderRightColor: 'white',
    borderBottomWidth: 25,
    borderBottomColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'transparent'
  },
  triangleRight: {
    position: 'absolute',
    right: -20,
    top: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: 'white',
    borderBottomWidth: 25,
    borderBottomColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'transparent'
  },
});

export default InputHome;
