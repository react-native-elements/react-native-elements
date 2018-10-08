/*eslint-disable no-console */
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { ViewPropTypes, withTheme } from '../config';

const Badge = props => {
  const {
    containerStyle,
    textStyle,
    wrapperStyle,
    onPress,
    component,
    value,
    children,
    element,
    theme,
    ...attributes
  } = props;

  if (element) return element;

  let childElement = (
    <Text style={StyleSheet.flatten([styles.text, textStyle && textStyle])}>
      {value}
    </Text>
  );

  if (children) {
    childElement = children;
  }

  if (children && value) {
    console.error('Badge can only contain either child element or value');
  }

  let Component = View;

  if (component) {
    Component = component;
  } else if (onPress) {
    Component = TouchableOpacity;
  }

  return (
    <View
      style={StyleSheet.flatten([
        styles.container && wrapperStyle && wrapperStyle,
      ])}
    >
      <Component
        {...attributes}
        style={StyleSheet.flatten([
          styles.badge(theme),
          containerStyle && containerStyle,
        ])}
        onPress={onPress}
      >
        {childElement}
      </Component>
    </View>
  );
};

Badge.propTypes = {
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPress: PropTypes.func,
  component: PropTypes.func,
  element: PropTypes.element,
  theme: PropTypes.object,
};

const styles = {
  container: {
    flexDirection: 'row',
  },
  badge: theme => ({
    padding: 12,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  }),
  text: {
    fontSize: 14,
    color: 'white',
  },
};

export { Badge };
export default withTheme(Badge, 'Badge');
