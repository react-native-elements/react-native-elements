import React, { PropTypes } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const Row = (props) => {
  const {containerStyle, size, onPress, activeOpacity} = props;

  const styles = StyleSheet.create({
    container: {
      flex: (size) ? size : (containerStyle && containerStyle.height) ? 0 : 1,
      flexDirection: 'row',
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

Row.propTypes = {
  size: PropTypes.number,
  containerStyle: PropTypes.any,
  onPress: PropTypes.func,
  activeOpacity: PropTypes.number,
  children: PropTypes.any,
};

Row.defaultProps = {
  activeOpacity: 1,
}

export default Row;
