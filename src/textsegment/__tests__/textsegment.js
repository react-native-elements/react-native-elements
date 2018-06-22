import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextSegment from '../textsegment';

describe('TextDistinction Component', () => {
  it('should render without issues', () => {
    const component = shallow(<TextSegment />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without issues when has value and delimiter', () => {
    const component = shallow(
      <TextSegment value="TextSegment Test" delimiter="tin" />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
