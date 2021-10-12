import React from 'react';
import { ListItemProps } from './ListItemBase';
import { IconNode } from '../icons/Icon';
export declare type ListItemAccordionProps = ListItemProps & {
    isExpanded?: boolean;
    icon?: IconNode;
    expandIcon?: IconNode;
    content?: React.ReactNode;
    noRotation?: boolean;
    noIcon?: boolean;
    animation?: {
        type?: 'timing' | 'spring';
        duration?: number;
    } | boolean;
};
declare const _default: React.FunctionComponent<Pick<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof React.Component;
    ViewComponent?: typeof React.Component;
    linearGradientProps?: any;
    children?: any;
} & {
    isExpanded?: boolean;
    icon?: IconNode;
    expandIcon?: IconNode;
    content?: React.ReactNode;
    noRotation?: boolean;
    noIcon?: boolean;
    animation?: boolean | {
        type?: "spring" | "timing";
        duration?: number;
    };
} & Partial<import("../config").ThemeProps<ListItemAccordionProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "onPress" | "onLongPress" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "Component" | "containerStyle" | "disabledStyle" | "children" | "icon" | "linearGradientProps" | "ViewComponent" | "pad" | "topDivider" | "bottomDivider" | "isExpanded" | "expandIcon" | "content" | "noRotation" | "noIcon" | "animation">> | React.ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof React.Component;
    ViewComponent?: typeof React.Component;
    linearGradientProps?: any;
    children?: any;
} & {
    isExpanded?: boolean;
    icon?: IconNode;
    expandIcon?: IconNode;
    content?: React.ReactNode;
    noRotation?: boolean;
    noIcon?: boolean;
    animation?: boolean | {
        type?: "spring" | "timing";
        duration?: number;
    };
} & Partial<import("../config").ThemeProps<ListItemAccordionProps>>>;
export default _default;
