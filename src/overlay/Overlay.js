import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  ViewPropTypes as RNViewPropTypes,
} from 'react-native';

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;
const windowHeight = dimensions.height;

const ViewPropTypes = RNViewPropTypes || View.propTypes;

const Overlay = props => {
  const {
    children,
    isVisible,
    containerStyle,
    overlayStyle,
    windowBackgroundColor,
    overlayBackgroundColor,
    borderRadius = parseInt(borderRadius) || 3,
    width,
    height,
    fullScreen,
    ...rest
  } = props;
  if (!isVisible) return null;
  return (
    <View
      style={[
        styles.container,
        windowBackgroundColor && { backgroundColor: windowBackgroundColor },
        containerStyle,
      ]}
      {...rest}
    >
      <View
        style={[
          styles.overlay,
          { borderRadius },
          overlayBackgroundColor && { backgroundColor: overlayBackgroundColor },
          width && { width },
          height && { height },
          fullScreen && { width: windowWidth, height: windowHeight },
          overlayStyle,
        ]}
      >
        {children}
      </View>
    </View>
  );
};

Overlay.propTypes = {
  children: PropTypes.any.isRequired,
  isVisible: PropTypes.bool.isRequired,
  containerStyle: ViewPropTypes.style,
  overlayStyle: ViewPropTypes.style,
  windowBackgroundColor: PropTypes.string,
  overlayBackgroundColor: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fullScreen: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'rgba(0, 0, 0, .4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    borderRadius: 5,
    width: windowWidth - 80,
    height: windowHeight - 180,
    backgroundColor: 'white',
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});

export default Overlay;
