import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Row from './Row';

class Grid extends Component {
  static propTypes = {
    containerStyle: PropTypes.any,
    onPress: PropTypes.func,
    activeOpacity: PropTypes.number,
  }

  static defaultProps = {
    activeOpacity: 1,
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: this.isRow() ? 'column' : 'row',
    },
    opacityContainer: {
      flex: 1,
    },
  })

  isRow() {
    let isRow = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.type === Row) {
        isRow = true;
      }
    });

    return isRow;
  }

  render() {
    const {onPress, activeOpacity, containerStyle} = this.props;

    if (onPress) {
      return (
        <TouchableOpacity style={opacityContainer} activeOpacity={activeOpacity} onPress={onPress}>
          <View
            style={[
              this.styles.container,
              containerStyle && containerStyle,
            ]}
            {...this.props}
          >
            {this.props.children}
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <View
        style={[
          this.styles.container,
          containerStyle && containerStyle,
        ]}
        {...this.props}
      >
        {this.props.children}
      </View>
    );
  }
}

export default Grid;
