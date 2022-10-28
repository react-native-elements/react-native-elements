import React from 'react';
import { ColorValue, View } from 'react-native';
import { makeStyles } from '../system/makeStyles';
import { SystemProp } from '../system/SystemProp';

export interface BoxProps extends Partial<Record<SystemProp, string | number>> {
  bgColor?: ColorValue;
  h?: number;
  w?: number;
  height?: number;
  width?: number;
  children?: React.ReactNode;
}

/**
 *
 * @usage
 *
 * ```tsx live
 * <Box spacing="md" bgColor="#d2f000" w={200} px={40} py={20}>
 *   <Button>Button</Button>
 * </Box>
 * ```
 *
 */
export const Box = ({ children, ...rest }: BoxProps): JSX.Element => {
  const styles = useStyles(rest);

  return <View style={styles.container}>{children}</View>;
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
