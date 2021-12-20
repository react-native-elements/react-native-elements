import React from 'react';
import { Animated, View } from 'react-native';
import FAB from '..';
import { renderWithWrapper, fireEvent } from '../../../.ci/testHelper';
import { Icon } from '../../Icon';

describe('FAB Component', () => {
  it('should match snapshot', () => {
    const { toJSON } = renderWithWrapper(<FAB title="Hey" size="small" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should have extended fab', () => {
    const { queryByText } = renderWithWrapper(<FAB title="test" />);
    expect(queryByText('test')).toBeTruthy();
  });

  it('should extended small fab', () => {
    const { wrapper, queryByText } = renderWithWrapper(
      <FAB title="test" size="small" />,
      'RNE_BUTTON_WRAPPER'
    );
    expect(queryByText('test')).toBeTruthy();
    expect(wrapper.findAllByType(View)[1].props.style).toMatchObject({
      height: 48,
    });
  });

  it('should have default size as large', () => {
    const { wrapper } = renderWithWrapper(<FAB />, 'RNE_BUTTON_WRAPPER');
    expect(wrapper.findAllByType(View)[1].props.style).toMatchObject({
      height: 56,
      width: 56,
    });
  });

  it('should render size small', () => {
    const { wrapper } = renderWithWrapper(
      <FAB size="small" />,
      'RNE_BUTTON_WRAPPER'
    );
    expect(wrapper.findAllByType(View)[1].props.style).toMatchObject({
      height: 40,
      width: 40,
    });
  });

  it('should render disabled fab', () => {
    const { wrapper } = renderWithWrapper(
      <FAB icon={{ name: 'edit' }} disabled={true} />
    );
    expect(wrapper.findByType(Icon).props).toMatchObject({
      name: 'edit',
    });
  });

  it('should handle onPress', () => {
    const onPress = jest.fn();
    const { queryByA11yRole } = renderWithWrapper(<FAB onPress={onPress} />);
    const button = queryByA11yRole('button');
    fireEvent.press(button);
    expect(onPress).toBeCalledTimes(1);
  });

  it('should use placement left', () => {
    const { wrapper } = renderWithWrapper(<FAB placement="left" />);
    expect(wrapper.findByType(Animated.View).props.style).toMatchObject({
      position: 'absolute',
      bottom: 0,
      left: 0,
    });
  });

  it('should use placement right', () => {
    const { wrapper } = renderWithWrapper(<FAB placement="right" />);
    expect(wrapper.findByType(Animated.View).props.style).toMatchObject({
      position: 'absolute',
      bottom: 0,
      right: 0,
    });
  });
});
