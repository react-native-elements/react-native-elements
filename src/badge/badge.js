import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { ViewPropTypes, withTheme } from '../config';
import { renderNode } from '../helpers';

const Badge = props => {
  const {
    containerStyle,
    textStyle,
    badgeStyle,
    onPress,
    Component = onPress ? TouchableOpacity : View,
    value,
    theme,
    status,
    ...attributes
  } = props;

  const element = renderNode(Text, value, {
    style: StyleSheet.flatten([styles.text, textStyle && textStyle]),
  });

  return (
    <View style={StyleSheet.flatten([containerStyle && containerStyle])}>
      <Component
        {...attributes}
        style={StyleSheet.flatten([
          styles.badge(theme, status),
          !element && styles.miniBadge,
          badgeStyle && badgeStyle,
        ])}
        onPress={onPress}
      >
        {element}
      </Component>
    </View>
  );
};

Badge.propTypes = {
  containerStyle: ViewPropTypes.style,
  badgeStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  value: PropTypes.node,
  onPress: PropTypes.func,
  Component: PropTypes.func,
  theme: PropTypes.object,
  status: PropTypes.oneOf(['primary', 'success', 'warning', 'error']),
};

Badge.defaultProps = {
  status: 'primary',
};

const styles = {
  badge: (theme, status) => ({
    minWidth: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors[status],
    paddingVertical: 3,
    paddingHorizontal: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
  }),
  miniBadge: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: 12,
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
};

export { Badge };
export default withTheme(Badge, 'Badge');
