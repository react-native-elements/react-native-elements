import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Icon } from '../Icon';

describe('Icon component', () => {
  it('should render without issues', () => {
    const component = shallow(<Icon name="wifi" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with icon type', () => {
    const component = shallow(
      <Icon
        name="alert"
        type="octicon"
        reverse
        color="red"
        iconStyle={{ backgroundColor: 'peru' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have onPress event', () => {
    const onPress = jest.fn();
    const component = shallow(<Icon onPress={onPress} name="wifi" />);
    const touchable = component.childAt(0);
    touchable.simulate('press');
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should apply default disabled styles', () => {
    const onPress = jest.fn();
    const component = shallow(<Icon onPress={onPress} name="wifi" disabled />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply custom disabled styles', () => {
    const onPress = jest.fn();
    const component = shallow(
      <Icon
        onPress={onPress}
        name="wifi"
        disabled
        disabledStyle={{ backgroundColor: 'pink' }}
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply container style', () => {
    const component = shallow(
      <Icon name="wifi" containerStyle={{ backgroundColor: 'blue' }} />
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply reverse styles', () => {
    const component = shallow(<Icon name="wifi" reverse={true} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should set underlayColor to color when styles when underlayColor absent', () => {
    const component = shallow(<Icon name="wifi" underlayColor={null} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply raised styles', () => {
    const component = shallow(<Icon name="wifi" raised={true} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
