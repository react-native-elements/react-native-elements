import React from 'react';
import { Animated, View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import theme from '../../config/theme';
import { ThemeProvider } from '../../config';

import ThemedSwiper, { Swiper } from '../Swiper';
import { Button } from '../../buttons/Button';

describe('Swiper Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Swiper theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('Swiper Directions', () => {
    it('should display vertical swiper', () => {
      const component = shallow(<Swiper theme={theme} direction="vertical" />);

      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  it('should apply values from theme', () => {
    const testTheme = {
      Swiper: {
        direction: 'vertical',
      },
    };

    const component = create(
      <ThemeProvider theme={testTheme}>
        <ThemedSwiper />
      </ThemeProvider>
    );

    expect(
      component.root.findAllByType(Animated.View)[0].props.style.flexDirection
    ).toBe('column');
    expect(component.toJSON()).toMatchSnapshot();
  });
});
