import React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme } from '../config';
import CheckBox, { CheckBoxProps } from '../checkbox/CheckBox';
import { RneFunctionComponent } from '../helpers';

const ListItemCheckBox: RneFunctionComponent<CheckBoxProps> = ({
  containerStyle,
  ...props
}) => {
  return (
    <CheckBox
      {...props}
      containerStyle={StyleSheet.flatten([styles.container, containerStyle])}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    marginRight: 0,
    marginLeft: 0,
    padding: 0,
  },
});

export default withTheme(ListItemCheckBox, 'ListItemCheckBox');
