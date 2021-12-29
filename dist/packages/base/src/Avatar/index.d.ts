/// <reference types="react" />
import { Avatar, AvatarProps } from './Avatar';
import { Accessory, AccessoryProps } from './Avatar.Accessory';
declare const ThemedAvatar: (import("react").FunctionComponent<Omit<{
    Component?: typeof import("react").Component;
    onPress?(): void;
    onLongPress?(): void;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    source?: import("react-native").ImageSourcePropType;
    avatarStyle?: import("react-native").ImageStyle;
    rounded?: boolean;
    title?: string;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    overlayContainerStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    activeOpacity?: number;
    icon?: import("../Icon").IconObject & {
        iconStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    };
    iconStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    size?: number | "small" | "medium" | "large" | "xlarge";
    placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    renderPlaceholderContent?: import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
    imageProps?: Partial<import("..").ImageProps>;
    ImageComponent?: import("react").ComponentClass<{}, any>;
} & Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & Partial<import("../config").ThemeProps<AvatarProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<{
    Component?: typeof import("react").Component;
    onPress?(): void;
    onLongPress?(): void;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    source?: import("react-native").ImageSourcePropType;
    avatarStyle?: import("react-native").ImageStyle;
    rounded?: boolean;
    title?: string;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    overlayContainerStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    activeOpacity?: number;
    icon?: import("../Icon").IconObject & {
        iconStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    };
    iconStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    size?: number | "small" | "medium" | "large" | "xlarge";
    placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    renderPlaceholderContent?: import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
    imageProps?: Partial<import("..").ImageProps>;
    ImageComponent?: import("react").ComponentClass<{}, any>;
} & Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & Partial<import("../config").ThemeProps<AvatarProps>>>) & {
    Accessory: import("react").FunctionComponent<Omit<Partial<import("..").IconProps> & Partial<import("..").ImageProps> & {
        underlayColor?: import("react-native").ColorValue;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    } & Partial<{
        pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
    } & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & Partial<import("../config").ThemeProps<AccessoryProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<Partial<import("..").IconProps> & Partial<import("..").ImageProps> & {
        underlayColor?: import("react-native").ColorValue;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    } & Partial<{
        pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
    } & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & Partial<import("../config").ThemeProps<AccessoryProps>>>;
};
export { Avatar, Accessory };
export type { AccessoryProps, AvatarProps };
export default ThemedAvatar;
