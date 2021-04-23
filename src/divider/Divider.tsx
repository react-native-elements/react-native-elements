import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { withTheme } from '../config';
import theme from '../config/theme';
import { RneFunctionComponent } from '../helpers';

export type DividerProps = ViewProps & {
  style?: object | any[];
  inset?: boolean;
  insetType?: 'left' | 'right' | 'middle';
};

const Divider: RneFunctionComponent<DividerProps> = ({
  style,
  theme,
  inset = false,
  insetType = 'left',
  ...rest
}) => (
  <View
    style={StyleSheet.flatten([
      styles.divider,
      style,
      inset &&
        (insetType === 'left'
          ? styles.leftInset
          : insetType === 'right'
          ? styles.rightInset
          : { ...styles.leftInset, ...styles.rightInset }),
    ])}
    {...rest}
  />
);

const styles = StyleSheet.create({
  divider: {
    backgroundColor: theme?.colors?.divider,
    height: StyleSheet.hairlineWidth,
  },
  leftInset: {
    marginLeft: 72,
  },
  rightInset: {
    marginRight: 72,
  },
});

export { Divider };
export default withTheme(Divider, 'Divider');
