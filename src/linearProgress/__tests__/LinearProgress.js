import React from 'react';
import LinearProgress from '../LinearProgress';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import theme from '../../config/theme';

describe('LinearProgress Component', () => {
  it('should render without issues', () => {
    const app = shallow(<LinearProgress theme={theme} />);
    expect(app.length).toBe(1);
    expect(toJson(app)).toMatchSnapshot();
  });

  it('should render indeterminant without issues', () => {
    const component = shallow(
      <LinearProgress theme={theme} color="red" trackColor="blue" />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render determinant without issues', () => {
    const component = shallow(
      <LinearProgress
        variant="determinate"
        value={0.4}
        theme={theme}
        color="red"
      />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
