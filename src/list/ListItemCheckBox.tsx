import React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme } from '../config';
import CheckBox, { CheckBoxProps } from '../checkbox/CheckBox';

function ListItemCheckBox({ containerStyle, ...props }: CheckBoxProps) {
  return (
    <CheckBox
      {...props}
      containerStyle={StyleSheet.flatten([styles.container, containerStyle])}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    marginRight: 0,
    marginLeft: 0,
    padding: 0,
  },
});

export default withTheme(ListItemCheckBox, 'ListItemCheckBox');
