import Expo from 'expo';
import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import Components from './src/drawer/components';
import Ratings from './src/drawer/ratings';
import Pricing from './src/drawer/pricing';
import Login from './src/drawer/login';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        source={require('./src/images/logo.png')}
        style={{ width: SCREEN_WIDTH * 0.57 }}
        resizeMode="contain"
      />
    </View>
    <View style={{marginLeft: 10}}>
      <DrawerItems {...props} />
    </View>
  </View>
);

const MainRoot = DrawerNavigator(
  {
    Login: {
      path: '/login',
      screen: Login
    },
    Components: {
      path: '/components',
      screen: Components,
    },
    Ratings: {
      path: '/ratings',
      screen: Ratings,
    },
    Pricing: {
      path: '/pricing',
      screen: Pricing,
    }
  },
  {
    initialRouteName: 'Login',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: CustomDrawerContentComponent,
  }
);

Expo.registerRootComponent(MainRoot);
