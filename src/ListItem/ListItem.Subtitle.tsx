import React from 'react';
import { StyleSheet, Platform, TextProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import Text from '../Text';

const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';

export type ListItemSubtitleProps = TextProps & { right?: boolean };

/** This allows adding SubTitle to the ListItem.
 * This, Receives all [Text](text.md#props) props. */
export const ListItemSubtitle: RneFunctionComponent<ListItemSubtitleProps> = ({
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

ListItemSubtitle.displayName = 'ListItem.Subtitle';
