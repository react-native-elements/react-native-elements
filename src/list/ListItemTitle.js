import React from 'react';
import { StyleSheet, Platform } from 'react-native';

import { withTheme } from '../config';
import Text from '../text/Text';

const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';

function ListItemTitle({ style, right, children, ...props }) {
  return (
    <Text
      testID="listItemTitle"
      style={StyleSheet.flatten([
        styles.title,
        right && styles.rightTitle,
        style,
      ])}
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = {
  title: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        fontSize: 17,
      },
      default: {
        fontSize: 16,
      },
    }),
  },
  rightTitle: {
    color: ANDROID_SECONDARY,
  },
};

export default withTheme(ListItemTitle, 'ListItemTitle');
