import React from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Image as ImageNative,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

import { nodeType } from '../helpers';
import { withTheme } from '../config';

class Image extends React.Component {
  state = {
    placeholderOpacity: new Animated.Value(1),
  };

  onLoad = (e) => {
    const { transition, onLoad, transitionDuration } = this.props;

    if (!transition) {
      this.state.placeholderOpacity.setValue(0);
      return;
    }

    Animated.timing(this.state.placeholderOpacity, {
      toValue: 0,
      duration: transitionDuration,
      useNativeDriver: true,
    }).start();

    onLoad && onLoad(e);
  };

  render() {
    const {
      onPress,
      onLongPress,
      Component = onPress || onLongPress ? TouchableOpacity : View,
      placeholderStyle,
      PlaceholderContent,
      containerStyle,
      style,
      ImageComponent,
      children,
      ...attributes
    } = this.props;

    const hasImage =
      Boolean(attributes.source) && Boolean(attributes.source.uri);
    const { width, height, ...styleProps } = StyleSheet.flatten(style);

    return (
      <Component
        onPress={onPress}
        onLongPress={onLongPress}
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
      </Component>
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
  Component: PropTypes.oneOf([
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
  ]),
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  ImageComponent: PropTypes.elementType,
  PlaceholderContent: nodeType,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  placeholderStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  transition: PropTypes.bool,
  transitionDuration: PropTypes.number,
};

Image.defaultProps = {
  ImageComponent: ImageNative,
  style: {},
  transition: true,
  transitionDuration: 360,
};

Image.getSize = ImageNative.getSize;
Image.getSizeWithHeaders = ImageNative.getSizeWithHeaders;
Image.prefetch = ImageNative.prefetch;
Image.abortPrefetch = ImageNative.abortPrefetch;
Image.queryCache = ImageNative.queryCache;
Image.resolveAssetSource = ImageNative.resolveAssetSource;

export { Image };
export default withTheme(Image, 'Image');
