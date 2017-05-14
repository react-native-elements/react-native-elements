import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import IconsHome from '../views/icons_home';
import IconsDetails from '../views/icons_detail';

const IconsTabView = ({ navigation }) => (
  <IconsHome banner="Icons" navigation={navigation} />
);

const IconsDetailTabView = ({ navigation }) => (
  <IconsDetails banner="Icons Detail" navigation={navigation} />
);

const IconsTab = StackNavigator({
  Home: {
    screen: IconsTabView,
    path: '/',
    navigationOptions: () => ({
      title: 'Icons',
    }),
  },
  Icons_Detail: {
    screen: IconsDetailTabView,
    path: 'icons_detail',
    navigationOptions: {
      title: 'Icons Detail',
    },
  },
});

export default IconsTab;
