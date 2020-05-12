import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

const Container = ({
  onPress,
  onLongPress,
  Component = onPress || onLongPress ? TouchableOpacity : View,
  style,
  children,
  ...attributes
}) => {
  return (
    <Component
      onPress={onPress}
      onLongPress={onLongPress}
      style={style}
      {...attributes}
    >
      {children}
    </Component>
  );
};

Container.propTypes = {
  Component: PropTypes.oneOf([
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
  ]),
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  style: PropTypes.object,
};

export default Container;
