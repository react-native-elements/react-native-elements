/// <reference types="react" />
import { Tile, TileProps } from './Tile';
export { Tile };
export type { TileProps };
declare const _default: import("react").FunctionComponent<Omit<import("react-native").PressableProps & {
    title?: string;
    icon?: import("../Icon").IconObject & import("react-native-vector-icons/Icon").IconButtonProps & {
        type?: string;
        Component?: typeof import("react").Component;
        reverse?: boolean;
        raised?: boolean;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        iconProps?: import("react-native-vector-icons/Icon").IconProps;
        reverseColor?: string;
        disabled?: boolean;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        solid?: boolean;
        brand?: boolean;
    } & Partial<{
        pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
    } & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">>;
    caption?: import("react").ReactNode;
    imageSrc?: string | import("react-native").ImageSourcePropType;
    activeOpacity?: number;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    imageContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    overlayContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    captionStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    width?: number;
    height?: number;
    featured?: boolean;
    contentContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    titleNumberOfLines?: number;
    imageProps?: Partial<import("react-native").ImageProps>;
    ImageComponent?: typeof import("react").Component;
} & Partial<import("../config").ThemeProps<TileProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").PressableProps & {
    title?: string;
    icon?: import("../Icon").IconObject & import("react-native-vector-icons/Icon").IconButtonProps & {
        type?: string;
        Component?: typeof import("react").Component;
        reverse?: boolean;
        raised?: boolean;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        iconProps?: import("react-native-vector-icons/Icon").IconProps;
        reverseColor?: string;
        disabled?: boolean;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        solid?: boolean;
        brand?: boolean;
    } & Partial<{
        pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
    } & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">>;
    caption?: import("react").ReactNode;
    imageSrc?: string | import("react-native").ImageSourcePropType;
    activeOpacity?: number;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    imageContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    overlayContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    captionStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    width?: number;
    height?: number;
    featured?: boolean;
    contentContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    titleNumberOfLines?: number;
    imageProps?: Partial<import("react-native").ImageProps>;
    ImageComponent?: typeof import("react").Component;
} & Partial<import("../config").ThemeProps<TileProps>>>;
export default _default;
