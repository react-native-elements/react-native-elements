import React from 'react';
import { StyleSheet } from 'react-native';
import Input from '../input/Input';

function ListInput({
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
        styles.inputContentContainer,
        inputContainerStyle,
      ])}
      containerStyle={StyleSheet.flatten([
        styles.inputContainer,
        containerStyle,
      ])}
    />
  );
}

const styles = {
  inputContainer: {
    flex: 1,
    paddingRight: 0,
  },
  inputContentContainer: {
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

export default ListInput;
