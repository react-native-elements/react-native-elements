import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { FAB, FABProps } from '../FAB/index';
import { RneFunctionComponent } from '../helpers';

export interface SpeedDialActionProps extends Omit<FABProps, 'size'> {
  /** onPress on Label Press */
  labelPressable?: boolean;
}

/** Adds Action to the SpeedDial.
 * This, Receive all [Fab](fab#props) props. */
export const SpeedDialAction: RneFunctionComponent<SpeedDialActionProps> = ({
  title,
  titleStyle,
  placement,
  labelPressable,
  onPress,
  ...actionProps
}) => {
  return (
    <Pressable
      onPress={labelPressable ? onPress : undefined}
      style={[
        styles.action,
        placement === 'left' && {
          flexDirection: 'row-reverse',
        },
      ]}
    >
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      <FAB
        {...actionProps}
        onPress={onPress}
        size="small"
        style={[actionProps.style]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
  },
  action: {
    marginBottom: 16,
    marginRight: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

SpeedDialAction.displayName = 'SpeedDial.Action';
