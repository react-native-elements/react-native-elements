import React from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { Rating, AirbnbRating } from '@rneui/themed';
import { Header } from '../components/header';

const WATER_IMAGE = require('../images/water.png');

type RatingsComponentProps = {};

const Ratings: React.FunctionComponent<RatingsComponentProps> = () => {
  const ratingCompleted = (rating: number) => {
    console.log('Rating is: ' + rating);
  };

  const ratingProps = {};
  return (
    <View style={styles.container}>
      <Header title="Ratings" view="rating" />
      <ScrollView style={styles.viewContainer}>
        <Text
          style={[
            styles.titleText,
            { marginTop: 30, color: '#e74c3c', fontSize: 22 },
          ]}
        >
          Airbnb-style Tap Ratings
        </Text>
        <AirbnbRating />
        <AirbnbRating
          count={11}
          reviews={[
            'Terrible',
            'Bad',
            'Meh',
            'OK',
            'Good',
            'Hmm...',
            'Very Good',
            'Wow',
            'Amazing',
            'Unbelievable',
            'Jesus',
          ]}
          defaultRating={11}
          size={20}
        />
        <Text
          style={[
            styles.titleText,
            { marginTop: 30, color: '#9b59b6', fontSize: 22 },
          ]}
        >
          Whatsapp-style Swipe Ratings
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
          }}
        >
          <Rating
            showRating
            imageSize={40}
            onFinishRating={ratingCompleted}
            {...ratingProps}
            style={{ paddingVertical: 10 }}
          />
          <Rating
            showRating
            type="star"
            fractions={1}
            startingValue={3.6}
            readonly
            imageSize={40}
            onFinishRating={ratingCompleted}
            style={{ paddingVertical: 10 }}
          />
          <Rating
            type="custom"
            ratingImage={WATER_IMAGE}
            ratingColor="#3498db"
            ratingCount={10}
            imageSize={30}
            onFinishRating={ratingCompleted}
            showRating
            style={{ paddingVertical: 10 }}
          />
          <Rating
            type="heart"
            ratingCount={3}
            fractions={2}
            startingValue={1.57}
            imageSize={40}
            onFinishRating={ratingCompleted}
            showRating
            style={styles.rating}
          />
        </View>
      </ScrollView>
    </View>
  );
};
/*
Ratings.navigationOptions = {
  title: 'Ratings Component',
  header: null,
};
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    paddingTop: 50,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : '',
    color: '#27ae60',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : '',
    color: '#34495e',
  },
  viewContainer: {
    flex: 1,
  },
  rating: {
    paddingVertical: 10,
  },
});

export default Ratings;
