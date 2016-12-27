import React, { PropTypes } from "react";
import { View } from "react-native";

const Col = (props) => {
  const {style, size, width} = props;

  const styles = {
    flex: (size) ? size : (style && style.width) ? 0 : 1,
    flexDirection: 'column',
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

Col.propTypes = {
  size: PropTypes.number,
  style: PropTypes.object,
};

export default Col;
