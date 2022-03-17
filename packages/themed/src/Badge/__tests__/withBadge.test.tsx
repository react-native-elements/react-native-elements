import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withBadge } from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('withBadge HOC', () => {
  describe('just value', () => {
    it.skip('', () => {
      const BadgedComponent = withBadge('hello')(TouchableOpacity);
      const component = renderWithWrapper(<BadgedComponent />);
      expect(component.queryByText('hello')).toBeTruthy();
    });

    it.skip('', () => {
      const BadgedComponent = withBadge(() => 'hello')(TouchableOpacity);
      const component = renderWithWrapper(<BadgedComponent />);
      expect(component.queryByText('hello')).toBeTruthy();
    });
  });

  describe('with options', () => {
    it.skip('', () => {
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

    it.skip('', () => {
      const options = {
        hidden: true,
      };
      const BadgedComponent = withBadge(1, options)(TouchableOpacity);
      const { wrapper } = renderWithWrapper(<BadgedComponent />, 'RNE__Badge');
      expect(wrapper).toBeFalsy();
    });
  });
});
