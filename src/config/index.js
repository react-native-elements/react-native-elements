import { Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import BackgroundImage from './BackgroundImage';
import colors from './colors';
import ViewPropTypes from './ViewPropTypes';
import fonts from './fonts';
import ThemeProvider, { ThemeConsumer } from './ThemeProvider';
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
  withTheme,
};
