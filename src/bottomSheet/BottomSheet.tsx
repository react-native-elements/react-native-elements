import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
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
  isVisible?: boolean;
} & typeof defaultProps;

const defaultProps = {
  modalProps: {},
  isVisible: false,
};

const BottomSheet: RneFunctionComponent<BottomSheetProps> = ({
  containerStyle,
  isVisible,
  modalProps,
  children,
  ...props
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
  safeAreaView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'column-reverse',
  },
  listContainer: { backgroundColor: 'white' },
});

BottomSheet.defaultProps = defaultProps;

export { BottomSheet };
export default withTheme(BottomSheet, 'BottomSheet');
