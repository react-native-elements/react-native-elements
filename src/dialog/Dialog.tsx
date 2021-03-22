import React from 'react';
import {
  View,
  // Text,
  // TouchableNativeFeedback,
  // TouchableOpacity,
  // ActivityIndicator,
  // Platform,
  StyleSheet,
  // TouchableOpacityProps,
  // TouchableNativeFeedbackProps,
  // StyleProp,
  // ViewStyle,
  // ActivityIndicatorProps,
  // TextStyle,
} from 'react-native';
// import Color from 'color';
import { withTheme } from '../config';
// import { renderNode, color } from '../helpers';
// import Icon, { IconNode } from '../icons/Icon';
// import { Theme } from '../config/theme';
// import { TextProps } from '../text/Text';

export type DialogProps = {};

const Dialog: React.FunctionComponent<DialogProps> = (props: DialogProps) => {
  return <View {...props} style={styles.overlay} />;
};

const styles = StyleSheet.create({
  overlay: {},
});

export { Dialog };

export default withTheme<DialogProps, {}>(Dialog, 'Dialog');
