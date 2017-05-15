import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Ratings from '../views/ratings';

const RatingsDrawerItem = StackNavigator({
  Ratings: {
    screen: Ratings,
  },
});

RatingsDrawerItem.navigationOptions = {
  drawerLabel: 'Ratings',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="star"
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

export default RatingsDrawerItem;
