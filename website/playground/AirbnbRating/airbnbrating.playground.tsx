import * as React from 'react';
import { AirbnbRating } from '@rneui/base';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const AirbnbRatingPlayground = () => {
  const params = useView({
    componentName: 'AirbnbRating',
    props: {
      count: {
        type: PropTypes.Number,
        value: 5,
      },
      defaultRating: {
        type: PropTypes.Number,
        value: 1,
      },
      reviews: {
        type: PropTypes.Array,
        value: `["Terrible", "Bad", "Okay", "Good", "Great"]`,
      },

      onFinishRating: {
        type: PropTypes.Function,
        value: `() => console.log("onFinishRating()")`,
      },

      showRating: {
        type: PropTypes.Boolean,
        value: true,
      },
    },
    scope: {
      AirbnbRating,
    },
    imports: {
      '@rneui/base': {
        named: ['AirbnbRating'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default AirbnbRatingPlayground;
