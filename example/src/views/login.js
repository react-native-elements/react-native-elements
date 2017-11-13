import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

// :fire: this is v good, @xavier-villelegier
import LoginScreen3 from './login/screen3';

// @monte9
import LoginScreen1 from './login/screen1';

// TODO
import LoginScreen2 from './login/screen2';
import LoginScreen4 from './login/screen4';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate={0.993}
        >
          <LoginScreen3 />
          <LoginScreen1 />
          <LoginScreen2 />
          <LoginScreen4 />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});
