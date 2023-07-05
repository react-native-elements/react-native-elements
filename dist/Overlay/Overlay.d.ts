import React from 'react';
import { ModalProps, ViewStyle, StyleProp } from 'react-native';
import { InlinePressableProps, RneFunctionComponent } from '../helpers';
export interface OverlayProps extends Omit<ModalProps, 'visible'>, Omit<InlinePressableProps, 'onPress'> {
    isVisible: boolean;
    backdropStyle?: StyleProp<ViewStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
    onBackdropPress?(): void;
    fullScreen?: boolean;
    ModalComponent?: typeof React.Component;
}
export declare const Overlay: RneFunctionComponent<OverlayProps>;
