import Expo from 'expo';
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ButtonsTab from '../tabs/buttons';
import ListsTab from '../tabs/lists';
import InputTab from '../tabs/input';
import FontsTab from '../tabs/fonts';

const Components = TabNavigator(
  {
    ButtonsTab: {
      screen: ButtonsTab,
      path: '/buttons',
      navigationOptions: {
        tabBarLabel: 'Buttons',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },
    ListsTab: {
      screen: ListsTab,
      path: '/lists',
      navigationOptions: {
        tabBarLabel: 'Lists',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="list" size={30} type="entypo" color={tintColor} />
        ),
      },
    },
    InputTab: {
      screen: InputTab,
      path: '/input',
      navigationOptions: {
        tabBarLabel: 'Input',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="wpforms"
            size={30}
            type="font-awesome"
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
    animationEnabled: false,
    swipeEnabled: true,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      // Android's default showing of icons is false whereas iOS is true
      showIcon: true,
    },
  }
);

Components.navigationOptions = {
  drawerLabel: 'Components',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="settings-input-component"
      size={30}
      iconStyle={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      type="material-community"
      color={tintColor}
    />
  ),
};

export default Components;
