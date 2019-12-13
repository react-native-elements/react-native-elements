import React from 'react';
import { Animated } from 'react-native';
declare type InputProps = {
    containerStyle?: any;
    disabled?: boolean;
    disabledInputStyle?: any;
    inputContainerStyle?: any;
    leftIcon?: any;
    leftIconContainerStyle?: any;
    rightIcon?: any;
    rightIconContainerStyle?: any;
    inputStyle?: any;
    InputComponent?: JSX.Element;
    errorProps?: object;
    errorStyle?: any;
    errorMessage?: string;
    label?: React.ReactNode;
    labelStyle?: any;
    labelProps?: object;
    theme?: object;
};
declare class Input extends React.Component<InputProps, {}> {
    shakeAnimationValue: Animated.Value;
    focus(): void;
    blur(): void;
    clear(): void;
    isFocused(): any;
    setNativeProps(nativeProps: any): void;
    shake: () => void;
    render(): JSX.Element;
}
export { Input };
declare const _default: any;
export default _default;
