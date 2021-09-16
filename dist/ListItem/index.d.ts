/// <reference types="react" />
import { ListItemBaseProps } from './ListItem';
import { ListItemSwipeableProps } from './ListItem.Swipeable';
import { ListItemAccordionProps } from './ListItem.Accordion';
import { RneFunctionComponent } from '../helpers';
declare const ThemedListItemContent: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>>;
declare const ThemedListItemChevron: import("react").FunctionComponent<Omit<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>>;
declare const ThemedListItemInput: import("react").ForwardRefExoticComponent<Pick<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabled?: boolean;
    disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftIcon?: import("../Icon").IconNode;
    leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightIcon?: import("../Icon").IconNode;
    rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    InputComponent?: import("react").ComponentType<{}> | import("react").ForwardRefExoticComponent<any>;
    errorProps?: object;
    errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    errorMessage?: string;
    label?: import("react").ReactNode;
    labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    labelProps?: object;
    renderErrorMessage?: boolean;
} & Partial<import("../config").ThemeProps<import("..").InputProps>>, "containerStyle" | "disabled" | "label" | "key" | keyof import("react-native").TextInputProps | keyof import("../config").ThemeProps<import("..").InputProps> | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "labelStyle" | "labelProps" | "renderErrorMessage"> & import("react").RefAttributes<import("react-native").TextInput>> | import("react").FunctionComponent<Omit<Pick<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabled?: boolean;
    disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftIcon?: import("../Icon").IconNode;
    leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightIcon?: import("../Icon").IconNode;
    rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    InputComponent?: import("react").ComponentType<{}> | import("react").ForwardRefExoticComponent<any>;
    errorProps?: object;
    errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    errorMessage?: string;
    label?: import("react").ReactNode;
    labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    labelProps?: object;
    renderErrorMessage?: boolean;
} & Partial<import("../config").ThemeProps<import("..").InputProps>>, "containerStyle" | "disabled" | "label" | "key" | keyof import("react-native").TextInputProps | keyof import("../config").ThemeProps<import("..").InputProps> | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "labelStyle" | "labelProps" | "renderErrorMessage"> & import("react").RefAttributes<import("react-native").TextInput>, keyof import("../config").ThemeProps<T>>>;
declare const ThemedListItemCheckBox: import("react").FunctionComponent<Omit<import("react-native").PressableProps & import("../CheckBox/components/CheckBoxIcon").CheckBoxIconProps & {
    Component?: typeof import("react").Component;
    iconRight?: boolean;
    title?: string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
    titleProps?: import("react-native").TextProps;
    center?: boolean;
    right?: boolean;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    wrapperStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    checkedTitle?: string;
    fontFamily?: string;
} & Partial<import("../config").ThemeProps<import("..").CheckBoxProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").PressableProps & import("../CheckBox/components/CheckBoxIcon").CheckBoxIconProps & {
    Component?: typeof import("react").Component;
    iconRight?: boolean;
    title?: string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
    titleProps?: import("react-native").TextProps;
    center?: boolean;
    right?: boolean;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    wrapperStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    checkedTitle?: string;
    fontFamily?: string;
} & Partial<import("../config").ThemeProps<import("..").CheckBoxProps>>>;
declare const ThemedListItemButtonGroup: import("react").FunctionComponent<Omit<Partial<{
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
} & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<Partial<{
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
} & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>>;
declare const ThemedListItemTitle: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
    right?: boolean;
}>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
    right?: boolean;
}>>>;
declare const ThemedListItemSubtitle: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>>;
declare const ThemedListItemSwipeable: import("react").FunctionComponent<Omit<import("react-native").PressableProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    leftContent?: import("react").ReactNode;
    rightContent?: import("react").ReactNode;
    leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftWidth?: number;
    rightWidth?: number;
    onLeftSwipe?: () => any;
    onRightSwipe?: () => any;
} & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").PressableProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    leftContent?: import("react").ReactNode;
    rightContent?: import("react").ReactNode;
    leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftWidth?: number;
    rightWidth?: number;
    onLeftSwipe?: () => any;
    onRightSwipe?: () => any;
} & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>>;
declare const ThemedListItemAccordion: import("react").FunctionComponent<Omit<import("react-native").PressableProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    isExpanded?: boolean;
    icon?: import("../Icon").IconNode;
    expandIcon?: import("../Icon").IconNode;
    content?: import("react").ReactNode;
    noRotation?: boolean;
    noIcon?: boolean;
    animation?: boolean | {
        type?: "timing" | "spring";
        duration?: number;
    };
} & Partial<import("../config").ThemeProps<ListItemAccordionProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").PressableProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    isExpanded?: boolean;
    icon?: import("../Icon").IconNode;
    expandIcon?: import("../Icon").IconNode;
    content?: import("react").ReactNode;
    noRotation?: boolean;
    noIcon?: boolean;
    animation?: boolean | {
        type?: "timing" | "spring";
        duration?: number;
    };
} & Partial<import("../config").ThemeProps<ListItemAccordionProps>>>;
export declare type ListItemProps = RneFunctionComponent<ListItemBaseProps> & {
    Accordion: typeof ThemedListItemAccordion;
    Chevron: typeof ThemedListItemChevron;
    Content: typeof ThemedListItemContent;
    Input: typeof ThemedListItemInput;
    Title: typeof ThemedListItemTitle;
    Subtitle: typeof ThemedListItemSubtitle;
    Swipeable: typeof ThemedListItemSwipeable;
    CheckBox: typeof ThemedListItemCheckBox;
    ButtonGroup: typeof ThemedListItemButtonGroup;
};
export declare const ListItem: ListItemProps;
export type { ListItemAccordionProps, ListItemSwipeableProps };
declare const ThemedListItem: (import("react").FunctionComponent<Omit<import("react-native").PressableProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & Partial<import("../config").ThemeProps<ListItemBaseProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").PressableProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & Partial<import("../config").ThemeProps<ListItemBaseProps>>>) & {
    Accordion: import("react").FunctionComponent<Omit<import("react-native").PressableProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        isExpanded?: boolean;
        icon?: import("../Icon").IconNode;
        expandIcon?: import("../Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "timing" | "spring";
            duration?: number;
        };
    } & Partial<import("../config").ThemeProps<ListItemAccordionProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").PressableProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        isExpanded?: boolean;
        icon?: import("../Icon").IconNode;
        expandIcon?: import("../Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "timing" | "spring";
            duration?: number;
        };
    } & Partial<import("../config").ThemeProps<ListItemAccordionProps>>>;
    Chevron: import("react").FunctionComponent<Omit<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>>;
    Content: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>>;
    Input: import("react").ForwardRefExoticComponent<Pick<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabled?: boolean;
        disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftIcon?: import("../Icon").IconNode;
        leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightIcon?: import("../Icon").IconNode;
        rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        InputComponent?: import("react").ComponentType<{}> | import("react").ForwardRefExoticComponent<any>;
        errorProps?: object;
        errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        errorMessage?: string;
        label?: import("react").ReactNode;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        labelProps?: object;
        renderErrorMessage?: boolean;
    } & Partial<import("../config").ThemeProps<import("..").InputProps>>, "containerStyle" | "disabled" | "label" | "key" | keyof import("react-native").TextInputProps | keyof import("../config").ThemeProps<import("..").InputProps> | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "labelStyle" | "labelProps" | "renderErrorMessage"> & import("react").RefAttributes<import("react-native").TextInput>> | import("react").FunctionComponent<Omit<Pick<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabled?: boolean;
        disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftIcon?: import("../Icon").IconNode;
        leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightIcon?: import("../Icon").IconNode;
        rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        InputComponent?: import("react").ComponentType<{}> | import("react").ForwardRefExoticComponent<any>;
        errorProps?: object;
        errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        errorMessage?: string;
        label?: import("react").ReactNode;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        labelProps?: object;
        renderErrorMessage?: boolean;
    } & Partial<import("../config").ThemeProps<import("..").InputProps>>, "containerStyle" | "disabled" | "label" | "key" | keyof import("react-native").TextInputProps | keyof import("../config").ThemeProps<import("..").InputProps> | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "labelStyle" | "labelProps" | "renderErrorMessage"> & import("react").RefAttributes<import("react-native").TextInput>, keyof import("../config").ThemeProps<T>>>;
    Title: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>>;
    Subtitle: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>>;
    Swipeable: import("react").FunctionComponent<Omit<import("react-native").PressableProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        leftContent?: import("react").ReactNode;
        rightContent?: import("react").ReactNode;
        leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftWidth?: number;
        rightWidth?: number;
        onLeftSwipe?: () => any;
        onRightSwipe?: () => any;
    } & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").PressableProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        leftContent?: import("react").ReactNode;
        rightContent?: import("react").ReactNode;
        leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftWidth?: number;
        rightWidth?: number;
        onLeftSwipe?: () => any;
        onRightSwipe?: () => any;
    } & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>>;
    CheckBox: import("react").FunctionComponent<Omit<import("react-native").PressableProps & import("../CheckBox/components/CheckBoxIcon").CheckBoxIconProps & {
        Component?: typeof import("react").Component;
        iconRight?: boolean;
        title?: string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
        titleProps?: import("react-native").TextProps;
        center?: boolean;
        right?: boolean;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        wrapperStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        checkedTitle?: string;
        fontFamily?: string;
    } & Partial<import("../config").ThemeProps<import("..").CheckBoxProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").PressableProps & import("../CheckBox/components/CheckBoxIcon").CheckBoxIconProps & {
        Component?: typeof import("react").Component;
        iconRight?: boolean;
        title?: string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
        titleProps?: import("react-native").TextProps;
        center?: boolean;
        right?: boolean;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        wrapperStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        checkedTitle?: string;
        fontFamily?: string;
    } & Partial<import("../config").ThemeProps<import("..").CheckBoxProps>>>;
    ButtonGroup: import("react").FunctionComponent<Omit<Partial<{
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
    } & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<Partial<{
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
    } & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>>;
};
export default ThemedListItem;
