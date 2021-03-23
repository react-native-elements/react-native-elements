import React from 'react';
import { Text, StyleSheet, TextStyle, StyleProp } from 'react-native';
import Overlay, { OverlayProps } from '../overlay/Overlay';
import Button, { ButtonProps } from '../buttons/Button';
import { withTheme } from '../config';
import { TextProps } from '../text/Text';

export type DialogProps = Omit<OverlayProps, 'fullScreen'> & {
  loading?: boolean;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  titleProps?: TextProps;
  body: string;
  bodyStyle?: StyleProp<TextStyle>;
  bodyProps?: TextProps;
  primary?: string;
  primaryOnPress?(): void;
  secondary?: string;
  secondaryOnPress?(): void;
  buttonType?: 'solid' | 'clear' | 'outline';
  buttonProps?: ButtonProps;
};

const Dialog: React.FunctionComponent<DialogProps> = ({
  loading,
  title,
  titleStyle,
  titleProps,
  body,
  bodyStyle,
  bodyProps,
  primary,
  primaryOnPress,
  secondary,
  secondaryOnPress,
  buttonType,
  buttonProps,
  overlayStyle,
  onBackdropPress,
  ...rest
}: DialogProps) => {
  return (
    <Overlay
      {...rest}
      onBackdropPress={onBackdropPress}
      overlayStyle={StyleSheet.flatten([styles.dialog, overlayStyle])}
    >
      <Text
        style={StyleSheet.flatten([styles.title, titleStyle])}
        {...titleProps}
      >
        {title}
      </Text>
      <Text style={StyleSheet.flatten([styles.body, bodyStyle])} {...bodyProps}>
        {body}
      </Text>
      <Button
        title={primary}
        containerStyle={{
          width: 100,
          marginHorizontal: 30,
          marginVertical: 10,
        }}
        type={buttonType}
        onPress={primaryOnPress ?? onBackdropPress}
        {...buttonProps}
      />
      {secondary !== null ? (
        <Button
          title={secondary}
          containerStyle={{
            width: 100,
            marginHorizontal: 30,
            marginVertical: 10,
          }}
          type={buttonType}
          onPress={secondaryOnPress}
          {...buttonProps}
        />
      ) : null}
    </Overlay>
  );
};

Dialog.defaultProps = {
  primary: 'Close',
  secondary: null,
  primaryOnPress: null,
  secondaryOnPress: () => null,
  buttonType: 'clear',
};

const styles = StyleSheet.create({
  dialog: {
    width: '75%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 15,
  },
});

export { Dialog };

export default withTheme<DialogProps, {}>(Dialog, 'Dialog');
