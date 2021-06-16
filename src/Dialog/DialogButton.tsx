import React from 'react';
import { StyleSheet } from 'react-native';
import Button, { ButtonProps } from '../Button';
import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';

export const DialogButton: RneFunctionComponent<ButtonProps> = ({
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

DialogButton.displayName = 'DialogButton';

export default withTheme(DialogButton, 'DialogButton');
