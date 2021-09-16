import { StyleProp, ViewStyle, ViewProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type LinearProgressProps = ViewProps & {
    /** The value of the progress indicator for the determinate variant. Value between 0 and 1. */
    value?: number;
    /** Type of button. */
    variant?: 'determinate' | 'indeterminate';
    /** Color for linear progress. */
    color?: 'primary' | 'secondary' | string;
    /** Track color for linear progress. */
    trackColor?: string;
    /** Add additional styling for linear progress component. */
    style?: StyleProp<ViewStyle>;
    /** Animation duration */
    animation?: {
        duration?: number;
    } | boolean;
};
/** Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.
 * They communicate an app’s state and indicate available actions, such as whether users can navigate away from the current screen.
 * Also receives all [View](https://reactnative.dev/docs/view#props) props */
export declare const LinearProgress: RneFunctionComponent<LinearProgressProps>;
