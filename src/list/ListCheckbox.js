import React from 'react';
import { StyleSheet } from 'react-native';
import CheckBox from '../checkbox/CheckBox';

function ListCheckbox({ containerStyle, ...props }) {
  return (
    <CheckBox
      {...props}
      containerStyle={StyleSheet.flatten([
        styles.checkboxContainer,
        containerStyle,
      ])}
    />
  );
}

const styles = {
  checkboxContainer: {
    margin: 0,
    marginRight: 0,
    marginLeft: 0,
    padding: 0,
  },
};

export default ListCheckbox;
