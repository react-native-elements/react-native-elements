import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image as RNImage,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

import { withTheme, ViewPropTypes } from '../config';
import { renderNode, nodeType } from '../helpers';

import Icon from '../icons/Icon';
import Image from '../image/Image';

const avatarSizes = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150,
};

const defaultAccessory = {
  name: 'mode-edit',
  type: 'material',
  color: '#fff',
  underlayColor: '#000',
};

const Avatar = ({
  onPress,
  onLongPress,
  Component = onPress || onLongPress ? TouchableOpacity : View,
  containerStyle,
  icon,
  iconStyle,
  source,
  size,
  avatarStyle,
  rounded,
  title,
  titleStyle,
  overlayContainerStyle,
  showAccessory,
  accessory: passedAccessory,
  onAccessoryPress,
  imageProps,
  placeholderStyle,
  renderPlaceholderContent,
  ImageComponent,
  ...attributes
}) => {
  const width =
    typeof size === 'number' ? size : avatarSizes[size] || avatarSizes.small;
  const height = width;
  const titleSize = width / 2;
  const iconSize = width / 2;

  const accessory = {
    ...defaultAccessory,
    ...passedAccessory,
  };
  const accessorySize = accessory.size || (width + height) / 2 / 3;

  const Utils = showAccessory && (
    <TouchableHighlight
      style={StyleSheet.flatten([
        styles.accessory,
        {
          width: accessorySize,
          height: accessorySize,
          borderRadius: accessorySize / 2,
        },
        accessory.style,
      ])}
      underlayColor={accessory.underlayColor}
      onPress={onAccessoryPress}
    >
      <View>
        {'source' in accessory ? (
          <Image
            style={{
              width: accessorySize,
              height: accessorySize,
              borderRadius: accessorySize / 2,
            }}
            {...accessory}
          />
        ) : (
          <Icon size={accessorySize * 0.8} {...accessory} />
        )}
      </View>
    </TouchableHighlight>
  );

  const PlaceholderContent =
    (renderPlaceholderContent &&
      renderNode(undefined, renderPlaceholderContent)) ||
    (title && (
      <Text
        style={StyleSheet.flatten([
          styles.title,
          { fontSize: titleSize },
          titleStyle,
        ])}
      >
        {title}
      </Text>
    )) ||
    (icon && (
      <Icon
        style={iconStyle && iconStyle}
        color={icon.color || 'white'}
        name={icon.name || 'user'}
        size={icon.size || iconSize}
        type={icon.type && icon.type}
      />
    ));

  // Remove placeholder styling if we're not using image
  const hidePlaceholder = !source;

  return (
    <Component
      onPress={onPress}
      onLongPress={onLongPress}
      style={StyleSheet.flatten([
        styles.container,
        { height, width },
        rounded && { borderRadius: width / 2 },
        containerStyle,
      ])}
      {...attributes}
    >
      <Image
        placeholderStyle={StyleSheet.flatten([
          placeholderStyle,
          hidePlaceholder && { backgroundColor: 'transparent' },
        ])}
        PlaceholderContent={PlaceholderContent}
        containerStyle={StyleSheet.flatten([
          styles.overlayContainer,
          rounded && { borderRadius: width / 2, overflow: 'hidden' },
          overlayContainerStyle,
        ])}
        source={source}
        {...imageProps}
        style={StyleSheet.flatten([
          styles.avatar,
          imageProps && imageProps.style,
          avatarStyle,
        ])}
        ImageComponent={ImageComponent}
      />
      {Utils}
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  avatar: {
    flex: 1,
    width: null,
    height: null,
  },
  overlayContainer: {
    flex: 1,
  },
  title: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  accessory: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaa',
    ...Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.5,
      },
    }),
  },
});

Avatar.propTypes = {
  Component: PropTypes.oneOf([
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
  ]),
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  source: RNImage.propTypes.source,
  avatarStyle: ViewPropTypes.style,
  rounded: PropTypes.bool,
  title: PropTypes.string,
  titleStyle: Text.propTypes.style,
  overlayContainerStyle: ViewPropTypes.style,
  activeOpacity: PropTypes.number,
  icon: PropTypes.object,
  iconStyle: Text.propTypes.style,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    PropTypes.number,
  ]),
  showAccessory: PropTypes.bool,
  onAccessoryPress: PropTypes.func,
  accessory: PropTypes.shape({
    size: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    underlayColor: PropTypes.string,
    style: ViewPropTypes.style,
  }),
  placeholderStyle: ViewPropTypes.style,
  renderPlaceholderContent: nodeType,
  imageProps: PropTypes.object,
  ImageComponent: PropTypes.elementType,
};

Avatar.defaultProps = {
  showAccessory: false,
  onAccessoryPress: null,
  size: 'small',
  accessory: defaultAccessory,
  ImageComponent: RNImage,
};

export { Avatar };
export default withTheme(Avatar, 'Avatar');
