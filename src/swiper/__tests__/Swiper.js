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

  it('componentWillUnmount should be called on unmount', () => {
    const component = shallow(<Swiper theme={theme} />);
    const componentWillUnmount = jest.spyOn(
      component.instance(),
      'componentWillUnmount'
    );

    component.unmount();

    expect(componentWillUnmount).toHaveBeenCalled();
  });

  it('should correct restart autoplay', () => {
    const component = shallow(<Swiper theme={theme} autoplayTimeout={3} />);
    const startAutoplay = jest.spyOn(component.instance(), 'startAutoplay');
    const stopAutoplay = jest.spyOn(component.instance(), 'stopAutoplay');

    component.instance().stopAutoplay();
    component.instance().startAutoplay();

    expect(stopAutoplay).toHaveBeenCalled();
    expect(startAutoplay).toHaveBeenCalled();
  });

  describe('PanResponder Callbacks', () => {
    it('should allow to move', () => {
      const component = shallow(<Swiper theme={theme} />);

      expect(
        component
          .instance()
          ._getPanResponderCallbacks()
          .onMoveShouldSetPanResponderCapture(null, { dx: 6, dy: 6 })
      ).toBeTruthy();
      expect(
        component
          .instance()
          ._getPanResponderCallbacks()
          .onMoveShouldSetPanResponderCapture(null, { dx: 4, dy: 6 })
      ).toBeFalsy();
    });

    it('should deny to move by disabling gestures', () => {
      const component = shallow(
        <Swiper theme={theme} gesturesEnabled={false} />
      );

      expect(
        component
          .instance()
          ._getPanResponderCallbacks()
          .onMoveShouldSetPanResponderCapture()
      ).toBeFalsy();
    });

    it('touch release handler should be called without issues', () => {
      const component = shallow(<Swiper theme={theme} />);

      expect(
        component
          .instance()
          ._getPanResponderCallbacks()
          .onPanResponderRelease(null, { x0: 0, y0: 0, moveX: 0, moveY: 0 })
      ).toBeUndefined();
    });

    it('should works without issue', () => {
      const component = shallow(<Swiper theme={theme} />);

      expect(
        component
          .instance()
          ._getPanResponderCallbacks()
          .onPanResponderTerminationRequest()
      ).toBeFalsy();
      expect(
        component
          .instance()
          ._getPanResponderCallbacks()
          .onMoveShouldSetResponderCapture()
      ).toBeTruthy();
      expect(
        component
          .instance()
          ._getPanResponderCallbacks()
          .onPanResponderGrant()
      ).toBeUndefined();
    });
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
