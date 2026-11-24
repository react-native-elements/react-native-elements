import React from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

export interface BackgroundImageProps extends Omit<ImageProps, 'style'> {
  /** Content rendered on top of the image. */
  children?: React.ReactNode;

  /** Style applied to the outer container view. */
  style?: StyleProp<ViewStyle>;

  /** Style applied to the inner image. */
  imageStyle?: StyleProp<ImageStyle>;

  /** Ref forwarded to the inner image. */
  imageRef?: React.Ref<Image>;
}

/**
 * Drop-in replacement for React Native's `ImageBackground`, which is
 * deprecated as of React Native 0.88 and slated for removal.
 *
 * Renders a `View` with an absolutely positioned `Image` behind its children,
 * accepting the same props (`style`, `imageStyle`, `imageRef`, and all
 * `Image` props) so existing usages keep working unchanged.
 */
class BackgroundImage extends React.Component<BackgroundImageProps> {
  viewRef = React.createRef<View>();

  setNativeProps(props: Record<string, unknown>) {
    this.viewRef.current?.setNativeProps(props);
  }

  render() {
    const {
      children,
      style,
      imageStyle,
      imageRef,
      importantForAccessibility,
      ...imageProps
    } = this.props;
    const flattenedStyle = StyleSheet.flatten(style);

    return (
      <View
        ref={this.viewRef}
        accessibilityIgnoresInvertColors
        importantForAccessibility={importantForAccessibility}
        style={style}
      >
        <Image
          {...imageProps}
          ref={imageRef}
          importantForAccessibility={importantForAccessibility}
          style={[
            StyleSheet.absoluteFill,
            {
              // Mirror the container size so the image can resolve its
              // dimensions before layout, matching ImageBackground.
              width: flattenedStyle?.width,
              height: flattenedStyle?.height,
            } as ImageStyle,
            imageStyle,
          ]}
        />
        {children}
      </View>
    );
  }
}

export default BackgroundImage;
