import React from 'react';
import { TextProps } from 'react-native';
declare type SubtitleProps = TextProps & {
    right?: boolean;
};
declare const _default: React.FunctionComponent<Pick<TextProps & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<SubtitleProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "right">> | React.ForwardRefExoticComponent<TextProps & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<SubtitleProps>>>;
export default _default;
