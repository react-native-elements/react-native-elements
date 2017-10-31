import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import ViewPropTypes from '../config/ViewPropTypes';

const List = props => {
  const { children, containerStyle, ...attributes } = props;
  return (
    <View
      {...attributes}
      style={[styles.listContainer, containerStyle && containerStyle]}
    >
      {children}
    </View>
  );
};

List.propTypes = {
  children: PropTypes.any,
  containerStyle: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: colors.greyOutline,
    backgroundColor: colors.white,
  },
});

export default List;
