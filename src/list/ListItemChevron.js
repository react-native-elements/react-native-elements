import React from 'react';
import { StyleSheet, Platform } from 'react-native';

import { withTheme } from '../config';
import Icon from '../icons/Icon';

function ListItemChevron({ containerStyle, ...props }) {
  return (
    <Icon
      type={Platform.OS === 'ios' ? 'ionicon' : 'material'}
      color="#D1D1D6"
      name={
        Platform.OS === 'ios' ? 'ios-arrow-forward' : 'keyboard-arrow-right'
      }
      size={16}
      containerStyle={StyleSheet.flatten([
        { alignSelf: 'center' },
        containerStyle,
      ])}
      {...props}
    />
  );
}

export default withTheme(ListItemChevron, 'ListItemChevron');
