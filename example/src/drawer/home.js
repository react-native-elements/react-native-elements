import Expo from 'expo';
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ButtonsTab from '../tabs/buttons';
import IconsTab from '../tabs/icons';
import FontsTab from '../tabs/fonts';

const Home = TabNavigator(
  {
    ButtonsTab: {
      screen: ButtonsTab,
      path: '/buttons',
      navigationOptions: {
        tabBarLabel: 'Buttons',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-beer' : 'ios-beer-outline'}
            size={30}
            type="ionicon"
            color={tintColor}
          />
        ),
      },
    },
    IconsTab: {
      screen: IconsTab,
      path: '/icons',
      navigationOptions: {
        tabBarLabel: 'Icons',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'emoticon-cool' : 'emoticon-sad'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },
    FontsTab: {
      screen: FontsTab,
      path: '/fonts',
      navigationOptions: {
        tabBarLabel: 'Fonts',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'font' : 'font'}
            size={30}
            type="font-awesome"
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'ButtonsTab',
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

Home.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      size={30}
      style={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      type="material-commnity"
      color={tintColor}
    />
  ),
};

export default Home;
