import { ViewStyle, ActivityIndicatorProps, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export interface DialogLoadingProps {
    loadingStyle?: StyleProp<ViewStyle>;
    loadingProps?: ActivityIndicatorProps;
}
export declare const DialogLoading: RneFunctionComponent<DialogLoadingProps>;
