import React from 'react';
import { StyleSheet, Platform, TextProps } from 'react-native';
import { withTheme } from '../config';
import Text from '../text/Text';

const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';

type SubtitleProps = TextProps & { right?: boolean };

const DropdownSubtitle: React.FunctionComponent<SubtitleProps> = ({
  style,
  right,
  children,
  ...props
}) => {
  return (
    <Text
      testID="DropdownSubtitle"
      style={StyleSheet.flatten([
        styles.subtitle,
        right && styles.rightSubtitle,
        style,
      ])}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        fontSize: 15,
      },
      default: {
        color: ANDROID_SECONDARY,
        fontSize: 14,
      },
    }),
  },
  rightSubtitle: {
    color: ANDROID_SECONDARY,
  },
});
export default withTheme(DropdownSubtitle, 'DropdownSubtitle');