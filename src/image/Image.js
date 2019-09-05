import React, { useState } from 'react';
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

const Image = ({
  placeholderStyle,
  PlaceholderContent,
  containerStyle,
  style,
  ImageComponent,
  children,
  ...attributes
}) => {
  const [placeholderOpacity] = useState(new Animated.Value(1));
  const hasImage = Boolean(attributes.source);

  const onLoad = () => {
    const minimumWait = 100;
    const staggerNonce = 200 * Math.random();

    setTimeout(
      () => {
        Animated.timing(placeholderOpacity, {
          toValue: 0,
          duration: 350,
          useNativeDriver: Platform.OS === 'android' ? false : true,
        }).start();
      },
      Platform.OS === 'android' ? 0 : Math.floor(minimumWait + staggerNonce)
    );
  };

  return (
    <View
      accessibilityIgnoresInvertColors={true}
      style={StyleSheet.flatten([styles.container, containerStyle])}
    >
      <ImageComponent
        {...attributes}
        onLoad={onLoad}
        style={[
          StyleSheet.absoluteFill,
          {
            width: style.width,
            height: style.height,
          },
        ]}
        testID="RNE__Image"
      />

      <Animated.View
        pointerEvents={hasImage ? 'none' : 'auto'}
        accessibilityElementsHidden={hasImage}
        importantForAccessibility={hasImage ? 'no-hide-descendants' : 'yes'}
        style={[
          styles.placeholderContainer,
          {
            opacity: hasImage ? placeholderOpacity : 1,
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
};

const styles = {
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
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
  ImageComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  PlaceholderContent: nodeType,
  containerStyle: ViewPropTypes.style,
  placeholderStyle: ImageNative.propTypes.style,
};

Image.defaultProps = {
  ImageComponent: ImageNative,
  style: {},
};

export { Image };
export default withTheme(Image, 'Image');
