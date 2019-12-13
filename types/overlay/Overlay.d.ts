declare var _default: any;
export default _default;
export function Overlay({ children, backdropStyle, overlayStyle, onBackdropPress, fullScreen, ModalComponent, isVisible, ...rest }: {
    [x: string]: any;
    children: any;
    backdropStyle: any;
    overlayStyle: any;
    onBackdropPress: any;
    fullScreen: any;
    ModalComponent: any;
    isVisible: any;
}): JSX.Element;
export namespace Overlay {
    export namespace propTypes {
        export const children: PropTypes.Validator<PropTypes.ReactElementLike>;
        export const isVisible: PropTypes.Validator<boolean>;
        export const backdropStyle: any;
        export const overlayStyle: any;
        export const onBackdropPress: PropTypes.Requireable<(...args: any[]) => any>;
        export const fullScreen: PropTypes.Requireable<boolean>;
        export const ModalComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    }
    export namespace defaultProps {
        const fullScreen_1: boolean;
        export { fullScreen_1 as fullScreen };
        export function onBackdropPress_1(): any;
        export { onBackdropPress_1 as onBackdropPress };
        export { Modal as ModalComponent };
    }
}
import PropTypes from "prop-types";
import { Modal } from "react-native";
