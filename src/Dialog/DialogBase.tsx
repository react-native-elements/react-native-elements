import React, { ReactNode } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Overlay, { OverlayProps } from '../Overlay';
import { RneFunctionComponent } from '../helpers';

export type DialogBaseProps = Omit<OverlayProps, 'fullScreen'> & {
  children?: ReactNode;
  isVisible?: boolean;
  overlayStyle?: StyleProp<ViewStyle>;
  onBackdropPress?: () => void;
};

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

DialogBase.displayName = 'DialogBase';
