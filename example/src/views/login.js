import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import LoginScreen1 from './login/screen1';
import LoginScreen2 from './login/screen2';
import LoginScreen3 from './login/screen3';
import LoginScreen4 from './login/screen4';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref={(snapScroll) => { this.snapScroll = snapScroll; }}
          horizontal={true}
          decelerationRate={0}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.listViewHorizontal}
        >
          <LoginScreen1 />
          <LoginScreen2 />
          <LoginScreen3 />
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
