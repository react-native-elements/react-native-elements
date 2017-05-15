import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Pricing from '../views/pricing';

const PricingDrawerItem = StackNavigator({
  Pricing: {
    screen: Pricing,
  },
});

PricingDrawerItem.navigationOptions = {
  drawerLabel: 'Pricing',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="attach-money"
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

export default PricingDrawerItem;
