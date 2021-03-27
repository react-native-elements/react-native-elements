import { shallow } from 'enzyme';
import SkeletonWithTheme, { Skeleton } from '../Skeleton';
import toJson from 'enzyme-to-json';
import React from 'react';
import { colors, ThemeProvider } from '../../config';
import {
  defaultProps,
  defaultContainerStyle,
  createDefaultLinearGradientProps,
} from '../defaultConfig';
import { act, create } from 'react-test-renderer';

describe('Skeleton component', () => {
  jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

  const outerProps = {
    fluid: true,
    rounded: true,
    backgroundColor: 'red',
    skeletonColor: 'green',
    containerStyle: {
      borderWidth: 1,
    },
    linearGradientProps: {
      useAngle: true,
      angle: 10,
    },
  };

  it('should render component properly', () => {
    const component = shallow(<Skeleton />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should handle default props', () => {
    const component = shallow(<Skeleton />);

    const props = component.root().props();
    const { width, height, containerStyle } = defaultProps;

    const { style } = props;

    expect(style.width).toEqual(width);
    expect(style.height).toEqual(height);
    expect(style).toMatchObject(containerStyle);
    expect(style).toMatchObject(defaultContainerStyle);

    const skeletonComponent = component.find({ testID: 'skeleton-test' });

    const defaultLinearGradientProps = createDefaultLinearGradientProps(
      colors.secondary,
      colors.primary
    );

    expect(skeletonComponent.props()).toMatchObject(defaultLinearGradientProps);
  });

  it('should handle outer props', () => {
    const {
      fluid,
      rounded,
      backgroundColor,
      skeletonColor,
      containerStyle,
      linearGradientProps,
    } = outerProps;

    const component = shallow(
      <Skeleton
        fluid={fluid}
        rounded={rounded}
        backgroundColor={backgroundColor}
        skeletonColor={skeletonColor}
        containerStyle={containerStyle}
        linearGradientProps={linearGradientProps}
      />
    );

    const { style } = component.root().props();

    expect(style.backgroundColor).toEqual(backgroundColor);
    expect(style.borderRadius).toBeGreaterThan(1000);
    expect(style.width).toEqual('100%');
    expect(style.height).toEqual('100%');

    const skeletonComponent = component.find({ testID: 'skeleton-test' });

    const skeletonProps = skeletonComponent.props();

    expect(skeletonProps.colors).toEqual([
      backgroundColor,
      skeletonColor,
      backgroundColor,
    ]);
    expect(skeletonProps).toMatchObject(linearGradientProps);
  });

  it('should handle props from ThemeProvider', () => {
    const {
      fluid,
      rounded,
      backgroundColor,
      skeletonColor,
      containerStyle,
      linearGradientProps,
    } = outerProps;

    const component = create(
      <ThemeProvider
        theme={{
          Skeleton: {
            fluid,
            rounded,
            backgroundColor,
            skeletonColor,
            containerStyle,
            linearGradientProps,
          },
        }}
      >
        <SkeletonWithTheme />
      </ThemeProvider>
    );

    const skeletonContainer = component.root.findByProps({
      testID: 'skeleton-container-test',
    });

    const { style } = skeletonContainer.props;

    expect(style.backgroundColor).toEqual(backgroundColor);
    expect(style.borderRadius).toBeGreaterThan(1000);
    expect(style.width).toEqual('100%');
    expect(style.height).toEqual('100%');

    const skeletonComponent = component.root.findByProps({
      testID: 'skeleton-test',
    });

    const skeletonProps = skeletonComponent.props;

    expect(skeletonProps.colors).toEqual([
      backgroundColor,
      skeletonColor,
      backgroundColor,
    ]);
    expect(skeletonProps).toMatchObject(linearGradientProps);
  });

  it('should fit animation width state with parent container width', () => {
    const nativeEvent = {
      layout: {
        width: 200,
      },
    };

    const component = shallow(<Skeleton />);

    act(() => {
      component.props().onLayout({ nativeEvent });
    });

    const skeletonComponent = component.find({ testID: 'skeleton-test' });

    const {
      layout: { width },
    } = nativeEvent;

    expect(
      skeletonComponent.props().style.transform[0].translateX._config
        .outputRange
    ).toEqual([-width, width]);
  });
});
