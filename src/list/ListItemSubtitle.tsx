import React from 'react';
import { StyleSheet, Platform, TextProps } from 'react-native';
import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';
import Text from '../text/Text';

const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';

type SubtitleProps = TextProps & { right?: boolean };

const ListItemSubtitle: RneFunctionComponent<SubtitleProps> = ({
  style,
  right,
  children,
  ...props
}) => {
  return (
    <Text
      testID="listItemTitle"
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

export default withTheme(ListItemSubtitle, 'ListItemSubtitle');
