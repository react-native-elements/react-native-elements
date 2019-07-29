import React from 'react';
import { Animated, View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import theme from '../../config/theme';
import { ThemeProvider } from '../../config';

import ThemedSwiper, { Swiper } from '../Swiper';

describe('Swiper Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Swiper theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should display vertical swiper', () => {
    const component = shallow(<Swiper theme={theme} direction="vertical" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should display loop swiper', () => {
    const component = shallow(<Swiper theme={theme} loop />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should display autoplay swiper', () => {
    const component = shallow(<Swiper theme={theme} autoplayTimeout={3} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should display with black active dot', () => {
    const component = shallow(
      <Swiper
        theme={theme}
        dots={{ activeItemStyle: { backgroundColor: 'black' } }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should go to next slide', () => {
    const component = shallow(
      <Swiper theme={theme}>
        <View />
        <View />
      </Swiper>
    );
    const instance = component.instance();
    instance.goToNext();

    expect(instance.getActiveIndex()).toBe(1);
  });

  it('should go to prev slide', () => {
    const component = shallow(
      <Swiper theme={theme} initialIndex={1}>
        <View />
        <View />
      </Swiper>
    );
    const instance = component.instance();
    instance.goToPrev();

    expect(instance.getActiveIndex()).toBe(0);
  });

  it('should go to last slide', () => {
    const component = shallow(
      <Swiper theme={theme} loop>
        <View />
        <View />
      </Swiper>
    );
    const instance = component.instance();
    instance.goToPrev();

    expect(instance.getActiveIndex()).toBe(1);
  });

  it('should go to first slide', () => {
    const component = shallow(
      <Swiper theme={theme} loop initialIndex={1}>
        <View />
        <View />
      </Swiper>
    );
    const instance = component.instance();
    instance.goToNext();

    expect(instance.getActiveIndex()).toBe(0);
  });

  it('should go to slide by index', () => {
    const component = shallow(
      <Swiper theme={theme}>
        <View />
        <View />
      </Swiper>
    );
    const instance = component.instance();
    instance.goTo(1);

    expect(instance.getActiveIndex()).toBe(1);
  });

  it('should go to slide by index on vertical swiper', () => {
    const component = shallow(
      <Swiper theme={theme} direction="vertical">
        <View />
        <View />
      </Swiper>
    );
    const instance = component.instance();
    instance.goTo(1);

    expect(instance.getActiveIndex()).toBe(1);
  });

  it('should not go on vertical swiper', () => {
    const component = shallow(
      <Swiper theme={theme}>
        <View />
        <View />
      </Swiper>
    );
    const instance = component.instance();
    instance.goToPrev();

    expect(instance.getActiveIndex()).toBe(0);
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
