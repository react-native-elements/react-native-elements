import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { IconProps, Icon } from '../Icon';

export interface ListItemChevronProps extends Partial<IconProps> {}

/** This allows adding a Chevron Icon(arrow) to the ListItem.
 * This, Receives all [Icon](icon#props) props. */
export const ListItemChevron: RneFunctionComponent<ListItemChevronProps> = ({
  containerStyle,
  ...rest
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
      {...rest}
    />
  );
};

ListItemChevron.displayName = 'ListItem.Chevron';
