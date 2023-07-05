import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { OverlayProps } from '../Overlay';
import { RneFunctionComponent } from '../helpers';
export interface DialogProps extends Partial<Omit<OverlayProps, 'fullScreen'>> {
    children?: ReactNode;
    overlayStyle?: StyleProp<ViewStyle>;
}
export declare const DialogBase: RneFunctionComponent<DialogProps>;
