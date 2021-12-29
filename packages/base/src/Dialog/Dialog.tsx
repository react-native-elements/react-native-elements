import React, { ReactNode } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Overlay, { OverlayProps } from '../Overlay';
import { RneFunctionComponent } from '../helpers';

export type DialogBaseProps = Omit<OverlayProps, 'fullScreen'> & {
  /** Add Enclosed components. */
  children?: ReactNode;

  /** If true, the dialog is visible. */
  isVisible?: boolean;

  /** Add additional styling to the internal Overlay component. */
  overlayStyle?: StyleProp<ViewStyle>;
};

/** Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 * You can wrap any component with a simple Dialog component to display quick information to the user.
 * Also receives all [Overlay](https://reactnativeelements.com/docs/overlay#props) props except `fullscreen`. */
export const DialogBase: RneFunctionComponent<DialogBaseProps> = ({
  children,
  theme,
  overlayStyle,
  onBackdropPress,
  isVisible,
  ...rest
}) => {
  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      overlayStyle={StyleSheet.flatten([styles.dialog, overlayStyle])}
      testID="Internal__Overlay"
      {...rest}
    >
      <View style={styles.childrenContainer}>{children}</View>
    </Overlay>
  );
};

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

DialogBase.displayName = 'Dialog';
