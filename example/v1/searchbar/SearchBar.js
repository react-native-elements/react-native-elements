import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import ViewPropTypes from '../config/ViewPropTypes';
import Input from '../input/Input';

const SCREEN_WIDTH = Dimensions.get('window').width;

class SearchBar extends Component {

  render() {
    const {
      inputStyle,
      containerStyle,
      iconStyle,
      placeholderTextColor,
      iconContainerStyle,
      noIcon,
      icon,
      ...attributes,
    } = this.props;
    return (
        <View style={styles.container}>
        <Input
            inputStyle={[styles.input, inputStyle]}
            containerStyle={[styles.inputContainer, containerStyle]}
            icon={noIcon ? undefined : (icon ? icon : <Ionicon
              size={20}
              name={'ios-search'}
              color={(iconStyle && iconStyle.color )|| '#7d7d7d'}
              />)}
            iconStyle={iconStyle}
            iconContainerStyle={[styles.iconContainerStyle, iconContainerStyle]}
            placeholderTextColor={placeholderTextColor || '#7d7d7d'}
            {...attributes}
          />
        </View>
    );
  }
}

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingBottom: 13,
    paddingTop: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginLeft: 5,
  },
  inputContainer: {
    backgroundColor: '#dcdce1',
    borderRadius: 9,
    height: 36,
    width: SCREEN_WIDTH - 30,
    borderBottomWidth: 0,
  },
  iconContainerStyle: {
    marginLeft: 8,
  }
});

export default SearchBar;
