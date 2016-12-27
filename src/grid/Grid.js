import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import Row from './Row';

class Grid extends Component {
  styles;

  static propTypes = {
    style: PropTypes.object,
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
