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
  NativeSyntheticEvent,
  ImageLoadEventData,
} from 'react-native';
import { ThemeProps } from '../config';

export type ImageProps = RNImageProps & {
  Component?: typeof React.Component;
  onPress?(): void;
  onLongPress?(): void;
  ImageComponent?: typeof React.Component;
  PlaceholderContent?: React.ReactElement<any>;
  containerStyle?: StyleProp<ViewStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<ViewStyle>;
  transition?: boolean;
  transitionDuration?: number;
};

export const Image = React.forwardRef<
  ImageNative,
  ImageProps & Partial<ThemeProps<ImageProps>>
>(
  (
    {
      onPress,
      onLongPress,
      Component = onPress || onLongPress ? TouchableOpacity : View,
      placeholderStyle,
      PlaceholderContent,
      containerStyle,
      childrenContainerStyle = null,
      style = {},
      ImageComponent = ImageNative,
      children,
      ...attributes
    },
    ref
  ) => {
    const { current: placeholderOpacity } = React.useRef(new Animated.Value(1));

    const onLoadHandler = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
      const { transition, onLoad, transitionDuration } = attributes;
      if (!transition) {
        placeholderOpacity.setValue(0);
        return;
      }
      Animated.timing(placeholderOpacity, {
        toValue: 0,
        duration: transitionDuration,
        useNativeDriver: true,
      }).start();
      onLoad?.(event);
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
          ref={ref}
          testID="RNE__Image"
          transition={true}
          transitionDuration={360}
          {...attributes}
          onLoad={onLoadHandler}
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

        <View
          testID="RNE__Image__children__container"
          style={childrenContainerStyle ?? style}
        >
          {children}
        </View>
      </Component>
    );
  }
);

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

Image.displayName = 'Image';
