import React from 'react';
import { StyleSheet } from 'react-native';
import Divider, { DividerProps } from '../Divider';
import { RneFunctionComponent } from '../helpers';

export const CardDivider: RneFunctionComponent<DividerProps> = ({
  style,
  ...props
}) => (
  <Divider style={StyleSheet.flatten([styles.divider, style])} {...props} />
);

const styles = StyleSheet.create({
  divider: {
    marginBottom: 15,
  },
});

CardDivider.displayName = 'CardDivider';
