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

    const { onFinishRating } = this.props;

    const position = new Animated.ValueXY();
    const newValue = new Animated.ValueXY();
    newValue.setValue({ x: 0, y: 500 });

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
        this.setState({ value: gesture.dx });
      },
      onPanResponderRelease: event => {
        onFinishRating(this.getCurrentRating());
      },
    });

    this.state = { panResponder, position };
  }

  getPrimaryViewStyle() {
    const { position } = this.state;
    const { imageSize, ratingCount, type } = this.props;

    const color = TYPES[type].color;

    const width = position.x.interpolate({
      inputRange: [
        -ratingCount * (imageSize / 2),
        0,
        ratingCount * (imageSize / 2),
      ],
      outputRange: [0, ratingCount * imageSize / 2, ratingCount * imageSize],
      extrapolate: 'clamp',
    });

    return {
      backgroundColor: color,
      width,
      height: width ? imageSize : 0,
    };
  }

  getSecondaryViewStyle() {
    const { position } = this.state;
    const { imageSize, ratingCount, type } = this.props;

    const backgroundColor = TYPES[type].backgroundColor;

    const width = position.x.interpolate({
      inputRange: [
        -ratingCount * (imageSize / 2),
        0,
        ratingCount * (imageSize / 2),
      ],
      outputRange: [ratingCount * imageSize, ratingCount * imageSize / 2, 0],
      extrapolate: 'clamp',
    });

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
      <View key={index} style={styles.starContainer}>
        <Image
          source={source}
          style={{ width: imageSize, height: imageSize }}
        />
      </View>
    ));
  }

  getCurrentRating() {
    const { value } = this.state;
    const { imageSize, ratingCount } = this.props;
    const startingValue = ratingCount / 2;
    let currentRating = 0;

    if (value > ratingCount * imageSize / 2) {
      currentRating = ratingCount;
    } else if (value > imageSize) {
      currentRating = Math.ceil(startingValue + value / imageSize);
    } else if (value < -ratingCount * imageSize / 2) {
      currentRating = 0;
    } else if (value < imageSize) {
      currentRating = Math.ceil(startingValue + value / imageSize);
    } else {
      currentRating = Math.ceil(startingValue);
    }

    return currentRating;
  }

  displayCurrentRating() {
    const { ratingCount, type } = this.props;

    const color = TYPES[type].color;

    return (
      <View style={styles.ratingView}>
        <Text style={styles.ratingText}>Rating: </Text>
        <Text style={[styles.currentRatingText, { color }]}>
          {this.getCurrentRating()}
        </Text>
        <Text style={styles.maxRatingText}>/{ratingCount}</Text>
      </View>
    );
  }

  render() {
    const {
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
      <View style={style}>
        {showRating && this.displayCurrentRating()}
        <View
          style={styles.starsWrapper}
          {...this.state.panResponder.panHandlers}
        >
          <View style={styles.starsInsideWrapper}>
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

Rating.propTypes = {
  type: PropTypes.string,
  ratingImage: Image.propTypes.source,
  ratingColor: PropTypes.string,
  ratingBackgroundColor: PropTypes.string,
  ratingCount: PropTypes.number,
  imageSize: PropTypes.number,
  onFinishRating: PropTypes.func,
  showRating: PropTypes.bool,
  style: View.propTypes.style,
};
