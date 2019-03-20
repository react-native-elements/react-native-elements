import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ViewPropTypes from '../config/ViewPropTypes';

const TextSegment = ({
  delimiter,
  delimiterStyle,
  preDelimiterTextStyle,
  postDelimiterTextStyle,
  preTextPress,
  postTextPress,
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
      {preTextPress ? (
        <TouchableOpacity onPress={preTextPress && preTextPress()}>
          <Text style={preDelimiterTextStyle}>{frontValue}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={preDelimiterTextStyle}>{frontValue}</Text>
      )}
      <Text style={delimiterStyle}>{delimiter}</Text>
      {postTextPress ? (
        <TouchableOpacity onPress={postTextPress && postTextPress()}>
          <Text style={postDelimiterTextStyle}>{behindValue}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={postDelimiterTextStyle}>{behindValue}</Text>
      )}
    </View>
  );
};

TextSegment.defaultProps = {
  value: '',
};

TextSegment.propTypes = {
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
