/*eslint-disable no-console */
import React from 'react';
import SideMenu from 'react-native-side-menu';

const Menu = props => {
  console.warn(
    'Warning: SideMenu has been deprecated and will be removed in a future version of React Native Elements'
  );

  return <SideMenu {...props} />;
};

export default Menu;
