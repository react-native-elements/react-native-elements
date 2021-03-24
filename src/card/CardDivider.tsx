import React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme } from '../config';
import Divider, { DividerProps } from '../divider/Divider';
import { RneFunctionComponent } from '../helpers';

const CardDivider: RneFunctionComponent<DividerProps> = ({
  style,
  ...props
}) => {
  return (
    <Divider style={StyleSheet.flatten([styles.divider, style])} {...props} />
  );
};

const styles = StyleSheet.create({
  divider: {
    marginBottom: 15,
  },
});

export default withTheme(CardDivider, 'CardDivider');
