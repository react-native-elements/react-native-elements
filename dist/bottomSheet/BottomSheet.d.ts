import React from 'react';
import { StyleProp, ViewStyle, ModalProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type BottomSheetProps = {
    containerStyle?: StyleProp<ViewStyle>;
    modalProps?: ModalProps;
    isVisible?: boolean;
} & typeof defaultProps;
declare const defaultProps: {
    modalProps: {};
    isVisible: boolean;
};
declare const BottomSheet: RneFunctionComponent<BottomSheetProps>;
export { BottomSheet };
declare const _default: React.FunctionComponent<Pick<{
    containerStyle?: StyleProp<ViewStyle>;
    modalProps?: ModalProps;
    isVisible?: boolean;
} & {
    modalProps: {};
    isVisible: boolean;
} & Partial<import("../config").ThemeProps<BottomSheetProps>>, "containerStyle" | "isVisible" | "modalProps">> | React.ForwardRefExoticComponent<{
    containerStyle?: StyleProp<ViewStyle>;
    modalProps?: ModalProps;
    isVisible?: boolean;
} & {
    modalProps: {};
    isVisible: boolean;
} & Partial<import("../config").ThemeProps<BottomSheetProps>>>;
export default _default;
