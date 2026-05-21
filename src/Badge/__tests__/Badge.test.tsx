import React from 'react';
import { Badge } from '..';
import { Text, TouchableWithoutFeedback, Pressable, View } from 'react-native';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { fireEvent } from '@testing-library/react-native';
import { lightColors } from '../../helpers';
import { describe, it, expect, jest } from '@jest/globals';

describe('Badge Component', () => {
  it('should match snapshot', () => {
    const component = renderWithWrapper(<Badge value={10} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should work with value prop as ReactElement', () => {
    const component = renderWithWrapper(<Badge value={<Text>foo</Text>} />);
    expect(component.queryByText('foo')).toBeTruthy();
  });

  it('should work with value prop as string', () => {
    const component = renderWithWrapper(<Badge value="foo" />);
    expect(component.queryByText('foo')).toBeTruthy();
  });

  it('should apply container style in the badge', () => {
    const { queryByTestId } = renderWithWrapper(
      <Badge value={10} containerStyle={{ backgroundColor: 'orange' }} />
    );
    const container = queryByTestId('RNE__Badge__Container');
    expect(container).toBeTruthy();
    expect(container?.props.style).toMatchObject({ backgroundColor: 'orange' });
  });

  it('should allow badge style', () => {
    const { wrapper } = renderWithWrapper(
      <Badge value={10} badgeStyle={{ backgroundColor: 'pink' }} />,
      'RNE__Badge'
    );
    expect(wrapper.props.style.backgroundColor).toBe('pink');
  });

  it('should allow custom component', () => {
    const { queryByTestId } = renderWithWrapper(
      <Badge value={10} Component={TouchableWithoutFeedback} />
    );
    // Badge should still render with custom component
    expect(queryByTestId('RNE__Badge')).toBeTruthy();
  });

  it('should have a touchable when onPress is passed in', () => {
    const handler = jest.fn();
    const { queryByTestId } = renderWithWrapper(
      <Badge value={10} onPress={handler} />
    );
    const component = queryByTestId('RNE__Badge');
    expect(component).toBeTruthy();
    fireEvent.press(component!);
    expect(handler).toBeCalledTimes(1);
  });

  it('should use text props', () => {
    const { getAllByTestId } = renderWithWrapper(
      <Badge textProps={{ testID: 'text' }} value={10} />
    );
    const elements = getAllByTestId('text');
    expect(elements).toHaveLength(1);
  });

  describe('Mini badge', () => {
    it.each`
      status
      ${'primary'}
      ${'success'}
      ${'warning'}
      ${'error'}
    `('accepts $status', ({ status }: any) => {
      const { wrapper } = renderWithWrapper(
        <Badge
          status={status as 'primary' | 'success' | 'warning' | 'error'}
        />,
        'RNE__Badge'
      );
      expect(wrapper.props.style.backgroundColor).toBe(
        lightColors[status as keyof typeof lightColors]
      );
    });
  });
});
