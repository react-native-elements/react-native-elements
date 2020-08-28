import React from 'react';
import { StyleSheet } from 'react-native';

import { withTheme } from '../config';
import Divider from '../divider/Divider';

const CardDivider = ({ style, ...props }) => {
  return (
    <Divider style={StyleSheet.flatten([styles.divider, style])} {...props} />
  );
};

const styles = {
  divider: {
    marginBottom: 15,
  },
};

export default withTheme(CardDivider, 'CardDivider');
