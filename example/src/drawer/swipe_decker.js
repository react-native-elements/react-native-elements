import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SwipeDecker from '../views/swipe_decker';

const SwipeDeckerDrawerItem = StackNavigator({
  SwipeDecker: {
    screen: SwipeDecker,
  },
});

SwipeDeckerDrawerItem.navigationOptions = {
  drawerLabel: 'Swipe Decker',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="whatshot"
      size={30}
      style={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default SwipeDeckerDrawerItem;
