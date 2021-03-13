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
} from 'react-native';
import { withTheme } from '../config';

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
  children?: JSX.Element;
};

const Image = ({
  transition,
  onLoad: onLoadRN,
  transitionDuration,
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
}: ImageProps) => {
  const [placeholderOpacity] = React.useState(new Animated.Value(1));

  const onLoad = (e: any) => {
    if (!transition) {
      placeholderOpacity.setValue(0);
      return;
    }

    Animated.timing(placeholderOpacity, {
      toValue: 0,
      duration: transitionDuration,
      useNativeDriver: true,
    }).start();
    onLoadRN && onLoadRN(e);
  };

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
        onLoad={onLoad}
        style={StyleSheet.flatten([
          StyleSheet.absoluteFill,
          {
            width: width,
            height: height,
          } as any,
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
    </Component>
  );
};

Image.getSize = ImageNative.getSize;
Image.getSizeWithHeaders = ImageNative.getSizeWithHeaders;
Image.prefetch = ImageNative.prefetch;
Image.abortPrefetch = ImageNative.abortPrefetch;
Image.queryCache = ImageNative.queryCache;
Image.resolveAssetSource = ImageNative.resolveAssetSource;

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
