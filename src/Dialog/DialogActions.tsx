import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { RneFunctionComponent } from '../helpers';

export type DialogActionsProps = {
  children?: ReactNode;
};

export const DialogActions: RneFunctionComponent<DialogActionsProps> = ({
  children,
}) => {
  return (
    <View style={styles.actionsView} testID="Button__View">
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  actionsView: {
    marginTop: 10,
    marginRight: -35,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
});

DialogActions.displayName = 'DialogActions';
