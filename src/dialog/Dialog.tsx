import React from 'react';
import { View, Text, StyleSheet, TextStyle, StyleProp } from 'react-native';
import Overlay, { OverlayProps } from '../overlay/Overlay';
import Button, { ButtonProps } from '../buttons/Button';
import { withTheme } from '../config';
import { TextProps } from '../text/Text';

export type DialogProps = Omit<OverlayProps, 'fullScreen'> & {
  loading?: boolean;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  titleProps?: TextProps;
  primary?: string;
  primaryOnPress?(): void;
  primaryButtonProps?: ButtonProps;
  secondary?: string;
  secondaryOnPress?(): void;
  secondaryButtonProps?: ButtonProps;
};

const Dialog: React.FunctionComponent<DialogProps> = ({
  children,
  loading,
  title,
  titleStyle,
  titleProps,
  primary,
  primaryOnPress,
  primaryButtonProps,
  secondary,
  secondaryOnPress,
  secondaryButtonProps,
  overlayStyle,
  onBackdropPress,
  ...rest
}) => {
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
      {children}
      <View style={styles.buttonView}>
        <Button
          title={primary}
          titleStyle={styles.buttonTitle}
          containerStyle={{
            width: 100,
            marginHorizontal: 30,
          }}
          onPress={primaryOnPress ?? onBackdropPress}
          {...primaryButtonProps}
        />
        {secondary !== null ? (
          <Button
            title={secondary}
            titleStyle={styles.buttonTitle}
            containerStyle={{
              width: 100,
            }}
            onPress={secondaryOnPress}
            {...secondaryButtonProps}
          />
        ) : null}
      </View>
    </Overlay>
  );
};

Dialog.defaultProps = {
  primary: 'Close',
  secondary: null,
  primaryOnPress: null,
  secondaryOnPress: () => null,
  primaryButtonProps: { type: 'clear' },
  secondaryButtonProps: { type: 'clear' },
};

const styles = StyleSheet.create({
  dialog: {
    width: '75%',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 15,
  },
  buttonView: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  buttonTitle: {
    fontSize: 15,
  },
});

export { Dialog };

export default withTheme<DialogProps, {}>(Dialog, 'Dialog');
