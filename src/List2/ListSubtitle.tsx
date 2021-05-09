import React from 'react';
import { StyleSheet, Platform, TextProps } from 'react-native';
import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';
import Text from '../text/Text';

const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';

type TitleProps = TextProps & { right?: boolean };

const ListSubtitle: RneFunctionComponent<TitleProps> = ({
  style,
  right,
  children,
  ...props
}) => {
  return (
    <Text
      testID="listSubTitle"
      style={StyleSheet.flatten([
        styles.subTitle,
        right && styles.rightTitle,
        style,
      ])}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    backgroundColor: 'transparent',
    paddingHorizontal: 14,
    ...Platform.select({
      ios: {
        fontSize: 16,
      },
      default: {
        fontSize: 14,
      },
    }),
  },
  rightTitle: {
    color: ANDROID_SECONDARY,
  },
});

ListSubtitle.displayName = 'List.Subtitle';

export default withTheme(ListSubtitle, 'ListSubtitle');
