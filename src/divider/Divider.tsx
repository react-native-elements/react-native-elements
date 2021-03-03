import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { withTheme } from '../config';
import { Theme } from '../config/theme';

export type DividerProps = ViewProps & {
  style?: object | any[];
  theme?: Theme;
};

const Divider: React.FunctionComponent<DividerProps> = ({
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
