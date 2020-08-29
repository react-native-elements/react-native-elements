import React from 'react';
import { StyleSheet } from 'react-native';

import { withTheme } from '../config';
import Input from '../input/Input';

function ListItemInput({
  inputStyle,
  inputContainerStyle,
  containerStyle,
  ...props
}) {
  return (
    <Input
      renderErrorMessage={false}
      {...props}
      inputStyle={StyleSheet.flatten([styles.input, inputStyle])}
      inputContainerStyle={StyleSheet.flatten([
        styles.inputContainer,
        inputContainerStyle,
      ])}
      containerStyle={StyleSheet.flatten([styles.container, containerStyle])}
    />
  );
}

const styles = {
  container: {
    flex: 1,
    paddingRight: 0,
  },
  inputContainer: {
    flex: 1,
    borderBottomWidth: 0,
    width: null,
    height: null,
  },
  input: {
    flex: 1,
    textAlign: 'right',
    width: null,
    height: null,
  },
};

export default withTheme(ListItemInput, 'ListItemInput');
