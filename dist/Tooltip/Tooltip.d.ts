import React from 'react';
import { ViewStyle, StyleProp, ColorValue } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type TooltipProps = {
    /** To show the tooltip. */
    visible?: boolean;
    /** Flag to determine whether or not to display the pointer. */
    withPointer?: boolean;
    /** Component to be rendered as the display container. */
    popover?: React.ReactElement<{}>;
    /** Flag to determine to toggle or not the tooltip on press. */
    toggleOnPress?: boolean;
    /** Define type of action that should trigger tooltip. Available options _onPress_, _onLongPress_ */
    toggleAction?: string | 'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut';
    /** Tooltip container height. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container. */
    height?: number;
    /** Tooltip container width. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container. */
    width?: number;
    /** Passes style object to tooltip container */
    containerStyle?: StyleProp<ViewStyle>;
    /** Color of tooltip pointer, it defaults to the [`backgroundColor`](#backgroundcolor) if none is passed. */
    pointerColor?: ColorValue;
    /** Function which gets called on closing the tooltip. */
    onClose?(): void;
    /** Function which gets called on opening the tooltip. */
    onOpen?(): void;
    /** Color of overlay shadow when tooltip is open. */
    overlayColor?: ColorValue;
    /** Flag to determine whether or not display overlay shadow when tooltip is open. */
    withOverlay?: boolean;
    /** Sets backgroundColor of the tooltip and pointer. */
    backgroundColor?: ColorValue;
    /** Color to highlight the item the tooltip is surrounding. */
    highlightColor?: ColorValue;
    /** Force skip StatusBar height when calculating element position. Pass `true` if Tooltip used inside react-native Modal component. */
    skipAndroidStatusBar?: boolean;
    /** Flag to determine whether to disable auto hiding of tooltip when touching/scrolling anywhere inside the active tooltip popover container. When `true`, Tooltip closes only when overlay backdrop is pressed (or) highlighted tooltip button is pressed. */
    closeOnlyOnBackdropPress?: boolean;
    /** Override React Native `Modal` component (usable for web-platform). */
    ModalComponent?: typeof React.Component;
    /** Style to be applied on the pointer. */
    pointerStyle?: StyleProp<ViewStyle>;
};
/** Tooltips display informative text when users tap on an element. */
export declare const Tooltip: RneFunctionComponent<TooltipProps>;
