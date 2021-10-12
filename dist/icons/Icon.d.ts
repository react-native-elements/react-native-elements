import React from 'react';
import { ViewStyle, StyleProp, TextStyle, TouchableHighlightProps } from 'react-native';
import { IconButtonProps, IconProps as VectorIconProps } from 'react-native-vector-icons/Icon';
import { RneFunctionComponent } from '../helpers';
export declare type IconType = 'material' | 'material-community' | 'simple-line-icon' | 'zocial' | 'font-awesome' | 'octicon' | 'ionicon' | 'foundation' | 'evilicon' | 'entypo' | 'antdesign' | 'font-awesome-5' | string;
export interface IconObject extends TouchableHighlightProps {
    name?: string;
    color?: string;
    size?: number;
    type?: IconType;
    iconStyle?: StyleProp<TextStyle>;
}
export declare type IconNode = boolean | React.ReactElement<{}> | Partial<IconProps>;
export declare type IconProps = IconButtonProps & {
    type?: IconType;
    Component?: typeof React.Component;
    reverse?: boolean;
    raised?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    iconProps?: VectorIconProps;
    reverseColor?: string;
    disabled?: boolean;
    disabledStyle?: StyleProp<ViewStyle>;
    solid?: boolean;
    brand?: boolean;
};
declare const Icon: RneFunctionComponent<IconProps>;
export { Icon };
declare const _default: React.FunctionComponent<Pick<IconButtonProps & {
    type?: string;
    Component?: typeof React.Component;
    reverse?: boolean;
    raised?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    iconProps?: VectorIconProps;
    reverseColor?: string;
    disabled?: boolean;
    disabledStyle?: StyleProp<ViewStyle>;
    solid?: boolean;
    brand?: boolean;
} & Partial<import("../config").ThemeProps<IconProps>>, "style" | "onLayout" | "borderRadius" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "raised" | "disabled" | "color" | "iconStyle" | "backgroundColor" | "size" | "name" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "Component" | "reverse" | "containerStyle" | "iconProps" | "reverseColor" | "disabledStyle" | "solid" | "brand">> | React.ForwardRefExoticComponent<IconButtonProps & {
    type?: string;
    Component?: typeof React.Component;
    reverse?: boolean;
    raised?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    iconProps?: VectorIconProps;
    reverseColor?: string;
    disabled?: boolean;
    disabledStyle?: StyleProp<ViewStyle>;
    solid?: boolean;
    brand?: boolean;
} & Partial<import("../config").ThemeProps<IconProps>>>;
export default _default;
