import { StyleProp, ViewStyle } from 'react-native';
import { ButtonProps } from '../Button';
import { RneFunctionComponent } from '../helpers';
export declare type FABProps = ButtonProps & {
    /** Change the color of the FAB. */
    color?: string;
    /** Change Size of FAB. */
    size?: 'large' | 'small';
    /** FAB placement at bottom, (optional) use [`style`](#style) in case of custom placement. */
    placement?: 'left' | 'right';
    /** Decide the visibility of the FAB. */
    visible?: boolean;
    /** Transform Extended Label text to uppercase. */
    upperCase?: boolean;
    /** Style for FAB */
    style?: StyleProp<ViewStyle>;
};
/** A floating action button (FAB) performs the primary, or most common, action on a screen.
 * It appears in front of all screen content, typically as a circular shape with an icon in its center.
 * Also receives all [Button](https://reactnativeelements.com/docs/button#props) props. */
export declare const FAB: RneFunctionComponent<FABProps>;
