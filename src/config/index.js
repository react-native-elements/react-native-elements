import { Text } from 'react-native';
import BackgroundImage from './BackgroundImage';
import colors from './colors';
import { getStatusBarHeight } from './statusBar';
import ViewPropTypes from './ViewPropTypes';
import fonts from './fonts';
import ThemeProvider, { ThemeConsumer } from './ThemeProvider';
import merge from 'lodash.merge';
import withTheme from './withTheme';

const TextPropTypes = Text.propTypes;

export {
  BackgroundImage,
  colors,
  getStatusBarHeight,
  ViewPropTypes,
  TextPropTypes,
  fonts,
  ThemeProvider,
  ThemeConsumer,
  merge,
  withTheme,
};
