import React, { PropTypes } from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Text from '../text/Text';
import Icon from '../icons/Icon';

const FeaturedTile = ({
  title,
  icon,
  caption,
  imageSrc,
  onPress,
  activeOpacity,
  containerStyle,
  imageContainerStyle,
  overlayContainerStyle,
  iconContainerStyle,
  titleStyle,
  captionStyle,
  width,
  height,
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
      width,
      height,
    },
    overlayContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      alignSelf: 'stretch',
      justifyContent: 'center',
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 45,
      paddingBottom: 40,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    text: {
      color: '#ffffff',
      backgroundColor: 'rgba(0,0,0,0)',
      marginBottom: 15,
      textAlign: 'center',
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    }
  });

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
            styles.overlayContainer,
            overlayContainerStyle && overlayContainerStyle,
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
          <Text
            h4
            style={[
              styles.text,
              titleStyle && titleStyle,
            ]}
          >
            {title}
          </Text>
          <Text
            style={[
              styles.text,
              captionStyle && captionStyle,
            ]}
          >
            {caption}
          </Text>
        </View>
      </Image>
    </TouchableOpacity>
  );
};

FeaturedTile.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  caption: PropTypes.string,
  imageSrc: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  activeOpacity: PropTypes.number,
  containerStyle: PropTypes.any,
  iconContainerStyle: PropTypes.any,
  imageContainerStyle: PropTypes.any,
  overlayContainerStyle: PropTypes.any,
  titleStyle: PropTypes.any,
  captionStyle: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default FeaturedTile;
