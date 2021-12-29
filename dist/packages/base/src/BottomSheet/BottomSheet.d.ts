import { StyleProp, ViewStyle, ModalProps, ScrollViewProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type BottomSheetProps = {
    /** Style of the bottom sheet's container. Use this to change the color of the underlay. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Additional props handed to the `Modal`. */
    modalProps?: ModalProps;
    /** Is the modal component shown. */
    isVisible?: boolean;
    /** Used to add props to Scroll view. */
    scrollViewProps?: ScrollViewProps;
};
/** Overlay Modal that displays content from the bottom of the screen.
 * This opens from the bottom of the screen.
 * **Note:**
 * Make sure that you have completed [Step 3](getting_started.md#step-3-setup-react-native-safe-area-context) in the setup guide before using `BottomSheet`.
 */
export declare const BottomSheet: RneFunctionComponent<BottomSheetProps>;
