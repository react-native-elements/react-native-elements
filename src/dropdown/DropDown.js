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

const { height: HEIGHT } = Dimensions.get('window');
const CLOSE_BOTTOM = 8 + (false ? 20 : 0);

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
      transparent,
      blurProps,
      contentPosition = transparent ? 'center' : 'bottom',
      ...props
    } = this.props;
    return (
      <Modal
        transparent={transparent}
        onRequestClose={onClose}
        visible={visible}
        {...modalProps}
      >
        <View
          style={[
            styles.container,
            !transparent && { backgroundColor },
            containerStyle,
          ]}
        >
          {transparent && (
            <BlurView
              {...blurProps}
              tint="dark"
              intensity={100}
              style={StyleSheet.absoluteFillObject}
            />
          )}
          <ListComponent
            keyExtractor={this.keyExtractor}
            showsVerticalScrollIndicator={false}
            renderItem={this.renderItem}
            {...props}
            contentContainerStyle={[
              styles.contentContainer,
              contentPosition === 'center' && styles.centerContentContainer,
              contentPosition === 'bottom' && styles.bottomContentContainer,
              contentContainerStyle,
            ]}
          />
          {!transparent && (
            <GradientComponent
              pointerEvents="none"
              style={StyleSheet.absoluteFillObject}
              colors={[
                hexToTransparentRGB(backgroundColor),
                hexToTransparentRGB(backgroundColor, 0.8),
                hexToTransparentRGB(backgroundColor, 0.9),
              ]}
              locations={[0.8, 0.9, 1]}
            />
          )}
          {renderNode(Icon, closeIcon, {
            type: 'ionicon',
            size: 52,
            component: TouchableOpacity,
            containerStyle: styles.closeContainer,
            color: transparent ? 'white' : 'black',
            name: transparent ? 'ios-close-circle' : 'ios-close',
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
  bottomContentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingTop: HEIGHT / 4,
  },
  centerContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    paddingBottom: 16,
  },
  closeContainer: {
    position: 'absolute',
    bottom: CLOSE_BOTTOM,
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
  blurProps: PropTypes.object,
  contentPosition: PropTypes.oneOf(['top', 'center', 'bottom']),
  ...FlatList.propTypes,
};

DropDown.defaultProps = {
  renderListComponent: FlatList,
  renderBlurComponent: global.Expo ? global.Expo.BlurView : View,
  renderGradientComponent: global.Expo ? global.Expo.LinearGradient : View,
  backgroundColor: '#FFFFFF',
  closeIcon: true,
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
