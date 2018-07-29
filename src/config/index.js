import { Text } from 'react-native';
import BackgroudImage from './BackgroundImage';
import colors from './colors';
import { getStatusBarHeight } from './statusBar';
import ViewPropTypes from './ViewPropTypes';
import fonts from './fonts';
import ThemeProvider, { ThemeConsumer } from './ThemeProvider';
import merge from 'lodash.merge';

const TextPropTypes = Text.propTypes;

export {
  BackgroudImage,
  colors,
  getStatusBarHeight,
  ViewPropTypes,
  TextPropTypes,
  fonts,
  ThemeProvider,
  ThemeConsumer,
  merge,
};
