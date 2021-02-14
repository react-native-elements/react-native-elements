import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { withTheme } from '../config';

export type DividerProps = ViewProps & {
  style?: object | any[];
  theme?: object;
};

const Divider: React.FunctionComponent<DividerProps> = ({
  style,
  theme,
  ...rest
}) => (
  <View
    style={StyleSheet.flatten([styles.container(theme), style])}
    {...rest}
  />
);

const styles = {
  container: (theme) => ({
    backgroundColor: theme.colors.divider,
    height: StyleSheet.hairlineWidth,
  }),
};

export { Divider };
export default withTheme(Divider, 'Divider');
