import React from 'react';
import { StyleSheet } from 'react-native';
import CheckBox, { CheckBoxProps } from '../Checkbox';
import { RneFunctionComponent } from '../helpers';

export type ListItemCheckBoxProps = CheckBoxProps;

export const ListItemCheckBox: RneFunctionComponent<ListItemCheckBoxProps> = ({
  containerStyle,
  ...props
}) => {
  return (
    <CheckBox
      {...props}
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

ListItemCheckBox.displayName = 'ListItemCheckBox';
