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
import renderNode from '../helpers/renderNode';
import nodeType from '../helpers/nodeType';
import Icon from '../icons/Icon';
import ListItem from '../list/ListItem';
import { getStatusBarHeight, ViewPropTypes } from '../config';
import { isIphoneX } from '../config/statusBar';

const { height: HEIGHT } = Dimensions.get('window');
const closeIconDefaultProps = {
  name: 'close',
  size: 32,
  component: TouchableOpacity,
};

export default class DropDown extends React.PureComponent {
  keyExtractor = ({ title }) => title;

  renderItem = ({ item }) => (
    <ListItem
      onPress={this.props.onPressItem}
      contentContainerStyle={{ flex: 0 }}
      {...item}
    />
  );

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
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
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
              hexToTransparentRGB(backgroundColor, 0.92),
              hexToTransparentRGB(backgroundColor, 0.95),
            ]}
            locations={[0.92, 0.95, 1]}
          />
          {renderNode(Icon, closeIcon, {
            ...closeIconDefaultProps,
            onPress: onClose,
          })}
        </View>
      </Modal>
    );
  }
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
    paddingBottom: 32 + (isIphoneX() ? 13 : 0),
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexGrow: 1,
  },
  listItemContainer: {
    backgroundColor: 'transparent',
  },
  closeContainer: {
    position: 'absolute',
    bottom: 8 + (isIphoneX() ? 8 : 0),
    alignSelf: 'center',
  },
});

DropDown.propTypes = {
  GradientComponent: PropTypes.func, // only if no expo
  ListComponent: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  contentContainerStyle: ViewPropTypes.style,
  backgroundColor: PropTypes.string, // only HEX value for now
  closeIcon: nodeType,
  visible: PropTypes.bool,
  modalProps: PropTypes.object,
  animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
  onClose: PropTypes.func,
  ...FlatList.propTypes,
};

DropDown.defaultProps = {
  backgroundColor: '#FFFFFF',
  ListComponent: FlatList,
  animationType: 'fade',
  GradientComponent: global.Expo ? global.Expo.LinearGradient : View,
  closeIcon: {
    name: 'close',
    size: 32,
    containerStyle: styles.closeContainer,
  },
};

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
