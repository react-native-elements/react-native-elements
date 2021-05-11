import React from 'react';
import { Text, StyleSheet, TextStyle, StyleProp, Platform } from 'react-native';
import { withTheme } from '../config';
import { TextProps } from '../text/Text';

export type DialogTitleProps = {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  titleProps?: TextProps;
};

const DialogTitle: React.FunctionComponent<DialogTitleProps> = ({
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

export default withTheme(DialogTitle, 'DialogTitle');
