import React from 'react';
import { ViewStyle, StyleProp, TextStyle } from 'react-native';
import { RneFunctionComponent, InlinePressableProps } from '../helpers';
declare type ButtonComponent = React.ReactElement;
declare type ButtonObject = {
    element: React.ElementType<any & {
        isSelected?: boolean;
    }>;
};
export interface ButtonGroupProps extends InlinePressableProps {
    button?: object;
    Component?: typeof React.Component;
    onPress?(...args: any[]): void;
    buttons?: (string | ButtonComponent | ButtonObject)[];
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    selectedTextStyle?: StyleProp<TextStyle>;
    selectedButtonStyle?: StyleProp<ViewStyle>;
    underlayColor?: string;
    selectedIndex?: number | null;
    selectedIndexes?: number[];
    activeOpacity?: number;
    onHideUnderlay?(): void;
    onShowUnderlay?(): void;
    setOpacityTo?: (value: number) => void;
    innerBorderStyle?: {
        color?: string;
        width?: number;
    };
    buttonStyle?: StyleProp<ViewStyle>;
    buttonContainerStyle?: StyleProp<ViewStyle>;
    selectMultiple?: boolean;
    disabled?: boolean | number[];
    disabledStyle?: StyleProp<ViewStyle>;
    disabledTextStyle?: StyleProp<TextStyle>;
    disabledSelectedStyle?: StyleProp<ViewStyle>;
    disabledSelectedTextStyle?: StyleProp<TextStyle>;
    vertical?: boolean;
}
export declare const ButtonGroup: RneFunctionComponent<ButtonGroupProps>;
export {};
