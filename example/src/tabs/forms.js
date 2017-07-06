import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import FormsHome from '../views/forms_home';
import FormsDetails from '../views/forms_details';

const FormsTabView = ({ navigation }) => <FormsHome navigation={navigation} />;

const FormsDetailTabView = ({ navigation }) => (
  <FormsDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const FormsTab = StackNavigator({
  Forms: {
    screen: FormsTabView,
    path: '/',
    navigationOptions: {
      title: 'Forms',
    },
  },
  Forms_Detail: {
    screen: FormsDetailTabView,
    path: '/forms_detail',
    navigationOptions: {
      title: 'Forms Detail',
    },
  },
});

export default FormsTab;
