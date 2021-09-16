/// <reference types="react" />
import { Divider, DividerProps } from './Divider';
export { Divider };
export type { DividerProps };
declare const _default: import("react").FunctionComponent<Omit<import("react-native").ViewProps & {
    color?: string;
    inset?: boolean;
    insetType?: "left" | "right" | "middle";
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    subHeader?: string;
    subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    orientation?: "horizontal" | "vertical";
    width?: number;
} & Partial<import("../config").ThemeProps<DividerProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    color?: string;
    inset?: boolean;
    insetType?: "left" | "right" | "middle";
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    subHeader?: string;
    subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    orientation?: "horizontal" | "vertical";
    width?: number;
} & Partial<import("../config").ThemeProps<DividerProps>>>;
export default _default;
