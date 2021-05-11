import React from 'react';
import { StyleSheet } from 'react-native';
import Button, { ButtonProps } from '../buttons/Button';
import { withTheme } from '../config';

const DialogButton: React.FunctionComponent<ButtonProps> = ({
  titleStyle,
  ...rest
}) => {
  return (
    <Button
      style={{ marginLeft: 5 }}
      titleStyle={StyleSheet.flatten([styles.buttonTitle, titleStyle])}
      containerStyle={{
        width: 'auto',
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

export default withTheme(DialogButton, 'DialogButton');
