import React from 'react';
import { Platform } from 'react-native';
import Icon from '../icons/Icon';

function ListChevron(props) {
  return (
    <Icon
      name={
        Platform.OS === 'ios' ? 'ios-arrow-forward' : 'keyboard-arrow-right'
      }
      type={Platform.OS === 'ios' ? 'ionicon' : 'material'}
      size={16}
      color="#D1D1D6"
      {...props}
    />
  );
}

export default ListChevron;
