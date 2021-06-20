import React from 'react';
import {
  Rating as SwipeRating,
  SwipeRatingProps as RatingProps,
} from 'react-native-ratings';
import { RneFunctionComponent } from '../helpers';

export type SwipeRatingProps = RatingProps;

export const Rating: RneFunctionComponent<SwipeRatingProps> = () => {
  return <SwipeRating />;
};

Rating.displayName = 'Rating';
