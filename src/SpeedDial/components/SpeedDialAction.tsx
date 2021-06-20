import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withTheme } from '../../config';
import { FAB, FABProps } from '../../FAB/index';
import { RneFunctionComponent } from '../../helpers';

export type SpeedDialActionProps = Omit<FABProps, 'size'>;

export const SpeedDialAction: RneFunctionComponent<SpeedDialActionProps> = withTheme(
  ({ title, titleStyle, ...actionProps }) => {
    return (
      <View style={styles.action}>
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        <FAB {...actionProps} size="small" style={[actionProps.style]} />
      </View>
    );
  },
  'SpeedDialAction'
);

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
