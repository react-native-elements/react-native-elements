import { StyleProp, ViewStyle, ModalProps, ScrollViewProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export interface BottomSheetProps {
    containerStyle?: StyleProp<ViewStyle>;
    modalProps?: ModalProps;
    backdropStyle?: StyleProp<ViewStyle>;
    onBackdropPress?(): void;
    isVisible?: boolean;
    scrollViewProps?: ScrollViewProps;
}
export declare const BottomSheet: RneFunctionComponent<BottomSheetProps>;
