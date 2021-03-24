import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  ViewStyle,
  StyleProp,
  TextStyle,
  ImageProps,
  ImageURISource,
} from 'react-native';
import { withTheme } from '../config';
import Image from '../image/Image';
import Text from '../text/Text';
import Icon, { IconObject, IconProps } from '../icons/Icon';
import FeaturedTile from './FeaturedTile';
import { RneFunctionComponent } from '../helpers';

export type TileProps = TouchableOpacityProps &
  TouchableNativeFeedbackProps & {
    title?: string;
    icon?: IconObject & IconProps;
    caption?: React.ReactNode;
    imageSrc?: ImageURISource | string | number;
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

const Tile: RneFunctionComponent<TileProps> = (props) => {
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
    ImageComponent = Image,
    imageProps = {},
    ...attributes
  } = props;

  const {
    width = Dimensions.get('window').width,
    height = width * 0.8,
  } = props;

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
    return <FeaturedTile {...(featuredProps as TileProps)} />;
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
        {...(imageProps as ImageProps)}
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
    </TouchableOpacity>
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

export { Tile };
export default withTheme(Tile, 'Tile');
