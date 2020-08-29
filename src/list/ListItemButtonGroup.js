import React from 'react';
import { StyleSheet } from 'react-native';

import { withTheme } from '../config';
import ButtonGroup from '../buttons/ButtonGroup';

function ListItemButtonGroup({ containerStyle, ...props }) {
  return (
    <ButtonGroup
      {...props}
      containerStyle={StyleSheet.flatten([styles.container, containerStyle])}
    />
  );
}

const styles = {
  container: {
    flex: 1,
    marginHorizontal: 0,
    marginVertical: 0,
  },
};

export default withTheme(ListItemButtonGroup, 'ListItemButtonGroup');
