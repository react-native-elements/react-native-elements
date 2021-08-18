import React from 'react';
import { Image as RNImage, Text } from 'react-native';
import Image from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';

jest.useFakeTimers();

describe('Image Component', () => {
  const FAKE_URI = 'https://i.imgur.com/0y8Ftya.jpg';
  it('should render', () => {
    const { toJSON } = renderWithWrapper(
      <Image testID="customTestId" source={{ uri: FAKE_URI }} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the appropriate testId when one is passed.', () => {
    const { queryByTestId } = renderWithWrapper(
      <Image testID="customTestId" source={{ uri: FAKE_URI }} />
    );
    const image = queryByTestId('customTestId');
    expect(image.props.source.uri).toBe(FAKE_URI);
  });

  it('should render the appropriate testId when one is not passed.', () => {
    const { queryByTestId } = renderWithWrapper(
      <Image source={{ uri: FAKE_URI }} />
    );
    const image = queryByTestId('RNE__Image');
    expect(image.props.source.uri).toBe(FAKE_URI);
  });

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
      textTheme
    );
    const placeholder = queryByTestId('RNE__Image__placeholder');
    expect(placeholder.props.style.backgroundColor).toBe('red');
  });

  it('should render without the transition', () => {
    const { queryByTestId } = renderWithWrapper(
      <Image source={{ uri: FAKE_URI }} transition={false} />
    );
    const image = queryByTestId('RNE__Image');
    expect(image.props.onLoad).not.toBeNull();
  });

  it('should render PlaceholderContent', () => {
    const { queryByTestId } = renderWithWrapper(
      <Image
        source={{ uri: FAKE_URI }}
        PlaceholderContent={<Text testID="text">MyText</Text>}
      />
    );
    const imageText = queryByTestId('text');
    expect(imageText.props.children).toBe('MyText');
  });

  it('should apply value from style prop', () => {
    const { queryByTestId } = renderWithWrapper(
      <Image source={{ uri: FAKE_URI }} style={{ tintColor: 'red' }} />
    );
    const image = queryByTestId('RNE__Image');
    expect(image.props.style.tintColor).toBe('red');
  });

  it('should apply value from childrenContainerStyle prop', () => {
    const { queryByTestId } = renderWithWrapper(
      <Image
        source={{ uri: FAKE_URI }}
        childrenContainerStyle={{
          borderWidth: 1,
          borderColor: 'red',
        }}
      />
    );
    const childContainer = queryByTestId('RNE__Image__children__container');

    expect(childContainer.props.style).toMatchObject({
      borderWidth: 1,
      borderColor: 'red',
    });
  });

  it('static methods should be present', () => {
    expect(Image.getSize).toBe(RNImage.getSize);
    expect(Image.getSizeWithHeaders).toBe(RNImage.getSizeWithHeaders);
    expect(Image.prefetch).toBe(RNImage.prefetch);
    expect(Image.abortPrefetch).toBe(RNImage.abortPrefetch);
    expect(Image.queryCache).toBe(RNImage.queryCache);
    expect(Image.resolveAssetSource).toBe(RNImage.resolveAssetSource);
  });
});
