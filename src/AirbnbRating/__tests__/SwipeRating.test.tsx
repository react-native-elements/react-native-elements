import React from 'react';
import { render } from '@testing-library/react-native';
import SwipeRating from '../SwipeRating';

describe('SwipeRating', () => {
  it('should export SwipeRating', () => {
    const SwipeRatingLocal = require('../SwipeRating');
    expect(SwipeRatingLocal).toBeDefined();
  });

  it('should match snapshot', () => {
    const { toJSON } = render(<SwipeRating />); //to ensure default props are not changed
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with custom props', () => {
    const ratingsCount = 9;

    const { getAllByTestId } = render(
      <SwipeRating ratingCount={ratingsCount} />
    );
    const stars = getAllByTestId('RNEUI__Star');
    expect(stars).toHaveLength(ratingsCount);
  });

  it('should render with different type', () => {
    const heartImage = require('../images/heart.png');
    const { getAllByTestId } = render(<SwipeRating type="heart" />);
    const swipeRatings = getAllByTestId('RNEUI__Star-image');

    swipeRatings.forEach((swipeRating) => {
      expect(swipeRating.props.source).toEqual(heartImage); // Check if the image source is the heart image
    });
  });

  it('should render with custom image', () => {
    const customImage = require('../images/bell.png');
    const { getAllByTestId } = render(
      <SwipeRating type="custom" ratingImage={customImage} />
    );
    const swipeRatings = getAllByTestId('RNEUI__Star-image');

    swipeRatings.forEach((swipeRating) => {
      expect(swipeRating.props.source).toEqual(customImage); // Check if the image source is the custom image
    });
  });

  it('should render with custom star color', () => {
    const customStarColor = 'red';
    const { getAllByTestId } = render(
      <SwipeRating tintColor={customStarColor} />
    );
    const stars = getAllByTestId('RNEUI__Star-image');
    stars.forEach((star) => {
      expect(star.props.style.tintColor).toBe(customStarColor);
    });
  });

  it('should render with custom star size', () => {
    const customStarSize = 50;
    const { getAllByTestId } = render(
      <SwipeRating imageSize={customStarSize} />
    );
    const stars = getAllByTestId('RNEUI__Star-image');
    stars.forEach((star) => {
      expect(star.props.style.width).toBe(customStarSize);
      expect(star.props.style.height).toBe(customStarSize);
    });
  });

  it('should show the correct number of stars', () => {
    const ratingsCount = 5;
    const { getAllByTestId } = render(
      <SwipeRating ratingCount={ratingsCount} />
    );
    const stars = getAllByTestId('RNEUI__Star');
    expect(stars).toHaveLength(ratingsCount);
  });

  //show rating should show the text
  it('should show the correct rating text', () => {
    const ratingsCount = 5;
    const { getByTestId } = render(
      <SwipeRating ratingCount={ratingsCount} showRating />
    );
    const ratingText = getByTestId('RNEUI__SwipeRating-showRating');
    expect(ratingText).toBeTruthy();
  });
});
