import React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';
import Input, { InputProps } from '../input/Input';

const ListItemInput: RneFunctionComponent<InputProps> = ({
  inputStyle,
  inputContainerStyle,
  containerStyle,
  ...props
}) => {
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 0,
  },
  inputContainer: {
    flex: 1,
    borderBottomWidth: 0,
    width: undefined,
    height: undefined,
  },
  input: {
    flex: 1,
    textAlign: 'right',
    width: undefined,
    height: undefined,
  },
});

export default withTheme(ListItemInput, 'ListItemInput');
