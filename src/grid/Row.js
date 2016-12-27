import React, { PropTypes } from "react";
import { View } from "react-native";

const Row = (props) => {
  const {style, size} = props;

  const styles = {
    flex: (size) ? size : (style && style.height) ? 0 : 1,
    flexDirection: 'row',
    ...style,
  };

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
};

export default Row;
