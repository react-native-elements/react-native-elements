/*eslint-disable no-console */
import React from 'react';
import TabNavigator from 'react-native-tab-navigator';

const Tabs = props => {
  console.warn(
    'Warning: Tabs has been deprecated and will be removed in a future version of React Native Elements'
  );

  return <TabNavigator {...props} />;
};

export default Tabs;
