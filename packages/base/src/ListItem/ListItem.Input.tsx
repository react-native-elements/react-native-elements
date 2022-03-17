import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Theme } from '../helpers';
import { Input, InputProps } from '../Input';

export interface ListItemInputProps extends InputProps {}

/** This allows adding an Text Input within the ListItem.
 * This, Receives all [Input](Input.mdx#props) props. */
export const ListItemInput = React.forwardRef<
  TextInput,
  ListItemInputProps & { theme?: Theme }
>(({ inputStyle, inputContainerStyle, containerStyle, ...rest }, ref) => {
  return (
    <Input
      // @ts-ignore
      ref={ref}
      renderErrorMessage={false}
      {...rest}
      inputStyle={StyleSheet.flatten([styles.input, inputStyle])}
      inputContainerStyle={StyleSheet.flatten([
        styles.inputContainer,
        inputContainerStyle,
      ])}
      containerStyle={StyleSheet.flatten([styles.container, containerStyle])}
    />
  );
});

const styles = StyleSheet.create({
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
});

ListItemInput.displayName = 'ListItem.Input';
