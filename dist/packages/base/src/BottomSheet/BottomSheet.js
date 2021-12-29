import React from 'react';
import { Modal, View, StyleSheet, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
/** Overlay Modal that displays content from the bottom of the screen.
 * This opens from the bottom of the screen.
 * **Note:**
 * Make sure that you have completed [Step 3](getting_started.md#step-3-setup-react-native-safe-area-context) in the setup guide before using `BottomSheet`.
 */
export const BottomSheet = ({ containerStyle, isVisible = false, modalProps = {}, children, scrollViewProps = {}, ...rest }) => {
    return (<Modal animationType="slide" transparent={true} visible={isVisible} {...modalProps}>
      <SafeAreaView style={StyleSheet.flatten([
            styles.safeAreaView,
            containerStyle && containerStyle,
        ])} {...rest}>
        <View>
          <ScrollView {...scrollViewProps}>{children}</ScrollView>
        </View>
      </SafeAreaView>
    </Modal>);
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
