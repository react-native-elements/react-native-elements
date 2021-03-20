import React from 'react';
import FAB from '../FAB';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import theme from '../../config/theme';

describe('LinearProgress Component', () => {
  it('should render without issues', () => {
    const app = shallow(<FAB theme={theme} />);
    expect(app.length).toBe(1);
    expect(toJson(app)).toMatchSnapshot();
  });
});
