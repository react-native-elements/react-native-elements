import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import ViewPropTypes from '../config/ViewPropTypes';

const TextSegment = ({
  delimiter,
  delimiterStyle,
  preDelimiterTextStyle,
  postDelimiterTextStyle,
  value,
  containerStyle,
}) => {
  if (!delimiter) {
    return (
      <View style={[styles.containerStyle, containerStyle]}>
        <Text style={preDelimiterTextStyle}>{value}</Text>
      </View>
    );
  }

  const [frontValue = '', behindValue = ''] =
    value && delimiter && value.split(delimiter);

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Text style={preDelimiterTextStyle}>{frontValue}</Text>
      <Text style={delimiterStyle}>{delimiter}</Text>
      <Text style={postDelimiterTextStyle}>{behindValue}</Text>
    </View>
  );
};

TextSegment.defaultProps = {
  value: '',
};

TextSegment.propTypes = {
  delimiterStyle: Text.propTypes.style,
  preDelimiterTextStyle: Text.propTypes.style,
  postDelimiterTextStyle: Text.propTypes.style,
  containerStyle: ViewPropTypes.style,
  delimiter: PropTypes.string,
  value: PropTypes.string,
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

export default TextSegment;
