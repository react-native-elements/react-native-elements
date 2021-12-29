import React from 'react';
import { View } from 'react-native';
/** They are individual item of the parent Tab. */
export const TabViewItem = ({ children, ...rest }) => {
    return <View {...rest}>{React.isValidElement(children) && children}</View>;
};
TabViewItem.displayName = 'TabView.Item';
