import React from 'react'
import {
  StyleSheet,
  FlatList,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo'

import { getStatusBarHeight } from '../config' 

const { height: HEIGHT } = Dimensions.get('window')  

export default class DropDown extends React.PureComponent {
  render() {
    const {
      GradientComponent,
      ListComponent,
      containerStyle,
      contentContainerStyle,
      backgroundColor,
      closeIcon,
      visible,
      modalProps: { animationType = 'fade', ...modalProps },
      onClose,
      ...props
    } = this.props
    return (
      <Modal
        onRequestClose={onClose}
        visible={visible}
        animationType={animationType}
        {...modalProps}>
        <View style={[styles.container, containerStyle, { backgroundColor }]}>
          <ListComponent
            showsVerticalScrollIndicator={false}
            {...props}
            contentContainerStyle={[
              styles.listContainer,
              contentContainerStyle,
            ]}
          />
          <GradientComponent
            pointerEvents="none"
            style={styles.gradient}
            colors={[
              hexToTransparentRGB(backgroundColor),
              hexToTransparentRGB(backgroundColor, 0.9),
              hexToTransparentRGB(backgroundColor, 0.95),
            ]}
            locations={[0.8, 0.9, 1]}
          />
          <Icon
            name="close"
            size={32}
            onPress={onClose}
            component={TouchableOpacity}
            {...closeIcon}
            containerStyle={[
              styles.closeContainer,
              closeIcon && closeIcon.containerStyle,
            ]}
          />
        </View>
      </Modal>
    )
  }
}

DropDown.defaultProps = {
  backgroundColor: '#FFFFFF',
  ListComponent: FlatList,
  modalProps: { animationType: 'fade' },
  GradientComponent: global.Expo
  ? global.Expo.LinearGradient
  : View
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  listContainer: {
    paddingTop: HEIGHT / 4,
    paddingBottom: 32 + 32,
    justifyContent: 'center',
  },
  listItemContainer: {
    backgroundColor: 'transparent',
  },
  closeContainer: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
  },
})

const hexToTransparentRGB = (hex, alpha = 0) => {
  const rgb = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16))
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha}))`
}
