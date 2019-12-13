import * as React from 'react';
import { Modal } from 'react-native';
declare type TooltipProps = {
    withPointer?: boolean;
    popover?: JSX.Element;
    toggleOnPress?: boolean;
    height?: number;
    width?: number | string;
    containerStyle?: any;
    pointerColor?: string;
    onClose?: (...args: any[]) => any;
    onOpen?: (...args: any[]) => any;
    overlayColor?: string;
    withOverlay?: boolean;
    backgroundColor?: string;
    highlightColor?: string;
    skipAndroidStatusBar?: boolean;
    ModalComponent?: React.ReactNode;
};
declare type TooltipState = {
    isVisible: boolean;
    yOffset: number;
    xOffset: number;
    elementWidth: number;
    elementHeight: number;
};
declare class Tooltip extends React.PureComponent<TooltipProps, TooltipState> {
    state: {
        isVisible: boolean;
        yOffset: number;
        xOffset: number;
        elementWidth: number;
        elementHeight: number;
    };
    static defaultProps: {
        withOverlay: boolean;
        overlayColor: string;
        highlightColor: string;
        withPointer: boolean;
        toggleOnPress: boolean;
        height: number;
        width: number;
        containerStyle: {};
        backgroundColor: string;
        onClose: () => void;
        onOpen: () => void;
        skipAndroidStatusBar: boolean;
        ModalComponent: typeof Modal;
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
export { Tooltip };
declare const _default: any;
export default _default;
