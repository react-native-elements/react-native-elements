import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { withTheme } from '../config';

export type ListSectionProps = ViewProps;

const ListSection: RneFunctionComponent<ListSectionProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
  },
});

export { ListSection };
export default withTheme(ListSection, 'ListSection');
