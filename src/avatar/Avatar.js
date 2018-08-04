import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

import Icon from '../icons/Icon';
import ViewPropTypes from '../config/ViewPropTypes';

const DEFAULT_COLORS = ['#000', '#333', '#555', '#888', '#aaa', '#ddd'];
const DEFAULT_SIZES = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150,
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  overlayContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignSelf: 'stretch',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    color: '#ffffff',
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DEFAULT_COLORS[4],
    ...Platform.select({
      ios: {
        shadowColor: DEFAULT_COLORS[0],
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 2,
        shadowOpacity: 0.5,
      },
      android: {
        elevation: 1,
      },
    }),
  },
});

export default class Avatar extends PureComponent {
  static propTypes = {
    component: PropTypes.oneOf([
      View,
      TouchableOpacity,
      TouchableHighlight,
      TouchableNativeFeedback,
      TouchableWithoutFeedback,
    ]),
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    containerStyle: PropTypes.any,
    source: Image.propTypes.source,
    avatarStyle: PropTypes.any,
    rounded: PropTypes.bool,
    title: PropTypes.string,
    titleStyle: Text.propTypes.style,
    overlayContainerStyle: PropTypes.any,
    activeOpacity: PropTypes.number,
    icon: PropTypes.object,
    iconStyle: Text.propTypes.style,
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
      PropTypes.number,
    ]),
    showEditButton: PropTypes.bool,
    onEditPress: PropTypes.func,
    editButton: PropTypes.shape({
      size: PropTypes.number,
      iconName: PropTypes.string,
      iconType: PropTypes.string,
      iconColor: PropTypes.string,
      underlayColor: PropTypes.string,
      style: ViewPropTypes.style,
    }),
    imageProps: PropTypes.object,
  };

  static defaultProps = {
    showEditButton: false,
    onEditPress: null,
    size: 'small',
    editButton: {
      size: null,
      iconName: 'mode-edit',
      iconType: 'material',
      iconColor: '#fff',
      underlayColor: DEFAULT_COLORS[0],
      style: null,
    },
    imageProps: {},
    rounded: false,
    source: {},
    onPress() {},
    activeOpacity: 1,
    title: '',
    onLongPress() {},
    containerStyle: {},
    icon: {},
    overlayContainerStyle: {},
  };

  state = {};

  renderUtils = () => {
    const {showEditButton, editButton, onEditPress, size} = this.props;
    const iconDimension =
      typeof size === 'number'
        ? size
        : DEFAULT_SIZES[size] || DEFAULT_SIZES.small;
    const width = iconDimension;
    const height = iconDimension;
    if (showEditButton) {
      const editButtonProps = {...editButton};

      const defaultEditButtonSize = (width + height) / 2 / 3;
      const editButtonSize = editButton.size || defaultEditButtonSize;
      const editButtonSizeStyle = {
        width: editButtonSize,
        height: editButtonSize,
        borderRadius: editButtonSize / 2,
      };
      const editButtonIconSize = editButtonSize * 0.8;

      return (
        <TouchableHighlight
          style={[
            styles.editButton,
            editButtonSizeStyle,
            editButtonProps.style,
          ]}
          underlayColor={editButtonProps.underlayColor}
          onPress={onEditPress}>
          <View>
            <Icon
              size={editButtonIconSize}
              name={editButtonProps.iconName}
              type={editButtonProps.iconType}
              color={editButtonProps.iconColor}
            />
          </View>
        </TouchableHighlight>
      );
    }
    return null;
  };

  renderContent = () => {
    const {
      icon,
      iconStyle,
      source,
      avatarStyle,
      rounded,
      title,
      titleStyle,
      imageProps,
      size,
    } = this.props;
    const iconDimension =
      typeof size === 'number'
        ? size
        : DEFAULT_SIZES[size] || DEFAULT_SIZES.small;
    const width = iconDimension;
    const height = iconDimension;
    const iconSize = width / 2;
    const titleSize = width / 2;
    if (source) {
      return (
        <Image
          style={[
            {width, height},
            rounded && {borderRadius: width / 2},
            avatarStyle && avatarStyle,
          ]}
          source={source}
          {...imageProps}
        />
      );
    }
    if (title) {
      return (
        <Text
          style={[
            styles.title,
            {fontSize: titleSize},
            titleStyle && titleStyle,
          ]}>
          {title}
        </Text>
      );
    }
    if (icon) {
      return (
        <Icon
          style={iconStyle && iconStyle}
          color={icon.color || 'white'}
          name={icon.name || 'user'}
          size={icon.size || iconSize}
          type={icon.type && icon.type}
        />
      );
    }
    return null;
  };

  render() {
    const {
      component,
      onPress,
      onLongPress,
      containerStyle,
      icon,
      iconStyle,
      source,
      avatarStyle,
      rounded,
      title,
      titleStyle,
      overlayContainerStyle,
      activeOpacity,
      showEditButton,
      editButton,
      onEditPress,
      imageProps,
      ...attributes
    } = this.props;
    const {size} = this.props;
    const iconDimension =
      typeof size === 'number'
        ? size
        : DEFAULT_SIZES[size] || DEFAULT_SIZES.small;
    const width = iconDimension;
    const height = iconDimension;
    let Component = onPress || onLongPress ? TouchableOpacity : View;
    if (component) {
      Component = component;
    }

    return (
      <Component
        onPress={onPress}
        onLongPress={onLongPress}
        activeOpacity={activeOpacity}
        style={[
          styles.container,
          rounded && {borderRadius: width / 2},
          containerStyle && containerStyle,
          {width, height},
        ]}
        {...attributes}>
        <View
          style={[
            styles.overlayContainer,
            rounded && {borderRadius: width / 2},
            overlayContainerStyle && overlayContainerStyle,
          ]}>
          {this.renderContent()}
        </View>
        {this.renderUtils()}
      </Component>
    );
  }
}
