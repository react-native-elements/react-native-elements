import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { Text, Icon } from 'react-native-elements';

import Button from '../../beta//buttons/Button';
class Buttons extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerView}>
          <Icon color="black" name="whatshot" size={62} type="material" />
          <Text style={styles.headerTitle}>Buttons</Text>
        </View>
        <View style={styles.contentView}>
          <Button
            type="login"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            containerStyle={{marginVertical: 10}}
          />
          <Button
            type="login_android"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            containerStyle={{marginVertical: 10}}
            onPress={() => console.log('aye')}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  headerView: {
    height: 125,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 28,
    textAlign: 'center'
  },
  contentView: {
    flex: 1,
    marginTop: 10,
  }
});

export default Buttons;
