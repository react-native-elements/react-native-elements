import React from 'react';
import { RneFunctionComponent } from '../helpers';
import SwipeRating, {
  type SwipeRatingProps as RatingProps,
} from '../AirbnbRating/SwipeRating';

export interface SwipeRatingProps extends RatingProps {}
export const Rating: RneFunctionComponent<SwipeRatingProps> = (props) => {
  return <SwipeRating {...props} />;
};

Rating.displayName = 'Rating';
