import React from 'react';
import { View, ViewProps } from 'react-native';

import { RneFunctionComponent } from '../helpers';

// TabView.Item
export const TabViewItem: RneFunctionComponent<ViewProps> = ({
  children,
  ...props
}) => {
  return <View {...props}>{React.isValidElement(children) && children}</View>;
};

TabViewItem.displayName = 'TabViewItem';
