import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

import { withTheme, ViewPropTypes } from '../config';
import { ScreenWidth } from '../helpers';

class GridList extends Component {
  _keyExtractor = (item, index) => item.id;
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  transformData = data => {
    let dataList = [];
    let row = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].featured) {
        if (row.length > 0) {
          dataList.push(row);
          row = [];
        }
        dataList.push([data[i]]);
      } else {
        if (row.length === this.props.column) {
          dataList.push(row);
          row = [];
        }
        row.push(data[i]);
        if (i === data.length - 1) {
          dataList.push(row);
          row = [];
        }
      }
    }
    return dataList;
  };

  fillData = data => {
    for (let i = 0; i < data.length; i++) {
      while (data[i].length < this.props.column) {
        data[i].push({});
      }
    }
    return data.flat(Infinity);
  };

  _renderItem(item, index) {
    const { containerStyle, textStyle, column, divider, theme } = this.props;
    let itemWidth = (ScreenWidth - divider * (column + 1)) / column;
    let itemHeight = this.props.itemHeight
      ? this.props.itemHeight - divider
      : 100 - divider;
    let featureWidth = ScreenWidth - divider * 2;
    let featureHeight = this.props.featureHeight
      ? this.props.featureHeight - divider
      : 200 - divider;
    if (item.featured == null) {
      return (
        <View
          Key={index}
          style={{
            width: itemWidth,
            height: itemHeight,
            backgroundColor: 'white',
          }}
        />
      );
    }

    return (
      <View
        key={index}
        style={StyleSheet.flatten([
          styles.container(
            item.featured ? featureWidth : itemWidth,
            item.featured ? featureHeight : itemHeight,
            divider,
            item.featured ? divider : divider / (column + 1),
            theme
          ),
          containerStyle,
        ])}
      >
        <Image
          source={item.img}
          style={{
            width: item.featured ? featureWidth : itemWidth,
            height: item.featured ? featureHeight : itemHeight,
          }}
        />
        <Text
          style={StyleSheet.flatten([
            styles.text(item.featured ? featureWidth : itemWidth),
            textStyle,
          ])}
        >
          {item.content}
        </Text>
      </View>
    );
  }

  render() {
    const { data, column } = this.props;

    let dataRender = data;
    if (column > 1) {
      dataRender = this.fillData(this.transformData(data));
    }

    return (
      <FlatList
        data={dataRender}
        keyExtractor={this._keyExtractor}
        renderItem={({ item, index }) => this._renderItem(item, index)}
        numColumns={column}
      />
    );
  }
}

GridList.propTypes = {
  containerStyle: ViewPropTypes.style,
  textStyle: ViewPropTypes.style,
  data: PropTypes.array,
  column: PropTypes.number,
  itemHeight: PropTypes.number,
  featuredHeight: PropTypes.number,
  divider: PropTypes.number,
  theme: PropTypes.object,
};

GridList.defaultProps = {
  column: 2,
  data: [],
  divider: 0,
};

const styles = {
  container: (itemWidth, itemHeight, divider, marginRight, theme) => ({
    width: itemWidth,
    height: itemHeight,
    flexDirection: 'row',
    marginLeft: divider,
    marginRight: marginRight,
    marginBottom: divider,
    backgroudColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: itemWidth => ({
    width: itemWidth,
    height: 30,
    padding: 5,
    fontSize: 14,
    color: 'white',
    backgroundColor: '#00000077',
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
  }),
};

export { GridList };
export default withTheme(GridList, 'GridList');
