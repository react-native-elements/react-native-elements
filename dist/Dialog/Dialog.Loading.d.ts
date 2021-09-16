import { ViewStyle, ActivityIndicatorProps, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type DialogLoadingProps = {
    /** Add additional styling for loading component. */
    loadingStyle?: StyleProp<ViewStyle>;
    /** Add additional props for ActivityIndicator component */
    loadingProps?: ActivityIndicatorProps;
};
/** `DialogLoader` allows adding loader to the Dialog. Loader is simply ActivityIndicator. */
export declare const DialogLoading: RneFunctionComponent<DialogLoadingProps>;
