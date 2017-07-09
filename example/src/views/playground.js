import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements';

class Playground extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Text style={{margin: 20, fontSize: 25}}>Try any component below..</Text>
        <Icon
          component={TouchableOpacity}
          name="youtube-searched-for"
          type="material"
          size={30}
          color="black"
          onPress={() => console.log('Search Pressed')}
        />
      </ScrollView>
    );
  }
}

Playground.navigationOptions = {
  title: 'Playground',
};

export default Playground;
