import React from 'react';
import {
  View,
  StyleSheet,
  ViewProps,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { withTheme } from '../config';
import Theme from '../config/theme';
import { RneFunctionComponent } from '../helpers';

export type DividerProps = ViewProps & {
  color?: string;
  inset?: boolean;
  insetType?: 'left' | 'right' | 'middle';
  style?: StyleProp<ViewStyle>;
  subHeader?: string;
  subHeaderStyle?: StyleProp<TextStyle>;
  orientation?: 'horizontal' | 'vertical';
  width?: number;
};

const Divider: RneFunctionComponent<DividerProps> = ({
  color,
  inset = false,
  insetType = 'left',
  orientation = 'horizontal',
  style,
  subHeader,
  subHeaderStyle,
  theme,
  width,
  ...rest
}) => (
  <>
    <View
      style={StyleSheet.flatten([
        styles.divider,
        style,
        inset &&
          (insetType === 'left'
            ? styles.leftInset
            : insetType === 'right'
            ? styles.rightInset
            : { ...styles.leftInset, ...styles.rightInset }),
        orientation === 'vertical' && styles.vertical,
        width &&
          (orientation === 'horizontal'
            ? { borderBottomWidth: width }
            : { borderRightWidth: width }),
        color &&
          (orientation === 'horizontal'
            ? { borderBottomColor: color }
            : { borderRightColor: color }),
      ])}
      {...rest}
    />
    {subHeader && orientation === 'horizontal' ? (
      <Text
        style={StyleSheet.flatten([
          styles.subHeader,
          subHeaderStyle,
          inset && styles.leftInset,
        ])}
      >
        {subHeader}
      </Text>
    ) : null}
  </>
);

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Theme?.colors?.divider,
  },
  leftInset: {
    marginLeft: 72,
  },
  rightInset: {
    marginRight: 72,
  },
  vertical: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: Theme?.colors?.divider,
    height: 'auto',
    alignSelf: 'stretch',
  },
  subHeader: {
    includeFontPadding: false,
  },
});

export { Divider };
export default withTheme(Divider, 'Divider');
