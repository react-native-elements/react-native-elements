import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import ProfileScreen1 from './profile/screen1';
import ProfileScreen2 from './profile/screen2';
import ProfileScreen3 from './profile/screen3';
import ProfileScreen4 from './profile/screen4';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate={0.993}
        >
          <ProfileScreen1 />
          <ProfileScreen2 />
          <ProfileScreen3 />
          <ProfileScreen4 />
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
