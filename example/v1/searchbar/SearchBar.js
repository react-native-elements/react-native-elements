import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewPropTypes from '../config/ViewPropTypes';
import Input from '../input/Input';

class SearchBar extends Component {

  render() {
    const {
      ...attributes
    } = this.props;
    return (
        <Input
          {...attributes}
        />
    );
  }
}

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

const styles = StyleSheet.create({});

export default SearchBar;
