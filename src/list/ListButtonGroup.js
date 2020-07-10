import React from 'react';
import { StyleSheet } from 'react-native';
import ButtonGroup from '../buttons/ButtonGroup';

function ListButtonGroup({ containerStyle, ...props }) {
  return (
    <ButtonGroup
      {...props}
      containerStyle={StyleSheet.flatten([
        styles.buttonGroupContainer,
        containerStyle,
      ])}
    />
  );
}

const styles = {
  buttonGroupContainer: {
    flex: 1,
    marginHorizontal: 0,
    marginVertical: 0,
  },
};

export default ListButtonGroup;
