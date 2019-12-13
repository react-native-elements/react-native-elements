declare var _default: any;
export default _default;
export class Input extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    shakeAnimationValue: Animated.Value;
    focus(): void;
    blur(): void;
    clear(): void;
    isFocused(): any;
    setNativeProps(nativeProps: any): void;
    shake: () => void;
    render(): JSX.Element;
    input: any;
}
export namespace Input {
    export namespace propTypes {
        export const containerStyle: any;
        export const disabled: PropTypes.Requireable<boolean>;
        export const disabledInputStyle: any;
        export const inputContainerStyle: any;
        export { nodeType as leftIcon };
        export const leftIconContainerStyle: any;
        export { nodeType as rightIcon };
        export const rightIconContainerStyle: any;
        export const inputStyle: any;
        export const InputComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        export const errorProps: PropTypes.Requireable<object>;
        export const errorStyle: any;
        export const errorMessage: PropTypes.Requireable<string>;
        export const label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const labelStyle: any;
        export const labelProps: PropTypes.Requireable<object>;
        export const theme: PropTypes.Requireable<object>;
    }
    export namespace defaultProps {
        export { TextInput as InputComponent };
    }
}
import React from "react";
import { Animated } from "react-native";
import PropTypes from "prop-types";
import { nodeType } from "../helpers";
import { TextInput } from "react-native";
