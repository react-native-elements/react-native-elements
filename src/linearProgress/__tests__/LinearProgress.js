import React from 'react';
import LinearProgress from '../LinearProgress';
import theme from '../../config/theme';
import { shallow } from 'enzyme';

describe('LinearProgress Component', () => {
  it('should render without issues', () => {
    const component = shallow(<LinearProgress theme={theme} value={0.4} />);
    expect(component.length).toBe(1);
  });
});
