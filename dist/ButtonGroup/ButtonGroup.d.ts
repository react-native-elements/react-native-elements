import React from 'react';
import { ViewStyle, StyleProp, TextStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type ButtonGroupProps = {
    /** Button for the component. */
    button?: object;
    /** Choose other button component such as TouchableOpacity. */
    Component?: typeof React.Component;
    /** Method to update Button Group Index. */
    onPress?(...args: any[]): void;
    /** Array of buttons for component (required), if returning a component, must be an object with { element: componentName }. */
    buttons?: (string | React.ReactElement<{}>)[];
    /** Specify styling for main button container. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Specify specific styling for text. */
    textStyle?: StyleProp<TextStyle>;
    /** Specify specific styling for text in the selected state. */
    selectedTextStyle?: StyleProp<TextStyle>;
    /** Specify styling for selected button. */
    selectedButtonStyle?: StyleProp<ViewStyle>;
    /** Specify underlayColor for TouchableHighlight. */
    underlayColor?: string;
    /** Current selected index of array of buttons. */
    selectedIndex?: number | null;
    /** Current selected indexes from the array of buttons. */
    selectedIndexes?: number[];
    /** Add active opacity to the button in buttongroup. */
    activeOpacity?: number;
    /** Function called on hiding underlay. */
    onHideUnderlay?(): void;
    /** Function called on showing underlay. */
    onShowUnderlay?(): void;
    /** Funtion to set the opacity. */
    setOpacityTo?: (value: number) => void;
    /** Update the styling of the interior border of the list of buttons. */
    innerBorderStyle?: {
        color?: string;
        width?: number;
    };
    /** Specify styling for button. */
    buttonStyle?: StyleProp<ViewStyle>;
    /** Specify styling for button containers. */
    buttonContainerStyle?: StyleProp<ViewStyle>;
    /** Allows the user to select multiple buttons. */
    selectMultiple?: boolean;
    /** Controls if buttons are disabled. Setting `true` makes all of them disabled, while using an array only makes those indices disabled. */
    disabled?: boolean | number[];
    /** Styling for each button when disabled. */
    disabledStyle?: StyleProp<ViewStyle>;
    /** Styling for the text of each button when disabled. */
    disabledTextStyle?: StyleProp<TextStyle>;
    /** Styling for each selected button when disabled. */
    disabledSelectedStyle?: StyleProp<ViewStyle>;
    /** Styling for the text of each selected button when disabled. */
    disabledSelectedTextStyle?: StyleProp<TextStyle>;
    /** Display the ButtonGroup vertically. */
    vertical?: boolean;
};
/** ButtonGroup is a linear set of segments, each of which function as a button that can display a different view/or perform a different action.
 * Use a ButtonGroup to offer choices that are closely related but mutually exclusive.
 * This component inherits [all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements](https://reactnative.dev/docs/touchablehighlight.html). */
export declare const ButtonGroup: RneFunctionComponent<ButtonGroupProps>;
