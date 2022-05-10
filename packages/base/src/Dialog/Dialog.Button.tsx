import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { ButtonProps, Button } from '../Button';
import { RneFunctionComponent } from '../helpers';

const SCREEN_WIDTH = Dimensions.get('window').width;

export interface DialogButtonProps extends ButtonProps {}

/** This is used to add a button to the Dialog.
 * Receives all [Button](button#props) props. */
export const DialogButton: RneFunctionComponent<DialogButtonProps> = ({
  titleStyle,
  ...rest
}) => {
  return (
    <Button
      style={{ marginLeft: 5 }}
      titleStyle={StyleSheet.flatten([styles.buttonTitle, titleStyle])}
      containerStyle={{
        width: 'auto',
        marginRight: SCREEN_WIDTH * 0.01,
      }}
      testID="Dialog__Button"
      {...rest}
    />
  );
};

DialogButton.defaultProps = {
  title: 'ACTION',
  type: 'clear',
};

const styles = StyleSheet.create({
  buttonTitle: {
    fontSize: 15,
    fontWeight: '500',
  },
});

DialogButton.displayName = 'Dialog.Button';
