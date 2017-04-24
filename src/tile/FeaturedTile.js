import React, { PropTypes } from 'react';
import {
  TouchableOpacity,
  Text as NativeText,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Text from '../text/Text';
import Icon from '../icons/Icon';

const FeaturedTile = props => {
  const {
    title,
    icon,
    caption,
    imageSrc,
    containerStyle,
    imageContainerStyle,
    overlayContainerStyle,
    iconContainerStyle,
    titleStyle,
    captionStyle,
    ...attributes
  } = props;

  let { width, height } = props;

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
      alignSelf: 'center',
    },
  });

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle && containerStyle]}
      {...attributes}
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
          <Text h4 style={[styles.text, titleStyle && titleStyle]}>
            {title}
          </Text>
          <Text style={[styles.text, captionStyle && captionStyle]}>
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
  imageSrc: Image.propTypes.source.isRequired,
  onPress: PropTypes.func,
  containerStyle: View.propTypes.style,
  iconContainerStyle: View.propTypes.style,
  imageContainerStyle: View.propTypes.style,
  overlayContainerStyle: View.propTypes.style,
  titleStyle: NativeText.propTypes.style,
  captionStyle: NativeText.propTypes.style,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default FeaturedTile;
