import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextSegment from '../textsegment';

describe('TextSegment Component', () => {
  it('should render without issues', () => {
    const component = shallow(
      <TextSegment value="reactNative-elements" delimiter="-" />
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should return value if there is no delimeter', () => {
    const props = { value: 'reactNative-elements' };
    const component = shallow(<TextSegment {...props} />);

    expect(component.children().length).toBe(1);
    expect(component.childAt(0).props().children).toBe(props.value);
  });

  it('should segment text correctly', () => {
    const component = shallow(
      <TextSegment value="reactNative-elements" delimiter="-" />
    );

    const container = component.find(View);
    const textSegments = container
      .children()
      .map(child => child.props().children);

    expect(textSegments).toEqual(
      expect.arrayContaining(['reactNative', '-', 'elements'])
    );
  });

  it('should segment preDelimiterOnPress correctly', () => {
    const component = shallow(
      <TextSegment
        value="reactNative-elements"
        delimiter="-"
        preDelimiterOnPress={() => {}}
      />
    );

    const touchableOpacityContainer = component.find(TouchableOpacity);
    const textSegments = touchableOpacityContainer
      .children()
      .map(child => child.props().children);

    expect(textSegments).toEqual(expect.arrayContaining(['reactNative']));
  });

  it('should segment postDelimiterOnPress correctly', () => {
    const component = shallow(
      <TextSegment
        value="reactNative-elements"
        delimiter="-"
        postDelimiterOnPress={() => {}}
      />
    );

    const touchableOpacityContainer = component.find(TouchableOpacity);
    const textSegments = touchableOpacityContainer
      .children()
      .map(child => child.props().children);

    expect(textSegments).toEqual(expect.arrayContaining(['elements']));
  });

  it('should segment preDelimiterOnPress and preDelimiterOnPress correctly', () => {
    const component = shallow(
      <TextSegment
        value="reactNative-elements"
        delimiter="-"
        preDelimiterOnPress={() => {}}
        postDelimiterOnPress={() => {}}
      />
    );

    const touchableOpacityContainer = component.find(TouchableOpacity);
    const textSegments = touchableOpacityContainer
      .children()
      .map(child => child.props().children);

    expect(textSegments).toEqual(
      expect.arrayContaining(['reactNative', 'elements'])
    );
  });
});
