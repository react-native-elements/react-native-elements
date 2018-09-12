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

export default class DropDown extends React.PureComponent {
  keyExtractor = item =>
    typeof item === 'string' ? item : item.key || item.title;

  onPressItem = (e, item) =>
    this.props.onPressItem && this.props.onPressItem(item, item.index);

  renderItem = ({ item, index }) => (
    <ListItem
      index={index}
      onPress={this.onPressItem}
      title={typeof item === 'string' ? item : item.title}
      {...this.props.getListItemProps(item, index)}
      {...(typeof item === 'object' ? item : null)}
    />
  );

  render() {
    const {
      renderGradientComponent: GradientComponent,
      renderListComponent: ListComponent,
      renderBlurComponent: BlurView,
      containerStyle,
      contentContainerStyle,
      backgroundColor,
      closeIcon,
      visible,
      modalProps,
      onClose,
      ...props
    } = this.props;
    return (
      <Modal onRequestClose={onClose} visible={visible} {...modalProps}>
        <View style={[styles.container, containerStyle, { backgroundColor }]}>
          <ListComponent
            keyExtractor={this.keyExtractor}
            showsVerticalScrollIndicator={false}
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
    paddingBottom: 32 + (isIphoneX() ? 20 : 0),
    justifyContent: 'flex-end',
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
  renderGradientComponent: PropTypes.func, // only if no expo
  renderBlurComponent: PropTypes.func, // only if no expo
  renderListComponent: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  contentContainerStyle: ViewPropTypes.style,
  backgroundColor: PropTypes.string, // only HEX value for now
  closeIcon: nodeType,
  visible: PropTypes.bool,
  modalProps: PropTypes.object,
  onClose: PropTypes.func,
  getListItemProps: PropTypes.func,
  transparent: PropTypes.bool,
  ...FlatList.propTypes,
};

DropDown.defaultProps = {
  renderListComponent: FlatList,
  renderBlurComponent: global.Expo ? global.Expo.BlurView : View,
  renderGradientComponent: global.Expo ? global.Expo.LinearGradient : View,
  backgroundColor: '#FFFFFF',
  closeIcon: {
    name: 'close',
    size: 32,
    component: TouchableOpacity,
    containerStyle: styles.closeContainer,
  },
  getListItemProps: () => {},
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
