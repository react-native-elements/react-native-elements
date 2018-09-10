import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

import Utils from './Utils';
import PlaceholderContent from './PlaceholderContent';
import ViewPropTypes from '../config/ViewPropTypes';

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
        ? size : DEFAULT_SIZES[size] || DEFAULT_SIZES.small;
  const height = width
  const titleSize = width / 2;
  const iconSize = width / 2;

  const placeholderContent = (
    <PlaceholderContent
      renderPlaceholderContent={renderPlaceholderContent}
      title={title}
      titleSize={titleSize}
      titleStyle={titleStyle}
      icon={icon}
      iconSize={iconSize}
      iconStyle={iconStyle}
    />
  );
    

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
        PlaceholderContent={placeholderContent}
        containerStyle={overlayContainerStyle}
        source={source}
        {...imageProps}
        style={[
          imageProps && imageProps.style,
          avatarStyle,
        ]}
        ImageComponent={ImageComponent}
      />
      {showEditButton && (
        <Utils
          width={width}
          height={height}
          editButton={editButton}
          onEditPress={onEditPress}
        />
      )}
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
  overlayContainerStyle: PropTypes.any,
  activeOpacity: PropTypes.number,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    PropTypes.number,
  ]),
  showEditButton: PropTypes.bool,
  placeholderStyle: ViewPropTypes.style,
  imageProps: PropTypes.object,
  ImageComponent: PropTypes.func,
};

Avatar.defaultProps = {
  showEditButton: false,
  size: 'small',
  ImageComponent: Image,
};

class FadeInImage extends React.PureComponent {
  placeholderContainerOpacity = new Animated.Value(1)

  onLoadEnd = () => {
    /* Images finish loading in the same frame for some reason,
      the images will fade in separately with staggerNonce */
    const minimumWait = 100;
    const staggerNonce = 200 * Math.random();
    setTimeout(() =>
      Animated.timing(this.placeholderContainerOpacity, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }).start(), minimumWait + staggerNonce);
  }

  render() {
    const { placeholderStyle, PlaceholderContent, containerStyle, style, ImageComponent, ...attributes } = this.props;
    
    const commonPlaceholderContainerStyle = styles.placeholderContainer;
    const commonImageComponentProps = { ...attributes, style: [styles.avatar, style] };
    
    const [ PlaceHolder, placeholderContainerStyle, imageComponentProps ] = (Platform.OS === 'ios') ? [
      Animated.View,
      [commonPlaceholderContainerStyle, { opacity: this.placeholderContainerOpacity, zIndex: 1 }],
      { ...commonImageComponentProps, onLoadEnd: this.onLoadEnd }
    ] : [
      View, commonPlaceholderContainerStyle, commonImageComponentProps
    ];
    
    return (
      <View style={[styles.overlayContainer, containerStyle]}>   
        <PlaceHolder style={placeholderContainerStyle}>
          <View style={[style, styles.placeholder, placeholderStyle]}>
            {PlaceholderContent}
          </View>
        </PlaceHolder>
        <ImageComponent {...imageComponentProps} />
      </View>
    );
  }
}

export default Avatar;
