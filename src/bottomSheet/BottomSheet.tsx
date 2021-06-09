import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  StyleProp,
  ViewStyle,
  ModalProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';

export type BottomSheetProps = {
  containerStyle?: StyleProp<ViewStyle>;
  modalProps?: ModalProps;
  backdropStyle?: StyleProp<ViewStyle>;
  onBackdropPress?(): void;
  isVisible?: boolean;
};

const BottomSheet: RneFunctionComponent<BottomSheetProps> = ({
  containerStyle,
  backdropStyle,
  isVisible = false,
  onBackdropPress,
  modalProps = {},
  children,
  ...props
}) => {
  return (
    <Modal
      animationType="slide"
      onRequestClose={onBackdropPress}
      transparent={true}
      visible={isVisible}
      {...modalProps}
    >
      <TouchableWithoutFeedback
        onPress={onBackdropPress}
        testID="RNE__Overlay__backdrop"
      >
        <View
          testID="backdrop"
          style={StyleSheet.flatten([styles.backdrop, backdropStyle])}
        />
      </TouchableWithoutFeedback>

      <SafeAreaView
        style={StyleSheet.flatten([
          styles.safeAreaView,
          containerStyle && containerStyle,
        ])}
        {...props}
      >
        <View>
          <ScrollView>{children}</ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .4)',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'column-reverse',
  },
  listContainer: { backgroundColor: 'white' },
});

export { BottomSheet };
export default withTheme(BottomSheet, 'BottomSheet');
