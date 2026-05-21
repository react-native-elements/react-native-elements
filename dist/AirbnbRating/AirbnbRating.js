import React from 'react';
import TapRating from './TapRating';
export const AirbnbRating = (props) => {
    return React.createElement(TapRating, Object.assign({}, props));
};
AirbnbRating.displayName = 'AirbnbRating';
