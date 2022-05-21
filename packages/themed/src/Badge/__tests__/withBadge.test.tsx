import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withBadge } from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('withBadge HOC', () => {
  it('should render', () => {
    const options = {
      top: 0,
      bottom: 5,
    };
    const BadgedComponent = withBadge(1, options)(TouchableOpacity);
    const { wrapper } = renderWithWrapper(
      <BadgedComponent />,
      'RNE__Badge__Container'
    );
    expect(wrapper.props.style).toMatchObject({
      top: 0,
      bottom: 5,
    });
  });
});
