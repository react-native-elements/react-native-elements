import React, { PropTypes } from 'react';
import { View, TouchableOpacity } from 'react-native';

const Row = (props) => {
  const {style, size, onPress, activeOpacity} = props;

  const styles = {
    flex: (size) ? size : (style && style.height) ? 0 : 1,
    flexDirection: 'row',
    ...style,
  };

  if (onPress) {
    return (
      <TouchableOpacity style={{...styles}} activeOpacity={activeOpacity} onPress={onPress}>
        <View
          {...props}
        >
          {props.children}
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View
      {...styles}
      {...props}
    >
      {props.children}
    </View>
  );
};

Row.propTypes = {
  size: PropTypes.number,
  style: PropTypes.object,
  onPress: PropTypes.func,
  activeOpacity: PropTypes.number,
};

Row.defaultProps = {
  activeOpacity: 1,
}

export default Row;
