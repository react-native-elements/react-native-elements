import React from 'react';
import { StyleProp, ViewStyle, ModalProps } from 'react-native';
export declare type BottomSheetProps = {
    containerStyle?: StyleProp<ViewStyle>;
    modalProps?: ModalProps;
    isVisible?: boolean;
} & typeof defaultProps;
declare const defaultProps: {
    modalProps: {};
    isVisible: boolean;
};
declare const BottomSheet: React.FunctionComponent<BottomSheetProps>;
export { BottomSheet };
declare const _default: React.FunctionComponent<Pick<BottomSheetProps, "containerStyle" | "isVisible" | "modalProps">> | React.ForwardRefExoticComponent<BottomSheetProps>;
export default _default;
