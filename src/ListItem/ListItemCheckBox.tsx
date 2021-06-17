import React from 'react';
import { StyleSheet } from 'react-native';
import CheckBox, { CheckBoxProps } from '../Checkbox';
import { RneFunctionComponent } from '../helpers';

export const ListItemCheckBox: RneFunctionComponent<CheckBoxProps> = ({
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
