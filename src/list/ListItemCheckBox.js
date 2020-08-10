import React from 'react';
import { StyleSheet } from 'react-native';

import CheckBox from '../checkbox/CheckBox';

function ListItemCheckBox({ containerStyle, ...props }) {
  return (
    <CheckBox
      {...props}
      containerStyle={StyleSheet.flatten([styles.container, containerStyle])}
    />
  );
}

const styles = {
  container: {
    margin: 0,
    marginRight: 0,
    marginLeft: 0,
    padding: 0,
  },
};

export default ListItemCheckBox;
