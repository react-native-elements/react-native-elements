import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Pressable,
  Modal,
  ModalProps,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { RneFunctionComponent } from '../helpers';

export type OverlayProps = ModalProps & {
  isVisible: boolean;
  backdropStyle?: StyleProp<ViewStyle>;
  overlayStyle?: StyleProp<ViewStyle>;
  onBackdropPress?(): void;
  fullScreen?: boolean;
  ModalComponent?: typeof React.Component;
};

export const Overlay: RneFunctionComponent<OverlayProps> = ({
  children,
  backdropStyle,
  overlayStyle,
  onBackdropPress = () => null,
  fullScreen = false,
  ModalComponent = Modal,
  isVisible,
  ...rest
}) => (
  <ModalComponent
    visible={isVisible}
    onRequestClose={onBackdropPress}
    transparent
    {...rest}
  >
    <Pressable
      style={StyleSheet.flatten([styles.backdrop, backdropStyle])}
      onPress={onBackdropPress}
      testID="RNE__Overlay__backdrop"
    />

    <View style={styles.container} pointerEvents="box-none">
      <View
        style={StyleSheet.flatten([
          styles.overlay,
          fullScreen && styles.fullscreen,
          overlayStyle,
        ])}
      >
        {children}
      </View>
    </View>
  </ModalComponent>
);

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .4)',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullscreen: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 10,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
      },
    }),
  },
});

Overlay.displayName = 'Overlay';
