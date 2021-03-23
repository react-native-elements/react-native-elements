import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Overlay, { OverlayProps } from '../overlay/Overlay';
import { withTheme } from '../config';

export type DialogProps = Omit<OverlayProps, 'fullScreen'> & {
  loading?: boolean;
};

const Dialog: React.FunctionComponent<DialogProps> = ({
  overlayStyle,
  ...rest
}: DialogProps) => {
  return (
    <Overlay
      {...rest}
      overlayStyle={StyleSheet.flatten([styles.dialog, overlayStyle])}
    >
      <Text>Hello! This is a dialog!</Text>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  dialog: {
    width: '75%',
  },
});

export { Dialog };

export default withTheme<DialogProps, {}>(Dialog, 'Dialog');
