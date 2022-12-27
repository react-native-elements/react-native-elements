import React from 'react';
import { Switch } from '../index';
import { renderWithWrapper, fireEvent } from '../../../.ci/testHelper';

describe('Switch Component', () => {
  it('should match snapshot', () => {
    const { toJSON } = renderWithWrapper(<Switch value color="green" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with value', () => {
    const { wrapper } = renderWithWrapper(
      <Switch color={'purple'} />,
      'RNE__SWITCH'
    );
    expect(wrapper.props).toMatchObject({
      onTintColor: 'purple',
    });
  });

  it('should have an onValueChange event', () => {
    const onValueChange = jest.fn();
    const { wrapper } = renderWithWrapper(
      <Switch value onValueChange={onValueChange} />,
      'RNE__SWITCH'
    );
    fireEvent(wrapper, 'onValueChange');
    expect(onValueChange).toHaveBeenCalledTimes(1);
  });

  it('should renders style', () => {
    const { wrapper } = renderWithWrapper(
      <Switch value color="green" style={{ margin: 10 }} />,
      'RNE__SWITCH'
    );
    expect(wrapper.props.style[1]).toMatchObject({
      margin: 10,
    });
  });

  it('should contain the required accessibility properties', () => {
    const enabledComponent = renderWithWrapper(<Switch value />);
    const enabledSwitch = enabledComponent.getByRole('switch');
    expect(enabledSwitch.props.accessibilityState).toMatchObject({
      checked: true,
      disabled: false,
    });

    const disabledComponent = renderWithWrapper(
      <Switch value={false} disabled />
    );
    const disabledSwitch = disabledComponent.getByRole('switch');
    expect(disabledSwitch.props.accessibilityState).toMatchObject({
      checked: false,
      disabled: true,
    });
  });
});
