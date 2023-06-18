import React from 'react';
import { ViewStyle, StyleProp, ColorValue } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export interface TooltipProps {
    visible?: boolean;
    withPointer?: boolean;
    popover?: React.ReactElement<{}>;
    toggleOnPress?: boolean;
    toggleAction?: string | 'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut';
    height?: number;
    width?: number;
    containerStyle?: StyleProp<ViewStyle>;
    pointerColor?: ColorValue;
    onClose?(): void;
    onOpen?(): void;
    overlayColor?: ColorValue;
    withOverlay?: boolean;
    backgroundColor?: ColorValue;
    highlightColor?: ColorValue;
    skipAndroidStatusBar?: boolean;
    closeOnlyOnBackdropPress?: boolean;
    ModalComponent?: typeof React.Component;
    pointerStyle?: StyleProp<ViewStyle>;
    animationType?: 'fade' | 'none';
}
export declare const Tooltip: RneFunctionComponent<TooltipProps>;
