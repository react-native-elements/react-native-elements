import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { OverlayProps } from '../Overlay';
import { RneFunctionComponent } from '../helpers';
export declare type DialogBaseProps = Omit<OverlayProps, 'fullScreen'> & {
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
export declare const DialogBase: RneFunctionComponent<DialogBaseProps>;
