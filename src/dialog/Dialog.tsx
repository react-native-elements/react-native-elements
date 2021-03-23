import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Overlay, { OverlayProps } from '../overlay/Overlay';
import { withTheme } from '../config';

export type DialogProps = OverlayProps;

const Dialog: React.FunctionComponent<DialogProps> = (props: DialogProps) => {
  return (
    <Overlay {...props} style={styles.overlay}>
      <Text>Hello! This is a dialog!</Text>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {},
});

export { Dialog };

export default withTheme<DialogProps, {}>(Dialog, 'Dialog');
