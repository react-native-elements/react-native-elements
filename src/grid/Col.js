import React, { PropTypes } from 'react';
import { View, TouchableOpacity } from 'react-native';

const Col = (props) => {
  const {style, size, onPress, activeOpacity} = props;

  const styles = {
    flex: (size) ? size : (style && style.width) ? 0 : 1,
    flexDirection: 'column',
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
    )
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

Col.propTypes = {
  size: PropTypes.number,
  style: PropTypes.object,
  onPress: PropTypes.func,
  activeOpacity: PropTypes.number,
};

Col.defaultProps = {
  activeOpacity: 1,
};

export default Col;
