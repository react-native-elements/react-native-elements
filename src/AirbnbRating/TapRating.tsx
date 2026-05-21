import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  Text,
  View,
  type ImageStyle,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import Star from './components/Star';

export type TapRatingProps = {
  /**
   * Total number of ratings to display.
   *
   * @default 5
   */
  count?: number;

  /**
   * Labels to show when each value is tapped.
   *
   * e.g. If the first star is tapped, then value in index 0 will be used as the label.
   *
   * @default ['Terrible', 'Bad', 'Okay', 'Good', 'Great']
   */
  reviews?: string[];

  /**
   * Determines if to show the reviews above the rating.
   *
   * @default true
   */
  showRating?: boolean;

  /**
   * Color value for review.
   *
   * @default #f1c40f
   */
  reviewColor?: string;

  /**
   * Size value for review text.
   *
   * @default 40
   */
  reviewSize?: number;

  /**
   * Initial value for the rating
   *
   * @default 3
   */
  defaultRating?: number;

  /**
   * Style for star container
   *
   * @default undefined
   */
  starContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Style for rating container
   *
   * @default undefined
   */
  ratingContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Callback method when the user finishes rating. Gives you the final rating value as a whole number
   */
  onFinishRating?: (value: number) => void;

  /**
   * Whether the rating can be modified by the user
   *
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Color value for filled stars.
   *
   * @default #004666
   */
  selectedColor?: string;

  /**
   * Color value for not filled stars.
   *
   * @default #BDC3C7
   */
  unSelectedColor?: string;

  /**
   * Size of rating image
   *
   * @default 40
   */
  size?: number;

  /**
   * Pass in a custom base image source
   */
  starImage?: string;

  /**
   * Style for star
   */
  starStyle?: ImageStyle;
};

const TapRating: React.FunctionComponent<TapRatingProps> = ({
  count = 5,
  reviews = ['Terrible', 'Bad', 'Okay', 'Good', 'Great'],
  showRating = true,
  reviewColor = 'rgba(230, 196, 46, 1)',
  reviewSize = 25,
  size: reviewImageSize = 40,
  defaultRating = 3,
  starContainerStyle,
  ratingContainerStyle,
  onFinishRating,
  selectedColor,
  unSelectedColor,
  isDisabled = false,
  starImage,
  starStyle,
}) => {
  const [position, setPosition] = useState<number>(defaultRating);

  useEffect(() => {
    if (defaultRating === null || defaultRating === undefined) {
      setPosition(3);
    } else {
      setPosition(defaultRating);
    }
  }, [defaultRating]);

  const renderStars = (rating_array: React.ReactElement[]) => {
    return rating_array.map((star) => star);
  };

  const starSelectedInPosition = (selectedPosition: number) => {
    if (typeof onFinishRating === 'function') {
      onFinishRating(selectedPosition);
    }
    setPosition(selectedPosition);
  };

  const rating_array = [];

  for (let index = 0; index < count; index++) {
    rating_array.push(
      <Star
        key={index}
        position={index + 1}
        starSelectedInPosition={starSelectedInPosition}
        fill={position >= index + 1}
        isDisabled={isDisabled}
        selectedColor={selectedColor}
        unSelectedColor={unSelectedColor}
        size={reviewImageSize}
        starImage={starImage}
        starStyle={starStyle}
      />
    );
  }

  return (
    <View
      style={StyleSheet.flatten([styles.ratingContainer, ratingContainerStyle])}
      testID="RNEUI__TapRating"
    >
      {showRating && (
        <Text
          style={StyleSheet.flatten([
            styles.reviewText,
            { fontSize: reviewSize, color: reviewColor },
          ])}
          testID="RNEUI__TapRating-showRating"
        >
          {reviews[position - 1]}
        </Text>
      )}
      <View
        style={StyleSheet.flatten([styles.starContainer, starContainerStyle])}
        testID="RNEUI__TapRating-starContainer"
      >
        {renderStars(rating_array)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewText: {
    fontWeight: 'bold',
    margin: 10,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TapRating;
