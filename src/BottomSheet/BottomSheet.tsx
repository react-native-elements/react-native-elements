import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  ScrollView,
  StyleProp,
  ViewStyle,
  ModalProps,
  ScrollViewProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RneFunctionComponent } from '../helpers';

export type BottomSheetProps = {
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
export const BottomSheet: RneFunctionComponent<BottomSheetProps> = ({
  containerStyle,
  isVisible = false,
  modalProps = {},
  children,
  scrollViewProps = {},
  ...rest
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      {...modalProps}
    >
      <SafeAreaView
        style={StyleSheet.flatten([
          styles.safeAreaView,
          containerStyle && containerStyle,
        ])}
        {...rest}
      >
        <View>
          <ScrollView {...scrollViewProps}>{children}</ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'column-reverse',
  },
  listContainer: { backgroundColor: 'white' },
});

BottomSheet.displayName = 'BottomSheet';
