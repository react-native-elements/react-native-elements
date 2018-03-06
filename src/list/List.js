import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import ViewPropTypes from '../config/ViewPropTypes';
import Divider from '../divider/Divider';

const List = props => {
  const { children, containerStyle, ...attributes } = props;
  return (
    <View
      {...attributes}
      style={[styles.listContainer, containerStyle && containerStyle]}
    >
      <Divider />
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
    backgroundColor: '#fff',
  },
});

export default List;
