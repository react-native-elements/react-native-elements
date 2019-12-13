declare var _default: any;
export default _default;
export class Tooltip extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    state: {
        isVisible: boolean;
        yOffset: number;
        xOffset: number;
        elementWidth: number;
        elementHeight: number;
    };
    renderedElement: any;
    toggleTooltip: () => void;
    wrapWithPress: (toggleOnPress: any, children: any) => any;
    getTooltipStyle: () => any;
    renderPointer: (tooltipY: any) => JSX.Element;
    renderContent: (withTooltip: any) => any;
    componentDidMount(): void;
    getElementPosition: () => void;
    render(): JSX.Element;
}
export namespace Tooltip {
    export namespace propTypes {
        export const children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        export const withPointer: PropTypes.Requireable<boolean>;
        export const popover: PropTypes.Requireable<PropTypes.ReactElementLike>;
        export const toggleOnPress: PropTypes.Requireable<boolean>;
        export const height: PropTypes.Requireable<number>;
        export const width: PropTypes.Requireable<React.ReactText>;
        export const containerStyle: any;
        export const pointerColor: PropTypes.Requireable<string>;
        export const onClose: PropTypes.Requireable<(...args: any[]) => any>;
        export const onOpen: PropTypes.Requireable<(...args: any[]) => any>;
        export const overlayColor: PropTypes.Requireable<string>;
        export const withOverlay: PropTypes.Requireable<boolean>;
        export const backgroundColor: PropTypes.Requireable<string>;
        export const highlightColor: PropTypes.Requireable<string>;
        export const skipAndroidStatusBar: PropTypes.Requireable<boolean>;
        export const ModalComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    }
    export namespace defaultProps {
        const withOverlay_1: boolean;
        export { withOverlay_1 as withOverlay };
        const overlayColor_1: string;
        export { overlayColor_1 as overlayColor };
        const highlightColor_1: string;
        export { highlightColor_1 as highlightColor };
        const withPointer_1: boolean;
        export { withPointer_1 as withPointer };
        const toggleOnPress_1: boolean;
        export { toggleOnPress_1 as toggleOnPress };
        const height_1: number;
        export { height_1 as height };
        const width_1: number;
        export { width_1 as width };
        const containerStyle_1: {};
        export { containerStyle_1 as containerStyle };
        const backgroundColor_1: string;
        export { backgroundColor_1 as backgroundColor };
        export function onClose_1(): void;
        export { onClose_1 as onClose };
        export function onOpen_1(): void;
        export { onOpen_1 as onOpen };
        const skipAndroidStatusBar_1: boolean;
        export { skipAndroidStatusBar_1 as skipAndroidStatusBar };
        export { Modal as ModalComponent };
    }
}
import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-native";
