/*eslint-disable no-console */
import React from 'react';
import TabNavigator from 'react-native-tab-navigator';

const Tab = props => {
  console.warn(
    'Warning: Tab has been deprecated and will be removed in a future version of React Native Elements'
  );

  return <TabNavigator.Item {...props} />;
};

export default Tab;
