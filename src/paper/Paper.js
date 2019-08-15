import React from "react";
import { StyleSheet, View } from "react-native";

const Paper = props => {
  const {
    style,
    children,
    ...attributes
  } = props;

  return (
    <View style={StyleSheet.flatten([styles.root, style])} {...attributes}>
      {children}
    </View>
  );
};

Paper.propTypes = {};

Paper.defaultProps = {
  elevation: 3
};

const styles = {
  root: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22
  }
};

export { Paper };
export default Paper;
