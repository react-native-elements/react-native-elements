import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import withBadge from '../withBadge';

describe('withBadge HOC', () => {
  describe('just value', () => {
    it('should render with just a value', () => {
      const BadgedComponent = withBadge(1)(TouchableOpacity);
      const component = shallow(<BadgedComponent />);

      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('should render when given a function as value', () => {
      const BadgedComponent = withBadge(() => 1)(TouchableOpacity);
      const component = shallow(<BadgedComponent />);

      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('with options', () => {
    it('should render without issue even with BadgeProps', () => {
      const options = {
        top: 0,
        bottom: 5,
        status: 'success',
      };
      const BadgedComponent = withBadge(1, options)(TouchableOpacity);
      const component = shallow(<BadgedComponent />);

      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('should not render when hidden is true', () => {
      const options = {
        hidden: true,
      };
      const BadgedComponent = withBadge(1, options)(TouchableOpacity);
      const component = shallow(<BadgedComponent />);

      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
