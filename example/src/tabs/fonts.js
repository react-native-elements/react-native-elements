import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import FontsHome from '../views/fonts_home';
import FontsDetails from '../views/fonts_detail';

const FontsTabView = ({ navigation }) => (
  <FontsHome banner="Fonts" navigation={navigation} />
);

const FontsDetailTabView = ({ navigation }) => (
  <FontsDetails banner="Fonts Detail" navigation={navigation} />
);

const FontsTab = StackNavigator({
  Home: {
    screen: FontsTabView,
    path: '/',
    navigationOptions: () => ({
      title: 'Fonts',
    }),
  },
  Detail: {
    screen: FontsDetailTabView,
    path: 'fonts_detail',
    navigationOptions: {
      title: 'Fonts Detail',
    },
  },
});

export default FontsTab;
