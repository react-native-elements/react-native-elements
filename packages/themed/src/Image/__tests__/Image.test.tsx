import React from 'react';
import { Image as RNImage } from 'react-native';
import Image from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('Image Component', () => {
  const FAKE_URI = 'https://i.imgur.com/0y8Ftya.jpg';

  it('should apply values from theme', () => {
    const textTheme = {
      Image: {
        placeholderStyle: {
          backgroundColor: 'red',
        },
      },
    };
    const { queryByTestId } = renderWithWrapper(
      <Image source={{ uri: FAKE_URI }} />,
      '',
      {
        components: textTheme,
      }
    );
    const placeholder = queryByTestId('RNE__Image__placeholder')!;
    expect(placeholder.props.style.backgroundColor).toBe('red');
  });

  it('should have static methods', () => {
    expect(Image.getSize).toBe(RNImage.getSize);
    expect(Image.getSizeWithHeaders).toBe(RNImage.getSizeWithHeaders);
    expect(Image.prefetch).toBe(RNImage.prefetch);
    expect(Image.abortPrefetch).toBe(RNImage.abortPrefetch);
    expect(Image.queryCache).toBe(RNImage.queryCache);
    expect(Image.resolveAssetSource).toBe(RNImage.resolveAssetSource);
  });
});
