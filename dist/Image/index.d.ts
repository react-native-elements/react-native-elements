/// <reference types="react" />
import { Image as ImageNative } from 'react-native';
import { Image, ImageProps } from './Image';
export { Image };
export type { ImageProps };
declare const ThemedImage: (import("react").FunctionComponent<Omit<import("react-native").ImageProps & Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
    Component?: typeof import("react").Component;
    onPress?(): void;
    onLongPress?(): void;
    ImageComponent?: typeof import("react").Component;
    PlaceholderContent?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    childrenContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    transition?: boolean;
    transitionDuration?: number;
} & Partial<import("../config").ThemeProps<ImageProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").ImageProps & Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
    Component?: typeof import("react").Component;
    onPress?(): void;
    onLongPress?(): void;
    ImageComponent?: typeof import("react").Component;
    PlaceholderContent?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    childrenContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    transition?: boolean;
    transitionDuration?: number;
} & Partial<import("../config").ThemeProps<ImageProps>>>) & {
    getSize: typeof ImageNative.getSize;
    getSizeWithHeaders: typeof ImageNative.getSizeWithHeaders;
    prefetch: typeof ImageNative.prefetch;
    abortPrefetch: typeof ImageNative.abortPrefetch;
    queryCache: typeof ImageNative.queryCache;
    resolveAssetSource: typeof ImageNative.resolveAssetSource;
};
export default ThemedImage;
