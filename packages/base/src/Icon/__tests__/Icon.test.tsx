import React from 'react';
import { Icon } from '../index';
import { renderWithWrapper, fireEvent } from '../../../.ci/testHelper';

describe('Icon component', () => {
  it('should render with icon type', () => {
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

  it('should have onPress event', () => {
    const onPress = jest.fn();
    const { wrapper } = renderWithWrapper(
      <Icon onPress={onPress} name="wifi" />,
      'RNE__ICON__CONTAINER_ACTION'
    );
    fireEvent.press(wrapper);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should apply default disabled styles', () => {
    const onPress = jest.fn();
    const { wrapper } = renderWithWrapper(
      <Icon onPress={onPress} name="edit" disabled />,
      'RNE__ICON'
    );
    expect(wrapper.props.style).toMatchObject({
      backgroundColor: '#D1D5D8',
    });
  });

  it('should apply custom disabled styles', () => {
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

  it('should apply container style', () => {
    const { wrapper } = renderWithWrapper(
      <Icon name="wifi" containerStyle={{ backgroundColor: 'blue' }} />,
      'RNE__ICON__CONTAINER'
    );
    expect(wrapper.props.style).toMatchObject({
      backgroundColor: 'blue',
    });
  });

  it('should apply reverse styles', () => {
    const component = renderWithWrapper(<Icon name="wifi" reverse />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should set underlayColor to color when styles when underlayColor absent', () => {
    const onPress = jest.fn();
    const { toJSON } = renderWithWrapper(
      <Icon name="wifi" underlayColor={null} onPress={onPress} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should apply raised styles', () => {
    const component = renderWithWrapper(<Icon name="wifi" raised />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should have overridable testID', () => {
    const { queryByTestId } = renderWithWrapper(
      <Icon name="wifi" testID="wifiIcon" />
    );
    expect(queryByTestId('wifiIcon')).toBeTruthy();
  });
});
