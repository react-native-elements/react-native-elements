/*eslint-disable no-console */
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import ViewPropTypes from '../config/ViewPropTypes';

class Badge extends React.PureComponent {
  render() {
    const styles = this.context.theme.badge;

    const {
      containerStyle,
      textStyle,
      wrapperStyle,
      onPress,
      component,
      value,
      children,
      element,
      ...attributes
    } = this.props;

    if (element) return element;

    let Component = View;
    let childElement = (
      <Text style={[styles.text, textStyle && textStyle]}>
        {value}
      </Text>
    );

    if (children) {
      childElement = children;
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
      <View style={[styles.container && wrapperStyle && wrapperStyle]}>
        <Component
          style={[styles.badge, containerStyle && containerStyle]}
          onPress={onPress}
          {...attributes}
        >
          {childElement}
        </Component>
      </View>
    );
  }
}

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

Badge.contextTypes = {
  theme: PropTypes.object.isRequired,
};

export default Badge;
