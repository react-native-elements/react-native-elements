import React, { PropTypes } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Badge = props => {
  const {
    containerStyle,
    textStyle,
    onPress,
    component,
    value,
    children,
    ...attributes
  } = props;

  let Component = View;
  let element = (
    <Text style={[styles.text, textStyle && textStyle]}>{value}</Text>
  );

  if (children) {
    element = children;
  }

  if (children && value) {
    console.error('Badge can only contain either child element or value');
  }

  if (!component && onPress) {
    Component = TouchableOpacity;
  }

  if (React.isValidElement(component)) {
    Component = component;
  }

  return (
    <Component
      style={[styles.badge, containerStyle && containerStyle]}
      onPress={onPress}
      {...attributes}
    >
      {element}
    </Component>
  );
};

Badge.propTypes = {
  containerStyle: View.propTypes.style,
  textStyle: Text.propTypes.style,
  children: PropTypes.element,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPress: PropTypes.func,
  component: PropTypes.element,
};

const styles = StyleSheet.create({
  badge: {
    top: 2,
    padding: 12,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: '#444',
    borderRadius: 20,
    position: 'absolute',
    right: 30,
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
});

export default Badge;
