/*eslint-disable no-console */
import React from 'react';
import SideMenu from 'react-native-side-menu';

const Menu = props => {
  console.warn(
    `Warning: SideMenu has been deprecated and will be removed in a future version of React Native Elements. For a complete navigation solution that includes SideMenu(Drawer) as well as many other features, be sure to check out react-navigation (https://reactnavigation.org) and it's DrawerNavigator.`
  );

  return <SideMenu {...props} />;
};

export default Menu;
