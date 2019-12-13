import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { withTheme } from '../config';
type DividerProps = {
  style?: ViewStyle;
  theme?: object;
};
const Divider: React.SFC<DividerProps> = ({ style, theme, ...rest }) => (
  <View
    style={StyleSheet.flatten([styles.container(theme), style])}
    {...rest}
  />
);
const styles = {
  container: theme => ({
    backgroundColor: theme.colors.divider,
    height: StyleSheet.hairlineWidth,
  }),
};
export { Divider };
export default withTheme(Divider, 'Divider');
