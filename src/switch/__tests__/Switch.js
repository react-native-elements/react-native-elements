import React from 'react';
import Switch from '../switch';
import theme from '../../config/theme';
import { shallow } from 'enzyme';

describe('Switch Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Switch theme={theme} value={true} />);
    expect(component.length).toBe(1);
  });
});
