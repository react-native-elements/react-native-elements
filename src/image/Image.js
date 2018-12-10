import React from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Image as RNImage,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import { nodeType } from '../helpers';
import { ViewPropTypes, withTheme } from '../config';

class Image extends React.PureComponent {
  placeholderContainerOpacity = new Animated.Value(1);

  onLoadEnd = () => {
    /* Images finish loading in the same frame for some reason,
        the images will fade in separately with staggerNonce */
    const minimumWait = 100;
    const staggerNonce = 200 * Math.random();

    setTimeout(
      () =>
        Animated.timing(this.placeholderContainerOpacity, {
          toValue: 0,
          duration: 350,
          useNativeDriver: true,
        }).start(),
      minimumWait + staggerNonce
    );
  };

  render() {
    const {
      placeholderStyle,
      PlaceholderContent,
      containerStyle,
      style,
      ImageComponent,
      ...attributes
    } = this.props;

    return (
      <View style={StyleSheet.flatten([styles.container, containerStyle])}>
        {Platform.select({
          android: (
            <React.Fragment>
              <View style={styles.placeholderContainer}>
                <Animated.View
                  testID="RNE__Image__placeholder"
                  style={StyleSheet.flatten([
                    style,
                    styles.placeholder,
                    {
                      backgroundColor: this.placeholderContainerOpacity.interpolate(
                        {
                          inputRange: [0, 1],
                          outputRange: [
                            styles.placeholder.backgroundColor,
                            'transparent',
                          ],
                        }
                      ),
                    },
                    placeholderStyle,
                  ])}
                >
                  {PlaceholderContent}
                </Animated.View>
              </View>

              <ImageComponent {...attributes} style={style} />
            </React.Fragment>
          ),
          default: (
            <React.Fragment>
              <ImageComponent
                {...attributes}
                onLoadEnd={this.onLoadEnd}
                style={style}
              />

              <Animated.View
                style={StyleSheet.flatten([
                  styles.placeholderContainer,
                  { opacity: this.placeholderContainerOpacity },
                ])}
              >
                <View
                  testID="RNE__Image__placeholder"
                  style={StyleSheet.flatten([
                    style,
                    styles.placeholder,
                    placeholderStyle,
                  ])}
                >
                  {PlaceholderContent}
                </View>
              </Animated.View>
            </React.Fragment>
          ),
        })}
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
  },
  placeholderContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  placeholder: {
    backgroundColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

Image.propTypes = {
  ...RNImage.propTypes,
  ImageComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  PlaceholderContent: nodeType,
  containerStyle: ViewPropTypes.style,
  placeholderStyle: RNImage.propTypes.style,
};

Image.defaultProps = {
  ImageComponent: RNImage,
};

export { Image };
export default withTheme(Image, 'Image');
