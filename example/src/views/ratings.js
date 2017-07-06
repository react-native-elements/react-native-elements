import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { Rating } from 'react-native-elements';
const WATER_IMAGE = require('../images/water.png');

class Ratings extends React.Component {
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.titleText}>React Native Ratings</Text>
          <Text style={styles.subtitleText}>gestures for the win!</Text>
        </View>
        <View style={styles.viewContainer}>
          <Rating
            showRating
            imageSize={40}
            onFinishRating={this.ratingCompleted}
            style={{ paddingVertical: 10 }}
          />
          <Rating
            showRating
            type="star"
            fractions={1}
            startingValue={3.6}
            readonly
            imageSize={40}
            onFinishRating={this.ratingCompleted}
            style={{ paddingVertical: 10 }}
          />
          <Rating
            type="custom"
            ratingImage={WATER_IMAGE}
            ratingColor="#3498db"
            ratingBackgroundColor="#ceee"
            ratingCount={10}
            imageSize={30}
            onFinishRating={this.ratingCompleted}
            showRating
            style={{ paddingVertical: 10 }}
          />
          <Rating
            type="heart"
            ratingCount={3}
            fractions={2}
            startingValue={1.57}
            imageSize={40}
            onFinishRating={this.ratingCompleted}
            showRating
            style={{ paddingVertical: 10 }}
          />
        </View>
      </View>
    );
  }
}

Ratings.navigationOptions = {
  title: 'Ratings Component',
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headingContainer: {
    paddingTop: 20,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : null,
    color: '#27ae60',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
    color: '#34495e',
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Ratings;
