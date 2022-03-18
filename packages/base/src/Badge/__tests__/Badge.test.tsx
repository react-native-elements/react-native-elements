import React from 'react';
import { Badge } from '..';
import { Text, TouchableWithoutFeedback, Pressable, View } from 'react-native';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { fireEvent } from '@testing-library/react-native';
import { lightColors } from '../../helpers';

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
    const { wrapper } = renderWithWrapper(
      <Badge value={10} containerStyle={{ backgroundColor: 'orange' }} />
    );
    expect(wrapper.findByType(View).props.style.backgroundColor).toBe('orange');
  });

  it('should allow badge style', () => {
    const { wrapper } = renderWithWrapper(
      <Badge value={10} badgeStyle={{ backgroundColor: 'pink' }} />,
      'RNE__Badge'
    );
    expect(wrapper.props.style.backgroundColor).toBe('pink');
  });

  it('should allow custom component', () => {
    const { wrapper } = renderWithWrapper(
      <Badge value={10} Component={TouchableWithoutFeedback} />
    );
    expect(wrapper.findAllByType(TouchableWithoutFeedback).length).toBe(1);
  });

  it('should have a touchable when onPress is passed in', () => {
    const handler = jest.fn();
    const { wrapper } = renderWithWrapper(
      <Badge value={10} onPress={handler} />
    );
    const component = wrapper.findByType(Pressable);
    fireEvent.press(component);
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
    `('accepts $status', ({ status }) => {
      const { wrapper } = renderWithWrapper(
        <Badge status={status} />,
        'RNE__Badge'
      );
      expect(wrapper.props.style.backgroundColor).toBe(lightColors[status]);
    });
  });
});
