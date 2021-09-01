import React from 'react';
import { StyleSheet } from 'react-native';
import ButtonGroup, { ButtonGroupProps } from '../ButtonGroup';
import { RneFunctionComponent } from '../helpers';

export type ListItemButtonGroupProps = ButtonGroupProps;

/** This allows adding ButtonGroup to the ListItem.
 * This, Receives all [ButtonGroup](buttongroup#props) props. */
export const ListItemButtonGroup: RneFunctionComponent<ListItemButtonGroupProps> =
  ({ containerStyle, ...rest }) => {
    return (
      <ButtonGroup
        {...rest}
        containerStyle={StyleSheet.flatten([styles.container, containerStyle])}
      />
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,
    marginVertical: 0,
  },
});

ListItemButtonGroup.displayName = 'ListItem.ButtonGroup';
