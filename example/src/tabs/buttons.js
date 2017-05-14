import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import ButtonsHome from '../views/buttons_home';
import ButtonsDetails from '../views/buttons_detail';

const ButtonsTabView = ({ navigation }) => (
  <ButtonsHome navigation={navigation} />
);

const ButtonsDetailTabView = ({ navigation }) => (
  <ButtonsDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const ButtonsTab = StackNavigator({
  Buttons: {
    screen: ButtonsTabView,
    path: '/',
    navigationOptions: {
      title: 'Buttons',
    },
  },
  Button_Detail: {
    screen: ButtonsDetailTabView,
    path: '/buttons_detail',
    navigationOptions: {
      title: 'Buttons Detail',
    },
  },
});

export default ButtonsTab;
