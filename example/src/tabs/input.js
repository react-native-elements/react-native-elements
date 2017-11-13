import Expo from 'expo';
import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import InputHome from '../views/input_home';
import InputDetails from '../views/input_details';

const InputTabView = ({ navigation }) => (
  <InputHome navigation={navigation} />
);

const InputDetailTabView = ({ navigation }) => (
  <InputDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const InputTab = StackNavigator({
  Input: {
    screen: InputTabView,
    path: '/',
    navigationOptions: {
      title: 'Input',
    },
  },
  Input_Detail: {
    screen: InputDetailTabView,
    path: '/input_detail',
    navigationOptions: {
      title: 'Input Detail',
    },
  },
});

export default InputTab;
