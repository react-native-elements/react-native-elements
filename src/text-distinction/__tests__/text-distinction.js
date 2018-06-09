import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextDistinction from '../text-distinction';

describe('TextDistinction Component', () => {
  it('should render without issues', () => {
    const component = shallow(<TextDistinction />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without issues when has value and delimiter', () => {
    const component = shallow(
      <TextDistinction value="TextDistinction Test" delimiter="tin" />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
