import React from 'react';
import { StyleSheet, Platform } from 'react-native';

import { withTheme } from '../config';
import Text from '../text/Text';

const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';

function ListItemSubtitle({ style, right, children, ...props }) {
  return (
    <Text
      testID="listItemTitle"
      style={StyleSheet.flatten([
        styles.subtitle,
        right && styles.rightSubtitle,
        style,
      ])}
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = {
  subtitle: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        fontSize: 15,
      },
      default: {
        color: ANDROID_SECONDARY,
        fontSize: 14,
      },
    }),
  },

  rightSubtitle: {
    color: ANDROID_SECONDARY,
  },
};

export default withTheme(ListItemSubtitle, 'ListItemSubtitle');
