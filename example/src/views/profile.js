import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import ProfileScreen1 from './profile/screen1';

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
          <ProfileScreen1 />
          <ProfileScreen1 />
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
