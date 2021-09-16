import React from 'react';
import { ViewStyle, StyleProp, TextStyle } from 'react-native';
import { IconButtonProps, IconProps as VectorIconProps } from 'react-native-vector-icons/Icon';
import { InlinePressableProps, RneFunctionComponent } from '../helpers';
export declare type IconType = 'material' | 'material-community' | 'simple-line-icon' | 'zocial' | 'font-awesome' | 'octicon' | 'ionicon' | 'foundation' | 'evilicon' | 'entypo' | 'antdesign' | 'font-awesome-5' | string;
export declare type IconObject = {
    /** Name of icon. */
    name?: string;
    /** Color of icon. */
    color?: string;
    /** Size of icon. */
    size?: number;
    /** Type of icon */
    type?: IconType;
    /** Apply style to the icon using iconStyle. */
    iconStyle?: StyleProp<TextStyle>;
};
export declare type IconNode = boolean | React.ReactElement<{}> | Partial<IconProps>;
export declare type IconProps = IconButtonProps & {
    /** Type of icon set. [Supported sets here](#available-icon-sets). */
    type?: IconType;
    /** Update React Native Component. */
    Component?: typeof React.Component;
    /** Reverses color scheme. */
    reverse?: boolean;
    /** Adds box shadow to button. */
    raised?: boolean;
    /** Add styling to container holding icon. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Provide all props from react-native Icon component. */
    iconProps?: VectorIconProps;
    /** Specify reverse icon color. */
    reverseColor?: string;
    /** Disables onPress events. Only works when `onPress` has a handler. */
    disabled?: boolean;
    /** Style for the button when disabled. Only works when `onPress` has a handler. */
    disabledStyle?: StyleProp<ViewStyle>;
    /** Uses the solid font. */
    solid?: boolean;
    /** Uses the brands font (FontAwesome5 only). */
    brand?: boolean;
} & InlinePressableProps;
/** Icons are visual indicators usually used to describe action or intent.
 * They are also used for displaying information. */
export declare const Icon: RneFunctionComponent<IconProps>;
