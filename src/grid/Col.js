import React, { PropTypes } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const Col = (props) => {
  const {containerStyle, size, onPress, activeOpacity} = props;

  const styles = StyleSheet.create({
    container: {
      flex: (size) ? size : (containerStyle && containerStyle.width) ? 0 : 1,
      flexDirection: 'column',
    },
  });

  if (onPress) {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          containerStyle && containerStyle,
        ]}
        activeOpacity={activeOpacity}
        onPress={onPress}
      >
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
      style={[
        styles.container,
        containerStyle && containerStyle,
      ]}
      {...props}
    >
      {props.children}
    </View>
  );
};

Col.propTypes = {
  size: PropTypes.number,
  containerStyle: PropTypes.any,
  onPress: PropTypes.func,
  activeOpacity: PropTypes.number,
};

Col.defaultProps = {
  activeOpacity: 1,
};

export default Col;
