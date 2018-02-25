/*global require:true*/
/*eslint no-undef: "error"*/
/*eslint-disable no-console */
import times from 'lodash.times';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

import Text from '../text/Text';
import ViewPropTypes from '../config/ViewPropTypes';

const STAR_IMAGE = require('./images/star.png');
const HEART_IMAGE = require('./images/heart.png');
const ROCKET_IMAGE = require('./images/rocket.png');
const BELL_IMAGE = require('./images/bell.png');

const STAR_WIDTH = 60;

const TYPES = {
  star: {
    source: STAR_IMAGE,
    color: '#f1c40f',
    backgroundColor: 'white',
  },
  heart: {
    source: HEART_IMAGE,
    color: '#e74c3c',
    backgroundColor: 'white',
  },
  rocket: {
    source: ROCKET_IMAGE,
    color: '#2ecc71',
    backgroundColor: 'white',
  },
  bell: {
    source: BELL_IMAGE,
    color: '#f39c12',
    backgroundColor: 'white',
  },
};

export default class Rating extends Component {
  _animListener = null;

  static defaultProps = {
    type: 'star',
    ratingImage: require('./images/star.png'),
    ratingColor: '#f1c40f',
    ratingBackgroundColor: 'white',
    ratingCount: 5,
    imageSize: STAR_WIDTH,
    onFinishRating: () => console.log('Attach a function here.'),
  };

  constructor(props) {
    super(props);
    const initialRatingPct = props.startingValue
      ? props.startingValue / props.ratingCount
      : 0.5;
    this.state = {
      panResponder: null,
      rating: initialRatingPct * props.ratingCount,
      ratingPosAnim: new Animated.Value(
        initialRatingPct * props.imageSize * props.ratingCount
      ),
    };
  }

  componentWillMount() {
    const { imageSize, onFinishRating, fractions } = this.props;
    this._animListener = this.state.ratingPosAnim.addListener(({ value }) => {
      this.updateRating(value);
    });
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // extractOffset() is available in later versions of RN
        this.state.ratingPosAnim.setOffset(this.state.rating * imageSize);
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.ratingPosAnim },
      ]),
      onPanResponderRelease: (e, gestureState) => {
        this.state.ratingPosAnim.flattenOffset();
        this.updatePosition(this.state.rating);
        onFinishRating(this.state.rating);
      },
    });
    this.setState(prevState => {
      return { ...prevState, panResponder };
    });
  }

  componentWillUnmount() {
    this.state.ratingPosAnim.removeListener(this._animListener);
  }

  getPrimaryViewStyle() {
    const { imageSize, ratingCount, type } = this.props;

    const color = TYPES[type].color;

    const fullWidth = ratingCount * imageSize;

    const width = this.state.ratingPosAnim.interpolate(
      {
        inputRange: [0, fullWidth],
        outputRange: [0, fullWidth],
        extrapolate: 'clamp',
      },
      { useNativeDriver: true }
    );

    return {
      backgroundColor: color,
      width,
      height: width ? imageSize : 0,
    };
  }

  getSecondaryViewStyle() {
    const { imageSize, ratingCount, type } = this.props;

    const backgroundColor = TYPES[type].backgroundColor;

    const fullWidth = ratingCount * imageSize;

    const width = this.state.ratingPosAnim.interpolate(
      {
        inputRange: [0, fullWidth],
        outputRange: [fullWidth, 0],
        extrapolate: 'clamp',
      },
      { useNativeDriver: true }
    );

    return {
      backgroundColor,
      width,
      height: width ? imageSize : 0,
    };
  }

  renderRatings() {
    const { imageSize, ratingCount, type } = this.props;
    const source = TYPES[type].source;

    return times(ratingCount, index => (
      <View key={index} style={styles.starContainer} pointerEvents="none">
        <Image
          source={source}
          style={{ width: imageSize, height: imageSize }}
          pointerEvents="none"
          draggable={false}
        />
      </View>
    ));
  }

  updatePosition(rating) {
    const { fractions, imageSize, ratingCount } = this.props;
    const ratingPos = rating * imageSize;
    this.state.ratingPosAnim.setValue(ratingPos);
  }

  updateRating(pos) {
    const { fractions, imageSize, ratingCount } = this.props;
    let rating = pos / imageSize;

    if (rating > ratingCount) {
      rating = ratingCount;
    } else if (rating < 0) {
      rating = 0;
    }
    rating = !fractions ? Math.ceil(rating) : +rating.toFixed(fractions);
    this.setState(prevState => {
      return {
        ...prevState,
        rating,
      };
    });
  }

  displayCurrentRating() {
    const { ratingCount, type, readonly } = this.props;

    const color = TYPES[type].color;

    return (
      <View style={styles.showRatingView}>
        <View style={styles.ratingView}>
          <Text style={styles.ratingText}>Rating: </Text>
          <Text style={[styles.currentRatingText, { color }]}>
            {this.state.rating}
          </Text>
          <Text style={styles.maxRatingText}>/{ratingCount}</Text>
        </View>
        <View>
          {readonly && <Text style={styles.readonlyLabel}>(readonly)</Text>}
        </View>
      </View>
    );
  }

  render() {
    const {
      readonly,
      type,
      ratingImage,
      ratingColor,
      ratingBackgroundColor,
      style,
      showRating,
    } = this.props;

    if (type === 'custom') {
      let custom = {
        source: ratingImage,
        color: ratingColor,
        backgroundColor: ratingBackgroundColor,
      };
      TYPES.custom = custom;
    }

    return (
      <View pointerEvents={readonly ? 'none' : 'box-none'} style={style}>
        {showRating && this.displayCurrentRating()}
        <View
          style={styles.starsWrapper}
          {...this.state.panResponder.panHandlers}
        >
          <View style={styles.starsInsideWrapper} pointerEvents="none">
            <Animated.View style={this.getPrimaryViewStyle()} />
            <Animated.View style={this.getSecondaryViewStyle()} />
          </View>
          {this.renderRatings()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  starsWrapper: {
    flexDirection: 'row',
  },
  starsInsideWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
  },
  showRatingView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  ratingText: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
    color: '#34495e',
  },
  readonlyLabel: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
    color: '#34495a',
  },
  currentRatingText: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
  },
  maxRatingText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
    color: '#34495e',
  },
});

const fractionsType = (props, propName, componentName) => {
  if (props[propName]) {
    const value = props[propName];
    if (typeof value === 'number') {
      return value >= 0 && value <= 20
        ? null
        : new Error(
            `\`${propName}\` in \`${componentName}\` must be between 0 and 20`
          );
    }

    return new Error(
      `\`${propName}\` in \`${componentName}\` must be a number`
    );
  }
};

Rating.propTypes = {
  type: PropTypes.string,
  ratingImage: Image.propTypes.source,
  ratingColor: PropTypes.string,
  ratingBackgroundColor: PropTypes.string,
  ratingCount: PropTypes.number,
  imageSize: PropTypes.number,
  onFinishRating: PropTypes.func,
  showRating: PropTypes.bool,
  style: ViewPropTypes.style,
  readonly: PropTypes.bool,
  startingValue: PropTypes.number,
  fractions: fractionsType,
};
