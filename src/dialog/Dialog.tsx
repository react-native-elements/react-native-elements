import React from 'react';
import { View, StyleSheet } from 'react-native';
import Overlay, { OverlayProps } from '../overlay/Overlay';
import { Theme } from '../config/theme';
import { withTheme } from '../config';
import DialogLoading from './DialogLoading';
import DialogTitle from './DialogTitle';
import DialogButton from './DialogButton';
import DialogActions from './DialogActions';

export type DialogProps = Omit<OverlayProps, 'fullScreen'> & {
  theme?: Theme;
  children?: any;
};

interface Dialog extends React.FunctionComponent<DialogProps> {
  Loading: typeof DialogLoading;
  Title: typeof DialogTitle;
  Actions: typeof DialogActions;
  Button: typeof DialogButton;
}

const Dialog: Dialog = Object.assign(
  ({ children, theme, overlayStyle, onBackdropPress, isVisible, ...rest }) => {
    return (
      <Overlay
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        overlayStyle={StyleSheet.flatten([styles.dialog, overlayStyle])}
        testID="Internal__Overlay"
        {...rest}
      >
        {/* {loading && (
        <View style={styles.loadingView}>
          <ActivityIndicator
            style={StyleSheet.flatten([styles.loading, loadingStyle])}
            color={loadingProps.color ?? theme.colors.primary}
            size={loadingProps.size ?? 'large'}
            {...loadingProps}
          />
        </View>
      )} */}

        {/* {title && !loading && (
        <Text
          style={StyleSheet.flatten([styles.title, titleStyle])}
          {...titleProps}
        >
          {title}
        </Text>
      )} */}

        <View style={styles.childrenContainer}>{children}</View>

        {/* {!loading && !noButtons && (
        <View style={styles.buttonView} testID="Button__View">
          <Button
            style={{ marginLeft: 5 }}
            title={primary.toUpperCase()}
            titleStyle={styles.buttonTitle}
            containerStyle={{
              width: 'auto',
            }}
            onPress={primaryOnPress ?? onBackdropPress}
            testID="Primary__Button"
            {...primaryButtonProps}
          />
          {secondary !== null ? (
            <Button
              title={secondary.toUpperCase()}
              titleStyle={styles.buttonTitle}
              containerStyle={{
                width: 'auto',
              }}
              onPress={secondaryOnPress}
              testID="Secondary__Button"
              {...secondaryButtonProps}
            />
          ) : null}
        </View>
      )} */}
      </Overlay>
    );
  }
);

const styles = StyleSheet.create({
  dialog: {
    width: '75%',
    padding: 20,
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
});

export { Dialog };

const ThemedDialog = Object.assign(withTheme(Dialog, 'Dialog'), {
  Loading: DialogLoading,
  Title: DialogTitle,
  Actions: DialogActions,
  Button: DialogButton,
});

export default ThemedDialog;
