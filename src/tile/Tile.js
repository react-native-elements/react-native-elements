import React, { PropTypes } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Text from '../text/Text';
import Icon from '../icons/Icon';
import FeaturedTile from './FeaturedTile';

const Tile = ({
  width,
  height,
  featured,
  onPress,
  imageSrc,
  icon,
  title,
  children,
  caption,
  activeOpacity,
  titleStyle,
  overlayContainerStyle,
  captionStyle,
  iconContainerStyle,
  imageContainerStyle,
  containerStyle,
  contentContainerStyle,
}) => {
  if (!width) {
    width = Dimensions.get('window').width;
  }

  if (!height) {
    height = width * 0.8;
  }

  const styles = StyleSheet.create({
    container: {
      width,
      height,
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'cover',
      backgroundColor: '#ffffff',
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
      alignSelf: 'center'
    }
  });

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
    };
    return (
      <FeaturedTile {...featuredProps} />
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={[
        styles.container,
        containerStyle && containerStyle,
      ]}
    >
      <Image
        source={imageSrc}
        style={[
          styles.imageContainer,
          imageContainerStyle && imageContainerStyle,
        ]}
      >
        <View
          style={[
            styles.iconContainer,
            iconContainerStyle && iconContainerStyle,
          ]}
        >
          {icon && <Icon {...icon} />}
        </View>
      </Image>
      <View
        style={[
          styles.contentContainer,
          contentContainerStyle && contentContainerStyle,
        ]}
      >
        <Text
          h4
          style={[
            styles.text,
            titleStyle && titleStyle,
          ]}
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
  caption: PropTypes.string,
  imageSrc: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  activeOpacity: PropTypes.number,
  containerStyle: PropTypes.any,
  imageContainerStyle: PropTypes.any,
  iconContainerStyle: PropTypes.any,
  overlayContainerStyle: PropTypes.any,
  titleStyle: PropTypes.any,
  captionStyle: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Tile;
