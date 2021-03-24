import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  StyleProp,
  ViewStyle,
  ActivityIndicatorProps,
  ActivityIndicator,
} from 'react-native';
import Overlay, { OverlayProps } from '../overlay/Overlay';
import Button, { ButtonProps } from '../buttons/Button';
import { Theme } from '../config/theme';
import { withTheme } from '../config';
import { TextProps } from '../text/Text';

export type DialogProps = Omit<OverlayProps, 'fullScreen'> & {
  loading?: boolean;
  loadingStyle?: StyleProp<ViewStyle>;
  loadingProps?: ActivityIndicatorProps;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  titleProps?: TextProps;
  noButtons?: boolean;
  primary?: string;
  primaryOnPress?(): void;
  primaryButtonProps?: ButtonProps;
  secondary?: string;
  secondaryOnPress?(): void;
  secondaryButtonProps?: ButtonProps;
  theme?: Theme;
};

const Dialog: React.FunctionComponent<DialogProps> = ({
  children,
  loading,
  loadingStyle,
  loadingProps,
  title,
  titleStyle,
  titleProps,
  noButtons,
  primary,
  primaryOnPress,
  primaryButtonProps,
  secondary,
  secondaryOnPress,
  secondaryButtonProps,
  theme,
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
      {loading && (
        <View style={styles.loadingView}>
          <ActivityIndicator
            style={StyleSheet.flatten([styles.loading, loadingStyle])}
            color={loadingProps.color ?? theme.colors.primary}
            size={loadingProps.size ?? 'large'}
            {...loadingProps}
          />
        </View>
      )}

      {title && !loading && (
        <Text
          style={StyleSheet.flatten([styles.title, titleStyle])}
          {...titleProps}
        >
          {title}
        </Text>
      )}

      <View style={styles.childrenContainer}>{children}</View>

      {!loading && !noButtons && (
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
      )}
    </Overlay>
  );
};

Dialog.defaultProps = {
  loading: false,
  noButtons: false,
  primary: 'CLOSE',
  secondary: null,
  primaryOnPress: null,
  secondaryOnPress: () => null,
  primaryButtonProps: { type: 'clear' },
  secondaryButtonProps: { type: 'clear' },
  loadingProps: { size: 'large' },
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
  childrenContainer: {
    marginBottom: 5,
  },
  buttonView: {
    marginTop: 10,
    marginRight: -35,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: '500',
  },
  loading: {
    marginVertical: 20,
  },
  loadingView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Dialog };

export default withTheme<DialogProps, {}>(Dialog, 'Dialog');
