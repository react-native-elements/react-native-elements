import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Dimensions,
  LayoutAnimation,
  Platform,
  StyleSheet,
  View,
  ActivityIndicator,
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
      cancelButton,
      clearButtonMode,
      containerStyle,
      icon,
      iconContainerStyle,
      iconStyle,
      inputStyle,
      noIcon,
      onBlur,
      onFocus,
      placeholderTextColor,
      showLoading,
      loadingProps,
      ...attributes,
    } = this.props;
    const { hasFocus } = this.state;
    const {
      style: loadingStyle,
      ...otherLoadingProps,
    } = loadingProps;
    return(
        <View style={styles.container}>
          <Input
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            clearButtonMode={clearButtonMode || 'while-editing'}
            ref={input => (this.input = input)}
            inputStyle={[styles.input, inputStyle]}
            containerStyle={[
              styles.inputContainer,
              (!hasFocus || !cancelButton) && { width: SCREEN_WIDTH - 32, marginRight: 15 },
              containerStyle,
            ]}
            icon={noIcon ? undefined : (icon ? icon : <Ionicon
              size={20}
              name={'ios-search'}
              color={(iconStyle && iconStyle.color) || '#7d7d7d'}
              />)}
            iconStyle={iconStyle}
            iconContainerStyle={[styles.iconContainerStyle, iconContainerStyle]}
            placeholderTextColor={placeholderTextColor || '#7d7d7d'}
            rightIcon={<ActivityIndicator
              style={[
                styles.loadingIcon,
                hasFocus && { right: 32 },
                loadingStyle,
              ]}
              {...otherLoadingProps}
            />}
            {...attributes}
          />
          {Platform.OS === 'ios' && cancelButton && cancelButton}
        </View>
    );
  }
}

//TODO: proptypes
SearchBar.propTypes = {
  cancelButton: PropTypes.element,
  loadingProps: PropTypes.object,
  noIcon: PropTypes.bool,
  showLoading: PropTypes.bool,
};

//TODO: defaultProps
SearchBar.defaultProps = {
  cancelButton: null,
  loadingProps: {},
  noIcon: false,
  showLoading: false,
};

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
    marginLeft: 6,
    flex: 1,
  },
  loadingIcon: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 14,
    top: 10,
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
