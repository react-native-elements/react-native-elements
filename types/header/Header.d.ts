declare var _default: any;
export default _default;
export class Header extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
export namespace Header {
    export namespace propTypes {
        export const placement: PropTypes.Requireable<string>;
        export { nodeType as leftComponent };
        export { nodeType as centerComponent };
        export { nodeType as rightComponent };
        export const leftContainerStyle: any;
        export const centerContainerStyle: any;
        export const rightContainerStyle: any;
        export const backgroundColor: PropTypes.Requireable<string>;
        export const backgroundImage: any;
        export const backgroundImageStyle: any;
        export const containerStyle: any;
        export const statusBarProps: PropTypes.Requireable<object>;
        export const barStyle: PropTypes.Requireable<string>;
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const theme: PropTypes.Requireable<object>;
        export const linearGradientProps: PropTypes.Requireable<object>;
        export const ViewComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    }
    export namespace defaultProps {
        const placement_1: string;
        export { placement_1 as placement };
        const children_1: any[];
        export { children_1 as children };
    }
}
import React from "react";
import PropTypes from "prop-types";
import { nodeType } from "../helpers";
