import React from 'react';
declare type OverlayProps = {
    isVisible: boolean;
    backdropStyle?: any;
    overlayStyle?: any;
    onBackdropPress?: (...args: any[]) => any;
    fullScreen?: boolean;
    ModalComponent?: JSX.Element;
};
declare const Overlay: React.SFC<OverlayProps>;
export { Overlay };
declare const _default: any;
export default _default;
