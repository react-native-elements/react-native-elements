import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  PressableProps,
  ViewStyle,
  StyleProp,
  TextStyle,
  ImageProps,
  ImageURISource,
  ImageSourcePropType,
} from 'react-native';
import Image from '../Image';
import Text from '../Text';
import Icon, { IconObject, IconProps } from '../Icon';
import { ThemedFeaturedTile } from './components/FeaturedTile';
import { RneFunctionComponent } from '../helpers';
import Color from 'color';

export type TileProps = PressableProps & {
  title?: string;
  icon?: IconObject & IconProps;
  caption?: React.ReactNode;
  imageSrc?: ImageSourcePropType | string | number;
  activeOpacity?: number;
  containerStyle?: StyleProp<ViewStyle>;
  imageContainerStyle?: StyleProp<ViewStyle>;
  iconContainerStyle?: StyleProp<ViewStyle>;
  overlayContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  captionStyle?: StyleProp<TextStyle>;
  width?: number;
  height?: number;
  featured?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
  titleNumberOfLines?: number;
  imageProps?: Partial<ImageProps>;
  ImageComponent?: typeof React.Component;
};

export const Tile: RneFunctionComponent<TileProps> = ({
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
  ImageComponent = Image,
  imageProps = {},
  width = Dimensions.get('window').width,
  height = width * 0.8,
  theme,
  ...attributes
}) => {
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
    return <ThemedFeaturedTile {...(featuredProps as TileProps)} />;
  }

  return (
    <Pressable
      {...attributes}
      onPress={onPress}
      android_ripple={{
        color: Color(theme?.colors?.primary)
          .alpha(activeOpacity)
          .rgb()
          .toString(),
        borderless: false,
        radius: -5,
      }}
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
        source={imageSrc as ImageURISource}
        containerStyle={StyleSheet.flatten([
          styles.imageContainer,
          imageContainerStyle && imageContainerStyle,
        ])}
        style={{
          ...StyleSheet.absoluteFillObject,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        {...(imageProps as Partial<ImageProps>)}
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
          h4={!titleStyle || !('fontSize' in titleStyle)}
          style={StyleSheet.flatten([styles.text, titleStyle && titleStyle])}
          numberOfLines={titleNumberOfLines}
        >
          {title}
        </Text>
        {children}
      </View>
    </Pressable>
  );
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

Tile.displayName = 'Tile';
