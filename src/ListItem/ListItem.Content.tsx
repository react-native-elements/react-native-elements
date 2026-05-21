import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { TextProps } from '../Text';

export interface ListItemContentProps extends TextProps {
  right?: boolean;
}

/** This allows adding content to the ListItem.
 * This, Receives all [View](https://reactnative.dev/docs/view#props) props. */
export const ListItemContent: RneFunctionComponent<ListItemContentProps> = ({
  style,
  right,
  children,
  ...rest
}) => {
  const containerStyle = right ? styles.rightContainer : styles.container;
  return (
    <View style={[containerStyle, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

ListItemContent.displayName = 'ListItem.Content';
