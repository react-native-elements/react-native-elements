/// <reference types="react" />
import { DialogLoadingProps } from './Dialog.Loading';
import { DialogTitleProps } from './Dialog.Title';
import { DialogActionsProps } from './Dialog.Actions';
import { DialogBaseProps } from './Dialog';
export type { DialogBaseProps as DialogProps, DialogLoadingProps, DialogTitleProps, DialogActionsProps, };
declare const ThemedDialog: (import("react").FunctionComponent<Omit<Omit<import("..").OverlayProps, "fullScreen"> & {
    children?: import("react").ReactNode;
    isVisible?: boolean;
    overlayStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
} & Partial<import("../config").ThemeProps<DialogBaseProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<Omit<import("..").OverlayProps, "fullScreen"> & {
    children?: import("react").ReactNode;
    isVisible?: boolean;
    overlayStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
} & Partial<import("../config").ThemeProps<DialogBaseProps>>>) & {
    Loading: import("react").FunctionComponent<Omit<DialogLoadingProps & Partial<import("../config").ThemeProps<DialogLoadingProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<DialogLoadingProps & Partial<import("../config").ThemeProps<DialogLoadingProps>>>;
    Title: import("react").FunctionComponent<Omit<DialogTitleProps & Partial<import("../config").ThemeProps<DialogTitleProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<DialogTitleProps & Partial<import("../config").ThemeProps<DialogTitleProps>>>;
    Actions: import("react").FunctionComponent<Omit<DialogActionsProps & Partial<import("../config").ThemeProps<DialogActionsProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<DialogActionsProps & Partial<import("../config").ThemeProps<DialogActionsProps>>>;
    Button: import("react").FunctionComponent<Omit<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
        title?: string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
        titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        titleProps?: import("..").TextProps;
        buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        type?: "solid" | "clear" | "outline";
        loading?: boolean;
        loadingStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        loadingProps?: import("react-native").ActivityIndicatorProps;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        icon?: import("../Icon").IconNode;
        iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        iconRight?: boolean;
        linearGradientProps?: object;
        TouchableComponent?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        disabled?: boolean;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledTitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        raised?: boolean;
        iconPosition?: "bottom" | "left" | "right" | "top";
    } & Partial<import("../config").ThemeProps<import("..").ButtonProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
        title?: string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
        titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        titleProps?: import("..").TextProps;
        buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        type?: "solid" | "clear" | "outline";
        loading?: boolean;
        loadingStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        loadingProps?: import("react-native").ActivityIndicatorProps;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        icon?: import("../Icon").IconNode;
        iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        iconRight?: boolean;
        linearGradientProps?: object;
        TouchableComponent?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        disabled?: boolean;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledTitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        raised?: boolean;
        iconPosition?: "bottom" | "left" | "right" | "top";
    } & Partial<import("../config").ThemeProps<import("..").ButtonProps>>>;
};
export default ThemedDialog;
