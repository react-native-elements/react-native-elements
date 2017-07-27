import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Playground from '../views/playground';

const PlaygroundDrawerItem = StackNavigator({
  Playground: {
    screen: Playground,
    navigationOptions: ({ navigation }) => ({
      title: 'Playground',
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  },
});

PlaygroundDrawerItem.navigationOptions = {
  drawerLabel: 'Playground',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="brush"
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

export default PlaygroundDrawerItem;
