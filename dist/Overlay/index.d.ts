/// <reference types="react" />
import { Overlay, OverlayProps } from './Overlay';
export { Overlay };
export type { OverlayProps };
declare const _default: import("react").FunctionComponent<Omit<Omit<import("react-native").ModalProps, "visible"> & {
    isVisible: boolean;
    backdropStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    overlayStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    onBackdropPress?(): void;
    fullScreen?: boolean;
    ModalComponent?: typeof import("react").Component;
} & Omit<Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">>, "onPress"> & Partial<import("../config").ThemeProps<OverlayProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<Omit<import("react-native").ModalProps, "visible"> & {
    isVisible: boolean;
    backdropStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    overlayStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    onBackdropPress?(): void;
    fullScreen?: boolean;
    ModalComponent?: typeof import("react").Component;
} & Omit<Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">>, "onPress"> & Partial<import("../config").ThemeProps<OverlayProps>>>;
export default _default;
