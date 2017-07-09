import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  StyleSheet,
  ViewPropTypes as RNViewPropTypes,
} from 'react-native';
import colors from '../config/colors';

const ViewPropTypes = RNViewPropTypes || View.propTypes;

const List = props => {
  const { children, containerStyle, ...attributes } = props;
  return (
    <View
      style={[styles.listContainer, containerStyle && containerStyle]}
      {...attributes}
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
    borderTopWidth: 0.5,
    borderColor: colors.greyOutline,
    backgroundColor: colors.white,
  },
});

export default List;
