import React from 'react';
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
  Animated,
} from 'react-native';

import { withTheme, ViewPropTypes } from '../config';
import { renderNode, nodeType } from '../helpers';

import Icon from '../icons/Icon';

const DEFAULT_COLORS = ['#000', '#333', '#555', '#888', '#aaa', '#ddd'];
const DEFAULT_SIZES = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150,
};

const Avatar = ({
  onPress,
  onLongPress,
  component: Component = onPress || onLongPress ? TouchableOpacity : View,
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
  showEditButton,
  editButton,
  onEditPress,
  imageProps,
  placeholderStyle,
  renderPlaceholderContent,
  ImageComponent,
  ...attributes
}) => {
  const width =
    typeof size === 'number'
      ? size
      : DEFAULT_SIZES[size] || DEFAULT_SIZES.small;
  const height = width;
  const titleSize = width / 2;
  const iconSize = width / 2;
  const editButtonSize = editButton.size || (width + height) / 2 / 3;

  const Utils = showEditButton && (
    <TouchableHighlight
      style={[
        styles.editButton,
        {
          width: editButtonSize,
          height: editButtonSize,
          borderRadius: editButtonSize / 2,
        },
        editButton.style,
      ]}
      underlayColor={editButton.underlayColor}
      onPress={onEditPress}
    >
      <View>
        <Icon
          size={editButtonSize * 0.8}
          name={editButton.iconName}
          type={editButton.iconType}
          color={editButton.iconColor}
        />
      </View>
    </TouchableHighlight>
  );

  const PlaceholderContent =
    (renderPlaceholderContent &&
      renderNode(undefined, renderPlaceholderContent)) ||
    (title && (
      <Text style={[styles.title, { fontSize: titleSize }, titleStyle]}>
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

  return (
    <Component
      onPress={onPress}
      onLongPress={onLongPress}
      style={[
        styles.container,
        { height, width },
        rounded && { borderRadius: width / 2, overflow: 'hidden' },
        containerStyle,
      ]}
      {...attributes}
    >
      <FadeInImage
        placeholderStyle={placeholderStyle}
        PlaceholderContent={PlaceholderContent}
        containerStyle={overlayContainerStyle}
        source={source}
        {...imageProps}
        style={[imageProps && imageProps.style, avatarStyle]}
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
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.5,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  placeholderContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BDBDBD',
  },
});

Avatar.propTypes = {
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
  placeholderStyle: ViewPropTypes.style,
  renderPlaceholderContent: nodeType,
  imageProps: PropTypes.object,
  ImageComponent: PropTypes.func,
};

Avatar.defaultProps = {
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
  ImageComponent: Image,
};

class FadeInImage extends React.PureComponent {
  placeholderContainerOpacity = new Animated.Value(1);

  onLoadEnd = () => {
    /* Images finish loading in the same frame for some reason,
      the images will fade in separately with staggerNonce */
    const minimumWait = 100;
    const staggerNonce = 200 * Math.random();
    setTimeout(
      () =>
        Animated.timing(this.placeholderContainerOpacity, {
          toValue: 0,
          duration: 350,
          useNativeDriver: true,
        }).start(),
      minimumWait + staggerNonce
    );
  };

  render() {
    const {
      placeholderStyle,
      PlaceholderContent,
      containerStyle,
      style,
      ImageComponent,
      ...attributes
    } = this.props;

    return Platform.OS === 'ios' ? (
      <View style={[styles.overlayContainer, containerStyle]}>
        <ImageComponent
          {...attributes}
          onLoadEnd={this.onLoadEnd}
          style={[styles.avatar, style]}
        />
        <Animated.View
          style={[
            styles.placeholderContainer,
            { opacity: this.placeholderContainerOpacity },
          ]}
        >
          <View style={[style, styles.placeholder, placeholderStyle]}>
            {PlaceholderContent}
          </View>
        </Animated.View>
      </View>
    ) : (
      <View style={[styles.overlayContainer, containerStyle]}>
        <View style={styles.placeholderContainer}>
          <View style={[style, styles.placeholder, placeholderStyle]}>
            {PlaceholderContent}
          </View>
        </View>
        <Image {...attributes} style={[styles.avatar, style]} />
      </View>
    );
  }
}

export default withTheme(Avatar, 'Avatar');
