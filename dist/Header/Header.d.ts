import React from 'react';
import { StyleProp, TextProps, ViewProps, StatusBarProps, StatusBarStyle, ImageSourcePropType, ImageStyle, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { HeaderIcon } from './components/HeaderIcon';
declare type HeaderSubComponent = React.ReactElement<{}> | TextProps | HeaderIcon;
export declare type HeaderProps = ViewProps & {
    /** Component for container. */
    ViewComponent?: typeof React.Component;
    /** Displays a linear gradient. See [usage](#lineargradient-usage). */
    linearGradientProps?: Object;
    /** Accepts all props for StatusBar. */
    statusBarProps?: StatusBarProps;
    /** Sets the color of the status bar text. */
    barStyle?: StatusBarStyle;
    /** Define your left component here. */
    leftComponent?: HeaderSubComponent;
    /** Define your center component here. */
    centerComponent?: HeaderSubComponent;
    /** Define your right component here. */
    rightComponent?: HeaderSubComponent;
    /** Sets backgroundColor of the parent component. */
    backgroundColor?: string;
    /** Sets backgroundImage for parent component. */
    backgroundImage?: ImageSourcePropType;
    /** Styling for backgroundImage in the main container. */
    backgroundImageStyle?: ImageStyle;
    /** Alignment for title. */
    placement?: 'left' | 'center' | 'right';
    /** Styling around the main container. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Styling for container around the centerComponent. */
    centerContainerStyle?: StyleProp<ViewStyle>;
    /** Styling for container around the leftComponent. */
    leftContainerStyle?: StyleProp<ViewStyle>;
    /** Styling for container around the rightComponent. */
    rightContainerStyle?: StyleProp<ViewStyle>;
    /** Add children component to the header. */
    children?: JSX.Element[];
    /** Elevation for header */
    elevated?: boolean;
};
/** Headers are navigation components that display information and actions relating to the current screen.
 * **Note:**
 * Make sure that you have completed [Step 3](getting_started.md#step-3-setup-react-native-safe-area-context) in the setup guide before using `Header`.
 */
export declare const Header: RneFunctionComponent<HeaderProps>;
export {};
