import { Platform, Dimensions } from 'react-native';
import color from 'color';
import renderNode from './renderNode';
import getIconType from './getIconType';
import normalizeText from './normalizeText';

const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === 'ios';

export const patchWebProps = <T extends Record<any, any>>({
  updateTheme,
  replaceTheme,
  onClear,
  ...rest
}: T) => {
  return rest;
};

export {
  renderNode,
  getIconType,
  normalizeText,
  ScreenWidth,
  ScreenHeight,
  isIOS,
  color,
};
