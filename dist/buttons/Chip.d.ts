import React from 'react';
import { RneFunctionComponent } from '../helpers';
import { ButtonProps } from './Button';
export declare type ChipProps = Omit<ButtonProps, 'loading' | 'loadingStyle' | 'loadingProps'> & {
    type?: 'solid' | 'outline';
};
declare const Chip: RneFunctionComponent<ChipProps>;
export { Chip };
declare const _default: React.FunctionComponent<Pick<ChipProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "raised" | "disabled" | "onPress" | "onLongPress" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "containerStyle" | "disabledStyle" | "title" | "icon" | "titleStyle" | "titleProps" | "buttonStyle" | "iconContainerStyle" | "iconRight" | "linearGradientProps" | "TouchableComponent" | "ViewComponent" | "disabledTitleStyle" | "iconPosition">> | React.ForwardRefExoticComponent<ChipProps>;
export default _default;
