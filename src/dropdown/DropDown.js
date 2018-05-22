import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  FlatList,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';

import { getStatusBarHeight, ViewPropTypes } from '../config';

const { height: HEIGHT } = Dimensions.get('window');

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
      animationType,
      modalProps,
      onClose,
      ...props
    } = this.props;
    return (
      <Modal
        onRequestClose={onClose}
        visible={visible}
        animationType={animationType}
        {...modalProps}
      >
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
    );
  }
}

DropDown.propTypes = {
  GradientComponent: PropTypes.func, // only if no expo
  ListComponent: PropTypes.element,
  containerStyle: ViewPropTypes.style,
  contentContainerStyle: ViewPropTypes.style,
  backgroundColor: PropTypes.string, // only HEX value for now
  closeIcon: PropTypes.object,
  visible: PropTypes.bool,
  modalProps: PropTypes.object,
  animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
  onClose: PropTypes.func,
  // ... all the FlatList props
};

DropDown.defaultProps = {
  backgroundColor: '#FFFFFF',
  ListComponent: FlatList,
  animationType: 'fade',
  GradientComponent: global.Expo ? global.Expo.LinearGradient : View,
};

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
});

const hexToTransparentRGB = (hex, alpha = 0) => {
  const rgb = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16));
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha}))`;
};
