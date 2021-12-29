/// <reference types="react" />
import { Text, TextProps } from './Text';
export { Text };
export type { TextProps };
declare const _default: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & Partial<import("../config").ThemeProps<TextProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & Partial<import("../config").ThemeProps<TextProps>>>;
export default _default;
