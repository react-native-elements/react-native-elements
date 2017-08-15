import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../../../assets/images/wallpaper_4.jpg');

export default class ListsScreen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={BG_IMAGE}
          style={styles.bgImage}
        >
          <Text style={styles.loginText}>
            Lists Screen 4
          </Text>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  loginText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  }
});
