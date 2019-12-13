import React from 'react';
import {
  Animated,
  Image as ImageNative,
  StyleSheet,
  View,
  Platform,
  ImageStyle,
} from 'react-native';
import { withTheme } from '../config';
type ImageProps = {
  ImageComponent?: JSX.Element;
  PlaceholderContent?: any;
  containerStyle?: any;
  placeholderStyle?: any;
  transition?: boolean;
  style: ImageStyle;
};
type ImageState = {
  placeholderOpacity: Animated.AnimatedValue;
};
class Image extends React.Component<ImageProps, ImageState> {
  state = {
    placeholderOpacity: new Animated.Value(1),
  };
  static defaultProps = {
    ImageComponent: ImageNative,
    style: {},
    transition: true,
  };
  onLoad = () => {
    if (!this.props.transition) {
      this.state.placeholderOpacity.setValue(0);
      return;
    }
    const minimumWait = 100;
    const staggerNonce = 200 * Math.random();
    setTimeout(
      () => {
        Animated.timing(this.state.placeholderOpacity, {
          toValue: 0,
          duration: 350,
          useNativeDriver: Platform.OS === 'android' ? false : true,
        }).start();
      },
      Platform.OS === 'android' ? 0 : Math.floor(minimumWait + staggerNonce)
    );
  };
  render() {
    const {
      placeholderStyle,
      PlaceholderContent,
      containerStyle,
      style,
      ImageComponent,
      children,
      ...attributes
    } = this.props;
    const hasImage = Boolean(attributes.source);
    return (
      <View
        accessibilityIgnoresInvertColors={true}
        style={StyleSheet.flatten([styles.container, containerStyle])}
      >
        <ImageComponent
          testID="RNE__Image"
          {...attributes}
          onLoad={this.onLoad}
          style={[
            StyleSheet.absoluteFill,
            {
              width: style.width,
              height: style.height,
            },
          ]}
        />

        <Animated.View
          pointerEvents={hasImage ? 'none' : 'auto'}
          accessibilityElementsHidden={hasImage}
          importantForAccessibility={hasImage ? 'no-hide-descendants' : 'yes'}
          style={[
            styles.placeholderContainer,
            {
              opacity: hasImage ? this.state.placeholderOpacity : 1,
            },
          ]}
        >
          <View
            testID="RNE__Image__placeholder"
            style={StyleSheet.flatten([
              style,
              styles.placeholder,
              placeholderStyle,
            ])}
          >
            {PlaceholderContent}
          </View>
        </Animated.View>

        <View style={style}>{children}</View>
      </View>
    );
  }
}
const styles = {
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
    overflow: 'hidden',
  },
  placeholderContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  placeholder: {
    backgroundColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export { Image };
export default withTheme(Image, 'Image');
