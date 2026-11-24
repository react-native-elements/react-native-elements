import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { render } from '@testing-library/react-native';
import { describe, it, expect } from '@jest/globals';
import BackgroundImage from '../BackgroundImage';

const source = { uri: 'https://example.com/bg.png' };

describe('BackgroundImage', () => {
  it('renders an absolutely positioned Image behind its children', () => {
    const { UNSAFE_getByType, getByText } = render(
      <BackgroundImage source={source} style={{ width: 100, height: 50 }}>
        <Text>child</Text>
      </BackgroundImage>
    );
    const image = UNSAFE_getByType(Image);
    expect(image.props.source).toEqual(source);
    expect(StyleSheet.flatten(image.props.style)).toMatchObject({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: 100,
      height: 50,
    });
    expect(getByText('child')).toBeTruthy();
  });

  it('applies style to the container and imageStyle to the image', () => {
    const { UNSAFE_getAllByType, UNSAFE_getByType } = render(
      <BackgroundImage
        source={source}
        style={{ padding: 10 }}
        imageStyle={{ opacity: 0.5 }}
        resizeMode="cover"
      />
    );
    const container = UNSAFE_getAllByType(View)[0];
    expect(StyleSheet.flatten(container.props.style)).toMatchObject({
      padding: 10,
    });
    const image = UNSAFE_getByType(Image);
    expect(StyleSheet.flatten(image.props.style)).toMatchObject({
      opacity: 0.5,
    });
    expect(image.props.resizeMode).toBe('cover');
  });

  it('forwards imageRef to the inner Image', () => {
    const imageRef = React.createRef<Image>();
    render(<BackgroundImage source={source} imageRef={imageRef} />);
    expect(imageRef.current).not.toBeNull();
  });
});
