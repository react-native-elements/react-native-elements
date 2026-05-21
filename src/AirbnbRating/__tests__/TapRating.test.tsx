import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import TapRating from '../TapRating';

describe('TapRating Aka AirbnbRating', () => {
  it('should export SwipeRating', () => {
    const TapRatingLocal = require('../TapRating');
    expect(TapRatingLocal).toBeDefined();
  });

  it('should match snapshot', () => {
    const { toJSON } = render(<TapRating />); //to ensure default props are not changed
    expect(toJSON()).toMatchSnapshot();
  });

  it('show rating true should show rating', () => {
    const { getByTestId } = render(<TapRating showRating={true} />);
    const ratingText = getByTestId('RNEUI__TapRating-showRating');
    expect(ratingText).toBeOnTheScreen();
  });

  it('number of stars should match count prop', () => {
    const { getAllByTestId } = render(<TapRating count={4} />);
    const ratingStar = getAllByTestId('RNEUI__Star');
    expect(ratingStar).toHaveLength(4);
  });

  it('should show reviews', () => {
    const defaultRating = 1;
    const ratingReviews = ['Terrible', 'Bad', 'Okay', 'Good', 'Great'];

    const { getByTestId } = render(
      <TapRating reviews={ratingReviews} defaultRating={defaultRating} />
    );
    const ratingText = getByTestId('RNEUI__TapRating-showRating');
    expect(ratingText).toBeOnTheScreen();
    expect(ratingText).toHaveTextContent(
      ratingReviews[defaultRating - 1] || ''
    );
  });

  it('review size should match reviewSize prop', () => {
    const reviewSize = 32;
    const { getByTestId } = render(<TapRating reviewSize={reviewSize} />);
    const ratingText = getByTestId('RNEUI__TapRating-showRating');
    expect(ratingText.props.style.fontSize).toBe(reviewSize);
  });

  it('rating image size should should match image size', () => {
    const imageSize = 32;
    const { getAllByTestId } = render(<TapRating size={imageSize} />);
    const ratingStars = getAllByTestId('RNEUI__Star-image');
    ratingStars.forEach((star) => {
      expect(star.props.style.width).toBe(imageSize);
      expect(star.props.style.height).toBe(imageSize);
    });
  });

  it('should call onFinishRating with the correct rating when rating is selected', () => {
    const pressableRating = 2;
    const onFinishRating = jest.fn();
    const { getAllByTestId } = render(
      <TapRating onFinishRating={onFinishRating} />
    );
    const ratingStars = getAllByTestId('RNEUI__Star');
    fireEvent.press(ratingStars[pressableRating - 1]);
    expect(onFinishRating).toHaveBeenCalledWith(pressableRating);
  });

  it('should not call onFinishRating when isDisabled is true', () => {
    const onFinishRating = jest.fn();
    const { getAllByTestId } = render(
      <TapRating isDisabled={true} onFinishRating={onFinishRating} />
    );
    const ratingStars = getAllByTestId('RNEUI__Star');
    fireEvent.press(ratingStars[0]);
    expect(onFinishRating).not.toHaveBeenCalled();
  });

  //image test
  it('should use custom star image', () => {
    const customStarImage = require('../images/bell.png');
    const { getAllByTestId } = render(
      <TapRating starImage={customStarImage} />
    );
    const ratingStars = getAllByTestId('RNEUI__Star-image');
    ratingStars.forEach((star) => {
      expect(star.props.source).toEqual(customStarImage);
    });
  });

  it('selected color should match selectedColor prop', () => {
    const selectedColor = 'red';
    const { getAllByTestId } = render(
      <TapRating
        selectedColor={selectedColor}
        count={5}
        defaultRating={5} //so that all stars are selected
      />
    );
    const ratingStars = getAllByTestId('RNEUI__Star-image');
    ratingStars.forEach((star) => {
      expect(star.props.style.tintColor).toBe(selectedColor);
    });
  });

  it('unselected color should match unSelectedColor prop', () => {
    const unSelectedColor = 'blue';
    const { getAllByTestId } = render(
      <TapRating
        unSelectedColor={unSelectedColor}
        count={5}
        defaultRating={0} //so that all stars are unselected
      />
    );
    const ratingStars = getAllByTestId('RNEUI__Star-image');
    ratingStars.forEach((star) => {
      expect(star.props.style.tintColor).toBe(unSelectedColor);
    });
  });
  it('should apply custom star style', () => {
    const customStarStyle = { backgroundColor: '#aabbcc' };
    const { getAllByTestId } = render(
      <TapRating starStyle={customStarStyle} />
    );
    const ratingStars = getAllByTestId('RNEUI__Star-image');
    ratingStars.forEach((star) => {
      expect(star.props.style.backgroundColor).toEqual(
        customStarStyle.backgroundColor
      );
    });
  });

  it('should apply custom rating container style', () => {
    const customContainerStyle = { backgroundColor: '#aabbcc' };
    const { getByTestId } = render(
      <TapRating ratingContainerStyle={customContainerStyle} />
    );
    const ratingContainer = getByTestId('RNEUI__TapRating');
    expect(ratingContainer.props.style.backgroundColor).toEqual(
      customContainerStyle.backgroundColor
    );
  });

  it('should apply custom star container style', () => {
    const customStarContainerStyle = { backgroundColor: '#aabbcc' };
    const { getByTestId } = render(
      <TapRating starContainerStyle={customStarContainerStyle} />
    );
    const ratingContainer = getByTestId('RNEUI__TapRating-starContainer');
    expect(ratingContainer.props.style.backgroundColor).toEqual(
      customStarContainerStyle.backgroundColor
    );
  });
});
