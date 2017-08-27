import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import ViewPropTypes from '../config/ViewPropTypes';

class Divider extends React.PureComponent {
  render() {
    let { style } = this.props;
    const styles = this.context.theme.divider;

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
