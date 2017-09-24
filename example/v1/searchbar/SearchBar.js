import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Button,
  LayoutAnimation
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import ViewPropTypes from '../config/ViewPropTypes';
import Input from '../input/Input';

const SCREEN_WIDTH = Dimensions.get('window').width;

class SearchBar extends Component {

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  clear() {
    this.input.clear();
  }

  onFocus = () => {
    this.props.onFocus && this.props.onFocus();
    LayoutAnimation.easeInEaseOut();
    this.setState({ hasFocus: true });
  }

  onBlur = () => {
    this.props.onBlur && this.props.onBlur();
    LayoutAnimation.easeInEaseOut();
    this.setState({ hasFocus: false });
  }
  
  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false,
    };
  }

  render() {
    const {
      inputStyle,
      containerStyle,
      iconStyle,
      placeholderTextColor,
      iconContainerStyle,
      noIcon,
      icon,
      clearButtonMode,
      cancelButton,
      onFocus,
      onBlur,
      ...attributes,
    } = this.props;
    const { hasFocus } = this.state;
    
    return (
        <View style={styles.container}>
          <Input
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            clearButtonMode={clearButtonMode || 'while-editing'}
            ref={input => (this.input = input)}
            inputStyle={[styles.input, inputStyle]}
            containerStyle={[
              styles.inputContainer,
              (!hasFocus || !cancelButton) && { width: SCREEN_WIDTH - 30, marginRight: 15 },
              containerStyle,
            ]}
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
          {cancelButton && <Button
            title={'Cancel'}
            onPress={() => this.input.blur()}
          />}
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
    flexDirection: 'row',
    width: SCREEN_WIDTH,
  },
  input: {
    marginLeft: 5,
    flex: 1,
  },
  inputContainer: {
    backgroundColor: '#dcdce1',
    borderRadius: 9,
    height: 36,
    borderBottomWidth: 0,
    marginLeft: 15,
  },
  iconContainerStyle: {
    marginLeft: 8,
  }
});

export default SearchBar;
