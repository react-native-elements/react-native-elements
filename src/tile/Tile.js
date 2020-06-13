import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import { withTheme } from '../config';
import { ImageSourceType } from '../helpers';

import Image from '../image/Image';
import Text from '../text/Text';
import Icon from '../icons/Icon';
import FeaturedTile from './FeaturedTile';

const Tile = (props) => {
  const {
    featured,
    imageSrc,
    icon,
    title,
    children,
    caption,
    titleStyle,
    onPress,
    activeOpacity,
    overlayContainerStyle,
    captionStyle,
    iconContainerStyle,
    imageContainerStyle,
    containerStyle,
    contentContainerStyle,
    titleNumberOfLines,
    ImageComponent,
    imageProps,
    ...attributes
  } = props;

  const { width, height = width * 0.8 } = props;

  if (featured) {
    const featuredProps = {
      title,
      icon,
      caption,
      imageSrc,
      onPress,
      activeOpacity,
      containerStyle,
      imageContainerStyle,
      overlayContainerStyle,
      titleStyle,
      captionStyle,
      width,
      height,
      imageProps,
      ImageComponent,
    };
    return <FeaturedTile {...featuredProps} />;
  }

  return (
    <TouchableOpacity
      {...attributes}
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={StyleSheet.flatten([
        {
          width,
          height,
        },
        containerStyle && containerStyle,
      ])}
    >
      <ImageComponent
        resizeMode="cover"
        source={imageSrc}
        containerStyle={StyleSheet.flatten([
          styles.imageContainer,
          imageContainerStyle && imageContainerStyle,
        ])}
        style={{
          ...StyleSheet.absoluteFillObject,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        {...imageProps}
      >
        <View
          style={StyleSheet.flatten([
            styles.iconContainer,
            iconContainerStyle && iconContainerStyle,
          ])}
        >
          {icon && <Icon {...icon} />}
        </View>
      </ImageComponent>

      <View
        style={StyleSheet.flatten([
          styles.contentContainer,
          contentContainerStyle && contentContainerStyle,
        ])}
      >
        <Text
          testID="tileTitle"
          h4={!titleStyle || !titleStyle.fontSize}
          style={StyleSheet.flatten([styles.text, titleStyle && titleStyle])}
          numberOfLines={titleNumberOfLines}
        >
          {title}
        </Text>
        {children}
      </View>
    </TouchableOpacity>
  );
};

Tile.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  caption: PropTypes.node,
  imageSrc: ImageSourceType,
  onPress: PropTypes.func,
  activeOpacity: PropTypes.number,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  imageContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  overlayContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  captionStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  width: PropTypes.number,
  height: PropTypes.number,
  featured: PropTypes.bool,
  children: PropTypes.node,
  contentContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  titleNumberOfLines: PropTypes.number,
  imageProps: PropTypes.object,
  ImageComponent: PropTypes.elementType,
};

Tile.defaultProps = {
  width: Dimensions.get('window').width,
  ImageComponent: Image,
  imageProps: {},
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 2,
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: 5,
  },
  contentContainer: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export { Tile };
export default withTheme(Tile, 'Tile');
