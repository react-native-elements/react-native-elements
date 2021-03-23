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
          style={{ marginLeft: 5 }}
          title={primary.toUpperCase()}
          titleStyle={styles.buttonTitle}
          containerStyle={{
            width: 85,
          }}
          onPress={primaryOnPress ?? onBackdropPress}
          {...primaryButtonProps}
        />
        {secondary !== null ? (
          <Button
            title={secondary.toUpperCase()}
            titleStyle={styles.buttonTitle}
            containerStyle={{
              width: 85,
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
    fontWeight: '600',
    marginBottom: 10,
  },
  body: {
    fontSize: 15,
  },
  buttonView: {
    marginTop: 20,
    marginRight: -30,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export { Dialog };

export default withTheme<DialogProps, {}>(Dialog, 'Dialog');
