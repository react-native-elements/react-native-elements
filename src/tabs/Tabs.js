/*eslint-disable no-console */
import React from 'react';
import TabNavigator from 'react-native-tab-navigator';

const Tabs = props => {
  console.warn(
    `Warning: Tabs has been deprecated and will be removed in a future version of React Native Elements. For a complete navigation solution that includes Tabs as well as many other features, be sure to check out react-navigation (https://reactnavigation.org) and it's TabNavigator.`
  );

  return <TabNavigator {...props} />;
};

export default Tabs;
