import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Rating } from '@rneui/base';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';
import SocialIconPlayground from '.';

const RatingPlayground = () => {
  const params = useView({
    componentName: 'Rating',
    props: {
      fractions: {
        type: PropTypes.Number,
        value: 0,
      },
      imageSize: {
        type: PropTypes.Number,
        value: 70,
      },
      minValue: {
        type: PropTypes.Number,
        value: 0,
      },
      onFinishRating: {
        type: PropTypes.Function,
        value: `() => console.log("onFinishRating()")`,
      },
      onStartRating: {
        type: PropTypes.Function,
        value: `() => console.log("onStartRating()")`,
      },
      ratingBackgroundColor: {
        type: PropTypes.String,
        value: '#FFF',
      },
      tintColor: {
        type: PropTypes.String,
        value: '',
      },
      ratingColor: {
        type: PropTypes.String,
        value: '#FF0',
      },
      ratingCount: {
        type: PropTypes.Number,
        value: 5,
      },
      ratingImage: {
        type: PropTypes.String,
        value: 'star',
      },
      ratingTextColor: {
        type: PropTypes.String,
        value: '#222',
      },
      readonly: {
        type: PropTypes.Boolean,
        value: false,
      },
      reviews: {
        type: PropTypes.Array,
        value: `["Terrible", "Bad", "Okay", "Good", "Great"]`,
      },
      showRating: {
        type: PropTypes.Boolean,
        value: true,
      },
      startingValue: {
        type: PropTypes.Number,
        value: '0',
      },
      style: {
        type: PropTypes.Object,
        value: `{}`,
      },
      type: {
        type: PropTypes.Enum,
        options: {
          star: 'star',
          rocket: 'rocket',
          bell: 'bell',
          heart: 'heart',
          custom: 'custom',
        },
        value: 'star',
      },
    },
    scope: {
      Rating,
    },
    imports: {
      '@rneui/base': {
        named: ['Rating'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default RatingPlayground;
