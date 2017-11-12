import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ProfileScreen1 from './profile/screen1';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileScreen1 />
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
