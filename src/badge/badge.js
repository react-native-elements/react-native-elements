/*eslint-disable no-console */
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeConsumer, ViewPropTypes } from '../config';
import merge from 'lodash.merge';

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
    <Text style={[styles.text, textStyle && textStyle]}>{value}</Text>
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
    <View style={[styles.container && wrapperStyle && wrapperStyle]}>
      <Component
        {...attributes}
        style={[
          styles.badge,
          {
            backgroundColor: theme.colors.primary,
          },
          containerStyle && containerStyle,
        ]}
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
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  badge: {
    padding: 12,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
});

export default props => (
  <ThemeConsumer>
    {({ theme }) => <Badge {...merge({}, theme.button, props)} theme={theme} />}
  </ThemeConsumer>
);
