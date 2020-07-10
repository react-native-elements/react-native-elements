import React from 'react';
import { Platform } from 'react-native';
import Icon from '../icons/Icon';

const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';

function ListIcon(props) {
  return (
    <Icon
      size={24}
      color={Platform.OS === 'ios' ? null : ANDROID_SECONDARY}
      {...props}
    />
  );
}

export default ListIcon;
