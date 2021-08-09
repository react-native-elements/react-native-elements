import React, { useCallback } from 'react';
import {
  Animated,
  Image as ImageNative,
  ImageLoadEventData,
  ImageProps as RNImageProps,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Text } from '..';
import { RneFunctionComponent } from '../helpers';

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

export const Image: RneFunctionComponent<ImageProps> = ({
  onPress,
  onLongPress,
  Component = onPress || onLongPress ? TouchableOpacity : View,
  placeholderStyle,
  PlaceholderContent,
  containerStyle,
  childrenContainerStyle = null,
  style = {},
  ImageComponent = ImageNative,
  onLoad,
  children,
  transition,
  transitionDuration = 360,
  ...props
}) => {
  const root = React.useRef<ImageNative>(null);
  const placeholderOpacity = React.useRef(new Animated.Value(1));

  const onLoadHandler = useCallback(
    (event: NativeSyntheticEvent<ImageLoadEventData>) => {
      if (transition) {
        Animated.timing(placeholderOpacity.current, {
          toValue: 0,
          duration: transitionDuration,
          useNativeDriver: true,
        }).start();
      } else {
        placeholderOpacity.current.setValue(0);
      }
      onLoad?.(event);
    },
    [transition, transitionDuration, onLoad]
  );

  const hasImage = Boolean(props.source);

  return (
    <Component
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityIgnoresInvertColors={true}
      style={StyleSheet.flatten([styles.container, containerStyle])}
    >
      <ImageComponent
        ref={root}
        testID="RNE__Image"
        {...props}
        {...{ transition, transitionDuration }}
        onLoad={onLoadHandler}
        style={StyleSheet.flatten([StyleSheet.absoluteFill, style])}
      />
      {/* Transition placeholder */}
      <Animated.View
        pointerEvents={hasImage ? 'none' : 'auto'}
        accessibilityElementsHidden={hasImage}
        importantForAccessibility={hasImage ? 'no-hide-descendants' : 'yes'}
        style={[
          StyleSheet.absoluteFillObject,
          {
            opacity: hasImage ? placeholderOpacity.current : 1,
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
          {React.isValidElement(PlaceholderContent)
            ? PlaceholderContent
            : PlaceholderContent && (
                <Text testID="RNE__Image__Placeholder__Content">
                  {PlaceholderContent}
                </Text>
              )}
        </View>
      </Animated.View>
      {/* Children for Image */}
      <View
        testID="RNE__Image__children__container"
        style={childrenContainerStyle ?? style}
      >
        {children}
      </View>
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
    overflow: 'hidden',
  },
  placeholder: {
    backgroundColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Image.displayName = 'Image';
