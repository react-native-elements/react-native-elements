import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import ViewPropTypes from '../config/ViewPropTypes';

let styles = {};

class Divider extends React.PureComponent {
  render() {
    let { style } = this.props;
    const dividerStyles = this.context.theme.divider;

    style = {
      ...dividerStyles,
      ...style,
    };

    return <View style={[styles.container, style && style]} />;
  }
}

Divider.propTypes = {
  style: ViewPropTypes.style,
};

Divider.contextTypes = {
  theme: PropTypes.object.isRequired,
};

export default Divider;
