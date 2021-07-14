import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import Icon, { IconProps } from '../Icon';

export type ListItemChevronProps = Partial<IconProps>;

/** This allows adding a Chevron Icon(arrow) to the ListItem.
 * This, Receives all [Icon](icon.md#props) props. */
export const ListItemChevron: RneFunctionComponent<ListItemChevronProps> = ({
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

ListItemChevron.displayName = 'ListItem.Chevron';
