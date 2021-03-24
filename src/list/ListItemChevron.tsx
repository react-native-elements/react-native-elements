import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';
import Icon, { IconProps } from '../icons/Icon';

const ListItemChevron: RneFunctionComponent<Partial<IconProps>> = ({
  containerStyle,
  ...props
}: Partial<IconProps>) => {
  return (
    <Icon
      type={Platform.OS === 'ios' ? 'ionicon' : 'material'}
      color="#D1D1D6"
      name={
        Platform.OS === 'ios'
          ? 'chevron-forward-outline'
          : 'keyboard-arrow-right'
      }
      size={16}
      containerStyle={StyleSheet.flatten([
        { alignSelf: 'center' },
        containerStyle,
      ])}
      {...props}
    />
  );
};

export default withTheme(ListItemChevron, 'ListItemChevron');
