import React, { Component, PropTypes } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Row from './Row';

class Grid extends Component {
  styles;

  static propTypes = {
    style: PropTypes.object,
    onPress: PropTypes.func,
    activeOpacity: PropTypes.number,
  }

  static defaultProps = {
    activeOpacity: 1,
  }

  isRow() {
    let isRow = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child.type === Row) {
        isRow = true;
      }
    });

    return isRow;
  }

  componentWillMount() {
    const {style} = this.props;

    this.styles = {
      flex: 1,
      flexDirection: this.isRow() ? 'column' : 'row',
      ...style,
    };
  }

  render() {
    const {onPress, activeOpacity} = this.props;

    if (onPress) {
      return (
        <TouchableOpacity style={{flex: 1}} activeOpacity={activeOpacity} onPress={onPress}>
          <View
            {...this.styles}
            {...this.props}
          >
            {this.props.children}
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <View
        {...this.styles}
        {...this.props}
      >
        {this.props.children}
      </View>
    );
  }
}

export default Grid;
