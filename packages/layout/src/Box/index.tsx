import React from 'react';
import { ColorValue, View, StyleProp, ViewStyle } from 'react-native';
import { makeStyles } from '../system/makeStyles';
import { SystemProp } from '../system/SystemProp';

export interface BoxProps extends Partial<Record<SystemProp, string | number>> {
  /** Background Color */
  bgColor?: ColorValue;
  /** Alias for Height */
  h?: number;
  /** Alias for Width */
  w?: number;
  /** Height */
  height?: number;
  /** Width */
  width?: number;
  /** styles for Box */
  style?: StyleProp<ViewStyle>;

  children?: React.ReactNode;
}

export const Box = ({ children, style, ...rest }: BoxProps): JSX.Element => {
  const styles = useStyles(rest);

  return <View style={[styles.container, style]}>{children}</View>;
};

const useStyles = makeStyles(
  ({
    h,
    height = h,
    w,
    width = w,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    margin = m,
    marginBottom = mb,
    marginHorizontal = mx,
    marginLeft = ml,
    marginRight = mr,
    marginTop = mt,
    marginVertical = my,
    p,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
    padding = p,
    paddingBottom = pb,
    paddingHorizontal = px,
    paddingLeft = pl,
    paddingRight = pr,
    paddingTop = pt,
    paddingVertical = py,
    bgColor,
  }: BoxProps) => {
    return {
      container: {
        height,
        width,
        backgroundColor: bgColor,
        margin,
        marginBottom,
        marginHorizontal,
        marginLeft,
        marginRight,
        marginTop,
        marginVertical,
        padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingHorizontal,
        paddingVertical,
      },
    };
  }
);
