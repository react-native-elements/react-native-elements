import React from 'react';
import { TouchableOpacityProps, TouchableNativeFeedbackProps, StyleProp, ViewStyle, ActivityIndicatorProps, TextStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { IconNode } from '../Icon';
import { TextProps } from '../Text';
export declare type ButtonProps = TouchableOpacityProps & TouchableNativeFeedbackProps & {
    /** Add button title. */
    title?: string | React.ReactElement<{}>;
    /** Add additional styling for title component. */
    titleStyle?: StyleProp<TextStyle>;
    /** Add additional props for Text component. */
    titleProps?: TextProps;
    /** Add additional styling for button component. */
    buttonStyle?: StyleProp<ViewStyle>;
    /** Type of button. */
    type?: 'solid' | 'clear' | 'outline';
    /** Prop to display a loading spinner. */
    loading?: boolean;
    /** Add additional styling for loading component. */
    loadingStyle?: StyleProp<ViewStyle>;
    /** Add additional props for ActivityIndicator component. */
    loadingProps?: ActivityIndicatorProps;
    /** Styling for Component container. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Displays a centered icon (when no title) or to the left (with text). (can be used along with iconRight as well). Can be an object or a custom component. */
    icon?: IconNode;
    /** Styling for Icon Component container. */
    iconContainerStyle?: StyleProp<ViewStyle>;
    /** Displays Icon to the right of title. Needs to be used along with `icon` prop. */
    iconRight?: boolean;
    /** Displays a linear gradient. See [usage](#lineargradient-usage). */
    linearGradientProps?: object;
    /** Component for user interaction. */
    TouchableComponent?: typeof React.Component;
    /** Component for container. */
    ViewComponent?: typeof React.Component;
    /** Disables user interaction. */
    disabled?: boolean;
    /** Style of the button when disabled. */
    disabledStyle?: StyleProp<ViewStyle>;
    /** Style of the title when disabled. */
    disabledTitleStyle?: StyleProp<TextStyle>;
    /** Add raised button styling (optional). Has no effect if `type="clear"`. */
    raised?: boolean;
    /** Displays Icon to the position mentioned. Needs to be used along with `icon` prop. */
    iconPosition?: 'left' | 'right' | 'top' | 'bottom';
};
/** Buttons are touchable elements used to interact with the screen and to perform and operation.
 * They may display text, icons, or both. Buttons can be styled with several props to look a specific way.
 * Also receives all [TouchableNativeFeedback](http://reactnative.dev/docs/touchablenativefeedback.html#props) (Android) or [TouchableOpacity](http://reactnative.dev/docs/touchableopacity.html#props) (iOS) props. */
export declare const Button: RneFunctionComponent<ButtonProps>;
