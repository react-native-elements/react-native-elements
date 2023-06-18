import React from 'react';
import { TextInput, Animated, ViewStyle, StyleProp, TextStyle, TextInputProps } from 'react-native';
import { Theme } from '../helpers';
import { IconNode } from '../Icon';
export interface InputProps extends React.ComponentPropsWithRef<typeof TextInput> {
    shake?: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
    disabledInputStyle?: StyleProp<TextStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    leftIcon?: IconNode;
    leftIconContainerStyle?: StyleProp<ViewStyle>;
    rightIcon?: IconNode;
    rightIconContainerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    InputComponent?: React.ComponentType | React.ForwardRefExoticComponent<any>;
    errorProps?: object;
    errorStyle?: StyleProp<TextStyle>;
    errorMessage?: string;
    ErrorComponent?: React.ComponentType | React.ForwardRefExoticComponent<any>;
    label?: string | React.ReactNode;
    labelStyle?: StyleProp<TextStyle>;
    labelProps?: object;
    renderErrorMessage?: boolean;
}
export declare class Input extends React.Component<InputProps & {
    theme?: Theme;
}> {
    static displayName: string;
    input: any;
    shakeAnimationValue: Animated.Value;
    focus(): void;
    blur(): void;
    clear(): void;
    isFocused(): boolean;
    setNativeProps(nativeProps: Partial<TextInputProps>): void;
    shake: () => void;
    render(): JSX.Element;
}
