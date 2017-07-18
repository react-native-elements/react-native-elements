import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from '../views/login';

const LoginDrawerItem = StackNavigator({
  Playground: { screen: Login }
  },
  {
    headerMode: 'none'
  }
);

LoginDrawerItem.navigationOptions = {
  drawerLabel: 'Login',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="email"
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

export default LoginDrawerItem;
