/// <reference types="react" />
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
export { ButtonGroup };
export type { ButtonGroupProps };
declare const _default: import("react").FunctionComponent<Omit<Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
    button?: object;
    Component?: typeof import("react").Component;
    onPress?(...args: any[]): void;
    buttons?: (string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>)[];
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    selectedTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    selectedButtonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    underlayColor?: string;
    selectedIndex?: number;
    selectedIndexes?: number[];
    activeOpacity?: number;
    onHideUnderlay?(): void;
    onShowUnderlay?(): void;
    setOpacityTo?: (value: number) => void;
    innerBorderStyle?: {
        color?: string;
        width?: number;
    };
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    buttonContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    selectMultiple?: boolean;
    disabled?: boolean | number[];
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    disabledSelectedStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledSelectedTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    vertical?: boolean;
} & Partial<import("../config").ThemeProps<ButtonGroupProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
    button?: object;
    Component?: typeof import("react").Component;
    onPress?(...args: any[]): void;
    buttons?: (string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>)[];
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    selectedTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    selectedButtonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    underlayColor?: string;
    selectedIndex?: number;
    selectedIndexes?: number[];
    activeOpacity?: number;
    onHideUnderlay?(): void;
    onShowUnderlay?(): void;
    setOpacityTo?: (value: number) => void;
    innerBorderStyle?: {
        color?: string;
        width?: number;
    };
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    buttonContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    selectMultiple?: boolean;
    disabled?: boolean | number[];
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    disabledSelectedStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledSelectedTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    vertical?: boolean;
} & Partial<import("../config").ThemeProps<ButtonGroupProps>>>;
export default _default;
