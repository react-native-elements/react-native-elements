import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { FullTheme } from '../../config/theme';
import Icon from '../../Icon';
import Button from '../index';

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

  describe('Button type', () => {
    // Test for each type of button variant
    describe.each`
      should have type as
      ${'solid'}
      ${'outline'}
      ${'clear'}
    `('$type', ({ type }) => {
      it(`should display ${type} button`, () => {
        const { toJSON } = renderWithWrapper(<Button title={type} />);
        expect(toJSON()).toMatchSnapshot();
      });

      it(`should display raised ${type} button`, () => {
        const { toJSON } = renderWithWrapper(<Button title={type} raised />);
        expect(toJSON()).toMatchSnapshot();
      });

      it(`should display disabled ${type} button`, () => {
        const { toJSON } = renderWithWrapper(<Button title={type} disabled />);
        expect(toJSON()).toMatchSnapshot();
      });
    });
  });

  it('should apply props from theme', () => {
    const testTheme: Partial<FullTheme> = {
      Button: {
        loading: true,
      },
    };
    const { wrapper } = renderWithWrapper(
      <Button />,
      'RNE_BUTTON_WRAPPER',
      testTheme
    );
    expect(wrapper.findByType(ActivityIndicator)).toBeTruthy();
  });

  it('should apply title from theme', () => {
    const testTheme: Partial<FullTheme> = {
      Button: {
        title: 'Custom Button',
      },
    };
    const { queryByText } = renderWithWrapper(<Button />, '', testTheme);
    expect(queryByText(String(testTheme.Button.title))).toBeTruthy();
  });
});
