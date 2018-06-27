import React from 'react';
import { View, Button, Text } from 'react-native';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextSegment from '../textsegment';

describe('TextSegment Component', () => {
  it('should render without issues', () => {
    const component = shallow(<TextSegment />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without issues when has value and delimiter', () => {
    const component = shallow(
      <TextSegment value="TextSegment Test" delimiter="ment" />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render contains View', () => {
    const component = shallow(
      <TextSegment value="TextSegment Test" delimiter="ment" />
    );
    expect(
      component.contains(
        <View style={[{ flexDirection: 'row', alignItems: 'flex-end' }]} />
      )
    );
  });
  // string splitted correctly ?
  // view renders correctly with front and behind symbol.
});
