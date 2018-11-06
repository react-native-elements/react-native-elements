import { Platform, Dimensions } from 'react-native';
import renderNode from './renderNode';
import getIconType from './getIconType';
import normalizeText from './normalizeText';
import nodeType from './nodeType';
import conditionalWrap from './conditionalWrap';
import color from 'color';

const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === 'ios';

const conditionalStyle = (condition, style) => {
  return condition ? style : {};
};

export {
  renderNode,
  getIconType,
  normalizeText,
  nodeType,
  conditionalWrap,
  ScreenWidth,
  ScreenHeight,
  isIOS,
  conditionalStyle,
  color,
};
