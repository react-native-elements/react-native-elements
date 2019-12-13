declare var _default: any;
export default _default;
export class Image extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    state: {
        placeholderOpacity: Animated.Value;
    };
    onLoad: () => void;
    render(): JSX.Element;
}
export namespace Image {
    export const propTypes: any;
    export namespace defaultProps {
        export { ImageNative as ImageComponent };
        export const style: {};
        export const transition: boolean;
    }
}
import React from "react";
import { Animated } from "react-native";
import { Image as ImageNative } from "react-native";
