import React from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Image as ImageNative,
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import { nodeType } from '../helpers';
import { ViewPropTypes, withTheme } from '../config';

class Image extends React.Component {
  state = {
    placeholderOpacity: new Animated.Value(1),
  };

  onLoad = () => {
    const { transition, onLoad } = this.props;

    if (!transition) {
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

    onLoad && onLoad();
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
    const { width, height, ...styleProps } = style;

    return (
      <View
        accessibilityIgnoresInvertColors={true}
        style={StyleSheet.flatten([styles.container, containerStyle])}
      >
        <ImageComponent
          testID="RNE__Image"
          {...attributes}
          onLoad={this.onLoad}
          style={StyleSheet.flatten([
            StyleSheet.absoluteFill,
            {
              width: width,
              height: height,
            },
            styleProps,
          ])}
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

Image.propTypes = {
  ...ImageNative.propTypes,
  ImageComponent: PropTypes.elementType,
  PlaceholderContent: nodeType,
  containerStyle: ViewPropTypes.style,
  placeholderStyle: ImageNative.propTypes.style,
  transition: PropTypes.bool,
};

Image.defaultProps = {
  ImageComponent: ImageNative,
  style: {},
  transition: true,
};

export { Image };
export default withTheme(Image, 'Image');
