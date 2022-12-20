import React from 'react';
import { View, FlexStyle, ViewStyle, StyleProp } from 'react-native';
import { makeStyles } from '../system/makeStyles';

export interface StackProps {
  style?: StyleProp<ViewStyle>;
  /**
   * @default flex-start
   */
  align?: FlexStyle['alignItems'];
  /**
   * @default flex-start
   */
  justify?: FlexStyle['justifyContent'];
  /**
   * @default false
   */
  row?: boolean;
  /**
   * @default 0
   */
  spacing?: number;
  /**
   * @default false
   */
  reverse?: boolean;
  /**
   *
   */
  children?: React.ReactNode;
}

/**
 * @usage
 *
 * ```tsx live
 * <Stack spacing="md">
 *
 * </Stack>
 * ```
 */
export const Stack = ({
  children,
  style,
  ...rest
}: StackProps): JSX.Element => {
  const styles = useStyles(rest);

  return (
    <View style={[styles.container, style]}>
      {React.Children.map(children, (child) => (
        <View style={styles.childProps}>{child}</View>
      ))}
    </View>
  );
};

const useStyles = makeStyles(
  ({
    align = 'flex-start',
    row = false,
    justify = 'flex-start',
    spacing = 0,
    reverse = false,
  }: Partial<StackProps>) => {
    const flexDirection = ((row ? 'row' : 'column') +
      (reverse ? '-reverse' : '')) as FlexStyle['flexDirection'];

    return {
      container: {
        display: 'flex',
        flexDirection: flexDirection,
        alignItems: align,
        justifyContent: justify,
      },
      childProps: {
        padding: spacing,
      },
    };
  }
);
