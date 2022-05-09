import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { TouchableOpacity } from 'react-native';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { Icon } from '../../Icon';
import { Button } from '../index';

describe('Button Component', () => {
  it('should match snapshot', () => {
    const TITLE = 'My Button';
    const { queryByText, wrapper } = renderWithWrapper(
      <Button title={TITLE} />,
      'RNE_BUTTON_WRAPPER'
    );
    expect(queryByText(TITLE)).toBeTruthy();
    expect(wrapper).not.toBeNull();
  });

  it('should render icon', () => {
    const ICON_NAME = 'edit';
    const { wrapper } = renderWithWrapper(
      <Button icon={{ name: ICON_NAME }} />,
      'RNE_BUTTON_WRAPPER'
    );
    const iconTree = wrapper.findByType(Icon);
    expect(iconTree.props.name).toBe(ICON_NAME);
    expect(iconTree).not.toBeNull();
  });

  it('should be call onPress events', () => {
    const onPress = jest.fn();
    const { wrapper } = renderWithWrapper(
      <Button onPress={onPress} />,
      'RNE_BUTTON_WRAPPER'
    );
    const touchableOpacityTree = wrapper.findByType(TouchableOpacity);
    fireEvent(touchableOpacityTree, 'press');
    expect(onPress).toHaveBeenCalled();
  });

  it('should be NOT call onPress events while loading', () => {
    const onPress = jest.fn();
    const { wrapper } = renderWithWrapper(
      <Button loading onPress={onPress} />,
      'RNE_BUTTON_WRAPPER'
    );
    const touchableOpacityTree = wrapper.findByType(TouchableOpacity);
    fireEvent(touchableOpacityTree, 'press');
    expect(onPress).not.toHaveBeenCalled();
  });

  it('should be NOT call onPress events if disabled', () => {
    const onPress = jest.fn();
    const { wrapper } = renderWithWrapper(
      <Button disabled onPress={onPress} />,
      'RNE_BUTTON_WRAPPER'
    );
    const touchableOpacityTree = wrapper.findByType(TouchableOpacity);
    fireEvent(touchableOpacityTree, 'press');
    expect(onPress).not.toHaveBeenCalled();
  });

  describe.each`
    type
    ${'solid'}
    ${'outline'}
    ${'clear'}
  `('$type', ({ type }) => {
    it(`should display ${type} button`, () => {
      const { toJSON } = renderWithWrapper(<Button title={type} type={type} />);
      expect(toJSON()).toMatchSnapshot();
    });

    it(`should display raised ${type} button`, () => {
      const { toJSON } = renderWithWrapper(
        <Button title={type} type={type} raised />
      );
      expect(toJSON()).toMatchSnapshot();
    });

    it(`should display disabled ${type} button`, () => {
      const { toJSON } = renderWithWrapper(
        <Button title={type} type={type} disabled />
      );
      expect(toJSON()).toMatchSnapshot();
    });
  });
  describe.each`
    size
    ${'sm'}
    ${'md'}
    ${'lg'}
  `('$size', ({ size }) => {
    it(`should display ${size} button`, () => {
      const { toJSON } = renderWithWrapper(<Button title={size} size={size} />);
      expect(toJSON()).toMatchSnapshot();
    });

    it(`should display raised ${size} button`, () => {
      const { toJSON } = renderWithWrapper(
        <Button title={size} size={size} raised />
      );
      expect(toJSON()).toMatchSnapshot();
    });

    it(`should display disabled ${size} button`, () => {
      const { toJSON } = renderWithWrapper(
        <Button title={size} size={size} disabled />
      );
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
