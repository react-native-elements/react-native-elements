import { Platform, Dimensions } from 'react-native';
import color from 'color';
import renderNode from './renderNode';
import getIconType from './getIconType';
import normalizeText from './normalizeText';
const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === 'ios';
export const androidRipple = (rippleColor) => {
    return {
        borderless: false,
        color: rippleColor,
        radius: -5,
    };
};
export const patchWebProps = ({ updateTheme, replaceTheme, onClear, ...rest }) => {
    return rest;
};
export { renderNode, getIconType, normalizeText, ScreenWidth, ScreenHeight, isIOS, color, };
