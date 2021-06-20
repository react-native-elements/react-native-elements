import React from 'react';
import {
  AirbnbRating as TapRating,
  TapRatingProps as RatingProps,
} from 'react-native-ratings';
import { RneFunctionComponent } from '../helpers';

export type TapRatingProps = RatingProps;

export const AirbnbRating: RneFunctionComponent<TapRatingProps> = () => {
  return <TapRating />;
};

AirbnbRating.displayName = 'AirbnbRating';
