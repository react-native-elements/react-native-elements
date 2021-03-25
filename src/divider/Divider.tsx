import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';

export type DividerProps = ViewProps & {
  style?: object | any[];
};

const Divider: RneFunctionComponent<DividerProps> = ({
  style,
  theme,
  ...rest
}) => (
  <View
    style={StyleSheet.flatten([
      {
        backgroundColor: theme.colors.divider,
        height: StyleSheet.hairlineWidth,
      },
      style,
    ])}
    {...rest}
  />
);

export { Divider };
export default withTheme(Divider, 'Divider');
