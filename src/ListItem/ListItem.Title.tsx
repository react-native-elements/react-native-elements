import React from 'react';
import { StyleSheet, Platform, TextProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import Text from '../Text';

const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';

type TitleProps = TextProps & {
  /**Add right title. */
  right?: boolean;
};

/** This allows adding Title to the ListItem.
 * This, Receives all [Text](text#props) props. */
export const ListItemTitle: RneFunctionComponent<TitleProps> = ({
  style,
  right,
  children,
  ...rest
}) => {
  return (
    <Text
      testID="listItemTitle"
      style={StyleSheet.flatten([
        styles.title,
        right && styles.rightTitle,
        style,
      ])}
      {...rest}
    >
      {children}
    </Text>
  );
};

/** Allows adding a title to the ListItem.
 * This, Receives all [Text](text.md#props) props. */
const styles = StyleSheet.create({
  title: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        fontSize: 17,
      },
      default: {
        fontSize: 16,
      },
    }),
  },
  rightTitle: {
    color: ANDROID_SECONDARY,
  },
});

ListItemTitle.displayName = 'ListItem.Title';
