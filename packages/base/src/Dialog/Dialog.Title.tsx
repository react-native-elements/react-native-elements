import React from 'react';
import { Text, StyleSheet, TextStyle, StyleProp, Platform } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { TextProps } from '../Text';

export interface DialogTitleProps {
  /** Add Dialog title. */
  title?: string;

  /** Add additional styling for title component. */
  titleStyle?: StyleProp<TextStyle>;

  /** Add additional props for Text component. */
  titleProps?: TextProps;
}

/** `DialogTitle` allows you to add title to the Dialog. */
export const DialogTitle: RneFunctionComponent<DialogTitleProps> = ({
  title,
  titleStyle,
  titleProps,
}) => {
  return (
    <Text
      style={StyleSheet.flatten([styles.title, titleStyle])}
      testID="Dialog__Title"
      {...titleProps}
    >
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: Platform.OS === 'ios' ? '600' : '700',
    marginBottom: 10,
  },
});

DialogTitle.displayName = 'Dialog.Title';
