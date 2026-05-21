import React from 'react';
import TapRating, { type TapRatingProps as RatingProps } from './TapRating';
import { RneFunctionComponent } from '../helpers';

export interface TapRatingProps extends RatingProps {}

export const AirbnbRating: RneFunctionComponent<TapRatingProps> = (props) => {
  return <TapRating {...props} />;
};

AirbnbRating.displayName = 'AirbnbRating';
