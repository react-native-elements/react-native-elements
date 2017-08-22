/*eslint-disable no-console */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Row from './Row';

class Grid extends Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: this.isRow() ? 'column' : 'row',
    },
  });

  isRow() {
    let isRow = false;
    React.Children.forEach(this.props.children, child => {
      if (child && child.type === Row) {
        isRow = true;
      }
    });

    return isRow;
  }

  render() {
    console.warn(
      'Warning: Grid has been deprecated and will be removed in a future version of React Native Elements'
    );

    const { onPress, activeOpacity, containerStyle } = this.props;

    if (onPress) {
      return (
        <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
          <View
            style={[this.styles.container, containerStyle && containerStyle]}
            {...this.props}
          >
            {this.props.children}
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <View
        style={[this.styles.container, containerStyle && containerStyle]}
        {...this.props}
      >
        {this.props.children}
      </View>
    );
  }
}

Grid.propTypes = {
  containerStyle: PropTypes.any,
  onPress: PropTypes.func,
  activeOpacity: PropTypes.number,
  children: PropTypes.any,
};

Grid.defaultProps = {
  activeOpacity: 1,
};

export default Grid;
