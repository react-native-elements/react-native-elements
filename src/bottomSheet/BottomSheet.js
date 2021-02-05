import React from 'react';
import { Modal, View, StyleSheet, ScrollView,Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withTheme } from '../config';
import PropTypes from 'prop-types';

function BottomSheet({
  containerStyle,
  isVisible,
  modalProps,
  children,
  onBackdropPress,
  ...props
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      {...modalProps}
    >
      <SafeAreaView
        style={styles.safeAreaView}
        {...props}
      >
         <Pressable
        onPress={onBackdropPress}
        style={StyleSheet.flatten([
          styles.pressable,
          containerStyle && containerStyle,
        ])}>
           <Pressable
            onPress={(e) => {
              e.stopPropagation()
            }}>
            <ScrollView>{children}</ScrollView>
            </Pressable>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({  
  safeAreaView: {
    flex: 1,
  },
  listContainer: { backgroundColor: 'white' },
  pressable:{
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: 'rgba(0,0,0,0.2)',  
  },
});

BottomSheet.defaultProps = {
  modalProps: {},
  isVisible: false,
  onBackdropPress:()=>{}
};

BottomSheet.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  modalProps: PropTypes.object,
  isVisible: PropTypes.bool,
  onBackdropPress: PropTypes.func
};

export { BottomSheet };

export default withTheme(BottomSheet, 'BottomSheet');
