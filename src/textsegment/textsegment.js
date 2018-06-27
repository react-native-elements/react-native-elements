import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

const TextSegment = props => {
  const {
    behindStyle,
    delimiter,
    delimiterStyle,
    frontStyle,
    value,
    style,
  } = props;
  let frontValue = '';
  let behindValue = '';
  const splits = value && delimiter && value.split(delimiter);

  if (splits && splits.length) {
    frontValue = splits[0];
    behindValue = splits[1];
  }

  if (!delimiter) {
    return (
      <View style={[{ flexDirection: 'row' }, style]}>
        <Text style={frontStyle}>{value}</Text>
      </View>
    );
  }

  return (
    <View style={[{ flexDirection: 'row' }, style]}>
      <Text style={frontStyle}>{frontValue}</Text>
      <Text style={delimiterStyle}>{delimiter}</Text>
      <Text style={behindStyle}>{behindValue}</Text>
    </View>
  );
};

TextSegment.propTypes = {
  frontStyle: TextInput.propTypes.style,
  delimiterStyle: TextInput.propTypes.style,
  behindStyle: TextInput.propTypes.style,
  style: View.propTypes.style,
  delimiter: PropTypes.string,
  value: PropTypes.string,
};

TextSegment.defaultProps = {
  style: {
    alignItems: 'flex-end',
  },
  value: '',
};

export default TextSegment;
