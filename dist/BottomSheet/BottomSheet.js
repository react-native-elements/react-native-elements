var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Modal, View, StyleSheet, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
/** Overlay Modal that displays content from the bottom of the screen.
 * This opens from the bottom of the screen.
 * **Note:**
 * Make sure that you have completed [Step 3](getting_started.md#step-3-setup-react-native-safe-area-context) in the setup guide before using `BottomSheet`.
 */
export const BottomSheet = (_a) => {
    var { containerStyle, isVisible = false, modalProps = {}, children, scrollViewProps = {} } = _a, rest = __rest(_a, ["containerStyle", "isVisible", "modalProps", "children", "scrollViewProps"]);
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
