import React from 'react';
import { StyleSheet, View } from 'react-native';

import { withTheme } from '../config';

function ListItemContent({ style, right, children, ...props }) {
  const containerStyle = right ? styles.rightContainer : styles.container;
  return (
    <View style={StyleSheet.flatten([containerStyle, style])} {...props}>
      {children}
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
};

export default withTheme(ListItemContent, 'ListItemContent');
