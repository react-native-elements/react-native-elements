import React from 'react';
import {
  Animated,
  Image as ImageNative,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageProps as RNImageProps,
  ViewStyle,
  StyleProp,
  ImageStyle,
} from 'react-native';
import { ThemeProps, withTheme } from '../config';

export type ImageProps = RNImageProps & {
  Component?: typeof React.Component;
  onPress?(): void;
  onLongPress?(): void;
  ImageComponent?: React.ComponentType<any>;
  PlaceholderContent?: React.ReactElement<any>;
  containerStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<ViewStyle>;
  transition?: boolean;
  transitionDuration?: number;
};

type ImageState = {
  placeholderOpacity: Animated.Value;
};

class Image extends React.Component<
  ImageProps & Partial<ThemeProps<ImageProps>>,
  ImageState
> {
  static getSize = ImageNative.getSize;
  static getSizeWithHeaders = ImageNative.getSizeWithHeaders;
  static prefetch = ImageNative.prefetch;
  static abortPrefetch = ImageNative.abortPrefetch;
  static queryCache = ImageNative.queryCache;
  static resolveAssetSource = ImageNative.resolveAssetSource;

  state = {
    placeholderOpacity: new Animated.Value(1),
  };

  onLoad = (e: any) => {
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
      style = {},
      ImageComponent = ImageNative,
      children,
      ...attributes
    } = this.props;

    const hasImage = Boolean(attributes.source);
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
          transition={true}
          transitionDuration={360}
          {...attributes}
          onLoad={this.onLoad}
          style={StyleSheet.flatten([
            StyleSheet.absoluteFill,
            {
              width: width,
              height: height,
            } as StyleProp<ImageStyle>,
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

const styles = StyleSheet.create({
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
});

export { Image };
export default withTheme(Image, 'Image');
