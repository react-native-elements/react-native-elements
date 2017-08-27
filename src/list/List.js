import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import ViewPropTypes from '../config/ViewPropTypes';

class List extends React.PureComponent {
  render() {
    const { children, containerStyle, ...attributes } = this.props;
    const styles = this.context.theme.list;

    return (
      <View
        style={[styles.listContainer, containerStyle && containerStyle]}
        {...attributes}
      >
        {children}
      </View>
    );
  }
}

List.propTypes = {
  children: PropTypes.any,
  containerStyle: ViewPropTypes.style,
};

List.contextTypes = {
  theme: PropTypes.object.isRequired,
};

export default List;
