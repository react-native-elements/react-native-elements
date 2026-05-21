import React from 'react';
import SwipeRating from '../AirbnbRating/SwipeRating';
export const Rating = (props) => {
    return React.createElement(SwipeRating, Object.assign({}, props));
};
Rating.displayName = 'Rating';
