/// <reference types="react" />
import { RneFunctionComponent } from '../helpers';
import { CardBaseProps } from './Card';
declare const ThemedCardDivider: import("react").FunctionComponent<Omit<import("react-native").ViewProps & {
    color?: string;
    inset?: boolean;
    insetType?: "left" | "right" | "middle";
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    subHeader?: string;
    subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    orientation?: "horizontal" | "vertical";
    width?: number;
} & Partial<import("../config").ThemeProps<import("..").DividerProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    color?: string;
    inset?: boolean;
    insetType?: "left" | "right" | "middle";
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    subHeader?: string;
    subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    orientation?: "horizontal" | "vertical";
    width?: number;
} & Partial<import("../config").ThemeProps<import("..").DividerProps>>>;
declare const ThemedCardFeaturedSubtitle: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & Partial<import("../config").ThemeProps<import("..").TextProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
declare const ThemedCardFeaturedTitle: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & Partial<import("../config").ThemeProps<import("..").TextProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
declare const ThemedCardImage: import("react").FunctionComponent<Omit<import("react-native").ImageProps & Partial<{
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
} & Partial<import("../config").ThemeProps<import("..").ImageProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").ImageProps & Partial<{
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
} & Partial<import("../config").ThemeProps<import("..").ImageProps>>>;
declare const ThemedCardTitle: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & Partial<import("../config").ThemeProps<import("..").TextProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
export declare type CardProps = RneFunctionComponent<CardBaseProps> & {
    Divider: typeof ThemedCardDivider;
    Image: typeof ThemedCardImage;
    Title: typeof ThemedCardTitle;
    FeaturedTitle: typeof ThemedCardFeaturedTitle;
    FeaturedSubTitle: typeof ThemedCardFeaturedSubtitle;
};
export declare const Card: CardProps;
declare const ThemedCard: (import("react").FunctionComponent<Omit<CardBaseProps & Partial<import("../config").ThemeProps<CardBaseProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<CardBaseProps & Partial<import("../config").ThemeProps<CardBaseProps>>>) & {
    Divider: import("react").FunctionComponent<Omit<import("react-native").ViewProps & {
        color?: string;
        inset?: boolean;
        insetType?: "left" | "right" | "middle";
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        subHeader?: string;
        subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        orientation?: "horizontal" | "vertical";
        width?: number;
    } & Partial<import("../config").ThemeProps<import("..").DividerProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
        color?: string;
        inset?: boolean;
        insetType?: "left" | "right" | "middle";
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        subHeader?: string;
        subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        orientation?: "horizontal" | "vertical";
        width?: number;
    } & Partial<import("../config").ThemeProps<import("..").DividerProps>>>;
    Image: import("react").FunctionComponent<Omit<import("react-native").ImageProps & Partial<{
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
    } & Partial<import("../config").ThemeProps<import("..").ImageProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").ImageProps & Partial<{
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
    } & Partial<import("../config").ThemeProps<import("..").ImageProps>>>;
    Title: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
    FeaturedTitle: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
    FeaturedSubtitle: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
};
export default ThemedCard;
