import React from 'react';
import { StyleSheet } from 'react-native';
import { CheckBoxProps, CheckBox } from '../CheckBox';
import { RneFunctionComponent } from '../helpers';

export interface ListItemCheckBoxProps extends CheckBoxProps {}

/** This allows adding CheckBox to the ListItem.
 * This, Receives all [CheckBox](checkbox#props) props. */
export const ListItemCheckBox: RneFunctionComponent<ListItemCheckBoxProps> = ({
  containerStyle,
  ...rest
}) => {
  return (
    <CheckBox
      {...rest}
      containerStyle={StyleSheet.flatten([styles.container, containerStyle])}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    marginRight: 0,
    marginLeft: 0,
    padding: 0,
  },
});

ListItemCheckBox.displayName = 'ListItem.CheckBox';
