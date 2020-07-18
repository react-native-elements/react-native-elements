import React from 'react';
import { Platform, Image as RNImage } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../config';
import ThemedImage, { Image } from '../Image';

jest.useFakeTimers();

describe('Image Component', () => {
  beforeAll(() => {
    // useNativeDriver isn't available in jest, so just silencing the warning
    global.console.warn = () => null;
  });

  it('should render on ios', () => {
    const component = shallow(
      <Image source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }} />
    );

    component.find({ testID: 'RNE__Image' }).prop('onLoad')();
    jest.runOnlyPendingTimers();

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render on android', () => {
    Platform.OS = 'android';
    Platform.Version = 25;

    const component = shallow(
      <Image source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }} />
    );

    component.find({ testID: 'RNE__Image' }).prop('onLoad')();
    jest.runOnlyPendingTimers();

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render the appropriate testId when one is passed.', () => {
    const component = shallow(
      <Image
        testID="customTestId"
        source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
      />
    );

    const image = component.find({ testID: 'customTestId' });

    expect(image.length).toBe(1);
  });

  it('should render the appropriate testId when one is not passed.', () => {
    const component = shallow(
      <Image source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }} />
    );

    const image = component.find({ testID: 'RNE__Image' });

    expect(image.length).toBe(1);
  });

  it('should apply values from theme', () => {
    const theme = {
      Image: {
        placeholderStyle: {
          backgroundColor: 'red',
        },
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedImage source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }} />
      </ThemeProvider>
    );

    expect(
      component.root.findByProps({ testID: 'RNE__Image__placeholder' }).props
        .style.backgroundColor
    ).toBe('red');
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render without the transition', () => {
    const component = shallow(
      <Image
        source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
        transition={false}
      />
    );

    component.find({ testID: 'RNE__Image' }).prop('onLoad')();
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply value from style prop', () => {
    const component = shallow(
      <Image
        source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
        style={{ tintColor: 'red' }}
      />
    );

    expect(component.find({ testID: 'RNE__Image' }).props().style).toEqual(
      expect.objectContaining({
        tintColor: 'red',
      })
    );
    expect(toJson(component)).toMatchSnapshot();
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
