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

  it('should render fixed without issues', () => {
    const component = shallow(<Swiper theme={theme} positionFixed />);

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

  it('should resize without issues', () => {
    const component = shallow(<Swiper theme={theme} />);

    component
      .instance()
      ._onLayout({ nativeEvent: { layout: { width: 50, height: 50 } } });

    expect(component.instance().state.width).toBe(50);
  });

  describe('ref behavior', () => {
    it('should correct restart autoplay', () => {
      const component = shallow(<Swiper theme={theme} autoplayTimeout={3} />);
      const startAutoplay = jest.spyOn(component.instance(), 'startAutoplay');
      const stopAutoplay = jest.spyOn(component.instance(), 'stopAutoplay');

      component.instance().stopAutoplay();
      component.instance().startAutoplay();

      expect(stopAutoplay).toHaveBeenCalled();
      expect(startAutoplay).toHaveBeenCalled();
    });

    it('should autoplay timeout method complete without issues', () => {
      const component = shallow(
        <Swiper theme={theme}>
          <View />
          <View />
        </Swiper>
      );

      component.instance()._autoplayTimeout();

      expect(component.instance().getActiveIndex()).toBe(1);
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

    it('should call events handlers', () => {
      const onAnimationStart = jest.fn();
      const onAnimationEnd = jest.fn();
      const onIndexChanged = jest.fn();

      const component = shallow(
        <Swiper
          theme={theme}
          initialSlide={1}
          onAnimationStart={onAnimationStart}
          onAnimationEnd={onAnimationEnd}
          onIndexChanged={onIndexChanged}
        >
          <View />
          <View />
        </Swiper>
      );
      component.instance().goTo(); // 0

      expect(onAnimationStart).toHaveBeenCalled();
      expect(onAnimationEnd).toHaveBeenCalled();
      expect(onIndexChanged).toHaveBeenCalled();
    });

    it('should go to prev slide on vertical swiper', () => {
      const component = shallow(
        <Swiper theme={theme} initialSlide={1} direction="vertical">
          <View />
          <View />
        </Swiper>
      );
      const instance = component.instance();
      instance.goToPrev();

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

    it('should not go to prev', () => {
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

    it('should not go to next', () => {
      const component = shallow(
        <Swiper theme={theme} initialSlide={1}>
          <View />
          <View />
        </Swiper>
      );
      const instance = component.instance();
      instance.goToNext();

      expect(instance.getActiveIndex()).toBe(1);
    });
  });

  describe('PanResponder Callbacks', () => {
    it('should allow to move', () => {
      const onAnimationStart = jest.fn();

      const component = shallow(
        <Swiper theme={theme} onAnimationStart={onAnimationStart} />
      );

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

      expect(onAnimationStart).toHaveBeenCalled();
    });

    it('should deny to move by min distance', () => {
      const component = shallow(
        <Swiper
          direction="vertical"
          theme={theme}
          containerStyle={{ width: 50, height: 50 }}
        />
      );

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
          .onMoveShouldSetPanResponderCapture(null, { dx: 4, dy: 4 })
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
      const component = shallow(
        <Swiper theme={theme} containerStyle={{ width: 50, height: 10 }} />
      );

      expect(
        component
          .instance()
          ._getPanResponderCallbacks()
          .onPanResponderRelease(null, { x0: 0, y0: 0, moveX: 5, moveY: 0 })
      ).toBeUndefined();
    });

    it('touch release handler should skip index changing', () => {
      const component = shallow(<Swiper theme={theme} />);

      component
        .instance()
        ._onLayout({ nativeEvent: { layout: { width: 50, height: 50 } } });

      expect(
        component
          .instance()
          ._getPanResponderCallbacks()
          .onPanResponderRelease(null, { x0: 0, y0: 0, moveX: 5, moveY: 0 })
      ).toBeUndefined();
    });

    it('touch release handler on vertical swiper should be called without issues', () => {
      const component = shallow(
        <Swiper
          theme={theme}
          direction="vertical"
          containerStyle={{ width: 50, height: 50 }}
        />
      );

      expect(
        component
          .instance()
          ._getPanResponderCallbacks()
          .onPanResponderRelease(null, { x0: 0, y0: 0, moveX: 5, moveY: 6 })
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
