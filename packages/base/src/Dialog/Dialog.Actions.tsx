import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { RneFunctionComponent } from '../helpers';

export interface DialogActionsProps {
  /** Add Enclosed components as an action to the dialog. */
  children?: ReactNode;
}

/** Define Dialog Actions using this component. */
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
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
});

DialogActions.displayName = 'Dialog.Actions';
