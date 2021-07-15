import React from 'react';
import { ModalProps, ViewStyle, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type OverlayProps = ModalProps & {
    /** If true, the overlay is visible. */
    isVisible: boolean;
    /** Style of the backdrop container. */
    backdropStyle?: StyleProp<ViewStyle>;
    /** Style of the actual overlay. */
    overlayStyle?: StyleProp<ViewStyle>;
    /** Handler for backdrop press (only works when `fullscreen` is false). */
    onBackdropPress?(): void;
    /** If set to true, the modal will take up the entire screen width and height. */
    fullScreen?: boolean;
    /** Override React Native `Modal` component (usable for web-platform). */
    ModalComponent?: typeof React.Component;
};
/** The Overlay is a view that floats above an app’s content.
 * Overlays are an easy way to inform or request information from the user. */
export declare const Overlay: RneFunctionComponent<OverlayProps>;
