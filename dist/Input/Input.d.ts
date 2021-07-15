import React from 'react';
import { TextInput, Animated, ViewStyle, StyleProp, TextStyle, TextInputProps } from 'react-native';
import { IconNode } from '../Icon';
import { ThemeProps } from '../config';
export declare type InputProps = React.ComponentPropsWithRef<typeof TextInput> & {
    containerStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
    disabledInputStyle?: StyleProp<TextStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    leftIcon?: IconNode;
    leftIconContainerStyle?: StyleProp<ViewStyle>;
    rightIcon?: IconNode;
    rightIconContainerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    InputComponent?: typeof React.Component;
    errorProps?: object;
    errorStyle?: StyleProp<TextStyle>;
    errorMessage?: string;
    label?: string | React.ReactNode;
    labelStyle?: StyleProp<TextStyle>;
    labelProps?: object;
    renderErrorMessage?: boolean;
};
export declare class Input extends React.Component<InputProps & Partial<ThemeProps<InputProps>>> {
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
