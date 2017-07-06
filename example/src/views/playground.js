import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from 'HSColors';

class Playground extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Text style={{margin: 20, fontSize: 25}}>Try any component below..</Text>
      </ScrollView>
    );
  }
}

Playground.navigationOptions = {
  title: 'Playground',
};

const styles = StyleSheet.create({
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary2,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  }
});

export default Playground;
