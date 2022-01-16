import React from 'react';
import Icon from '../index';
import { renderWithWrapper, fireEvent } from '../../../.ci/testHelper';

describe('Icon component', () => {
  it.skip('', () => {
    const { toJSON } = renderWithWrapper(
      <Icon
        name="alert"
        type="octicon"
        reverse
        color="red"
        iconStyle={{ backgroundColor: 'peru', borderRadius: 30 }}
        onPress={jest.fn()}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const onPress = jest.fn();
    const { wrapper } = renderWithWrapper(
      <Icon onPress={onPress} name="wifi" />,
      'RNE__ICON__CONTAINER_ACTION'
    );
    fireEvent.press(wrapper);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it.skip('', () => {
    const onPress = jest.fn();
    const { wrapper } = renderWithWrapper(
      <Icon onPress={onPress} name="edit" disabled />,
      'RNE__ICON'
    );
    expect(wrapper.props.style).toMatchObject({
      backgroundColor: '#D1D5D8',
    });
  });

  it.skip('', () => {
    const onPress = jest.fn();
    const { wrapper } = renderWithWrapper(
      <Icon
        onPress={onPress}
        name="wifi"
        disabled
        disabledStyle={{ backgroundColor: 'pink' }}
      />,
      'RNE__ICON'
    );
    expect(wrapper.props.style).toMatchObject({
      backgroundColor: 'pink',
    });
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Icon name="wifi" containerStyle={{ backgroundColor: 'blue' }} />,
      'RNE__ICON__CONTAINER'
    );
    expect(wrapper.props.style).toMatchObject({
      backgroundColor: 'blue',
    });
  });

  it.skip('', () => {
    const component = renderWithWrapper(<Icon name="wifi" reverse />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const onPress = jest.fn();
    const { toJSON } = renderWithWrapper(
      <Icon name="wifi" underlayColor={null} onPress={onPress} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const component = renderWithWrapper(<Icon name="wifi" raised />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const localTheme = {
      Icon: {
        size: 26,
      },
    };
    const { wrapper } = renderWithWrapper(
      <Icon name="edit" />,
      'RNE__ICON__Component',
      localTheme
    );
    expect(wrapper.props.style[0].fontSize).toBe(26);
  });
});
