import React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme } from '../config';
import ButtonGroup, { ButtonGroupProps } from '../buttons/ButtonGroup';
import { RneFunctionComponent } from '../helpers';

const ListItemButtonGroup: RneFunctionComponent<ButtonGroupProps> = ({
  containerStyle,
  ...props
}) => {
  return (
    <ButtonGroup
      {...props}
      containerStyle={StyleSheet.flatten([styles.container, containerStyle])}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,
    marginVertical: 0,
  },
});

export default withTheme(ListItemButtonGroup, 'ListItemButtonGroup');
