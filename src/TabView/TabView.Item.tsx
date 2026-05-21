import React from 'react';
import { View, ViewProps } from 'react-native';

import { RneFunctionComponent } from '../helpers';

export interface TabViewItemProps extends ViewProps {}

/** They are individual item of the parent Tab. */
export const TabViewItem: RneFunctionComponent<TabViewItemProps> = ({
  children,
  ...rest
}) => {
  return <View {...rest}>{React.isValidElement(children) && children}</View>;
};

TabViewItem.displayName = 'TabView.Item';
