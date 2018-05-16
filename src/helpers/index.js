import { Platform, Dimensions } from 'react-native';
import renderNode from './renderNode';
import getIconType from './getIconType';
import normalizeText from './normalizeText';
import nodeType from './nodeType';

const Screen = Dimensions.get('window');
const ScreenWidth: number = Screen.width;
const ScreenHeight: number = Screen.height;
const isIOS = Platform.OS === 'ios';

export {
  renderNode,
  getIconType,
  normalizeText,
  nodeType,
  ScreenWidth,
  ScreenHeight,
  isIOS,
};
