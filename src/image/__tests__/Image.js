import React from 'react';
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

    component.instance().onLoadEnd();
    jest.runOnlyPendingTimers();

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render on android', () => {
    jest.mock('Platform', () => ({
      OS: 'android',
      Version: 25,
      select(obj) {
        return obj.android;
      },
    }));

    const component = shallow(
      <Image source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }} />
    );

    component.instance().onLoadEnd();
    jest.runOnlyPendingTimers();

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
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
});
