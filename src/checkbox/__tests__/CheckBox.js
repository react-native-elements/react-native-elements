import React from 'react';
import { Image } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CheckBox from '../CheckBox';

describe('CheckBox Component', () => {
  it('should render without issues', () => {
    const component = shallow(<CheckBox />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should use TouchableOpacity as default component', () => {
    const component = shallow(<CheckBox />);

    expect(component.find('TouchableOpacity').length).toBe(1);
  });

  it('should allow to pass custom component', () => {
    const View = jest.fn();
    const component = shallow(<CheckBox component={View} />);

    expect(component.find('View').length).toBe(1);
  });

  it('should render title in Text', () => {
    const component = shallow(<CheckBox title="Custom Text" checked />);

    expect(component.props().children.props.children[1].props.children).toBe(
      'Custom Text'
    );
  });

  it('should render with icon and checked', () => {
    const component = shallow(
      <CheckBox
        iconType="font-awesome"
        checkedColor="red"
        containerStyle={{ backgroundColor: 'red' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with icon and iconRight', () => {
    const component = shallow(
      <CheckBox
        iconType="font-awesome"
        iconRight
        uncheckedColor="blue"
        center
        right
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should allow custom checked Icon', () => {
    const component = shallow(
      <CheckBox
        checked={true}
        checkedIcon={
          <Image
            source={{ uri: 'https://image.ibb.co/jcY95H/checked.png' }}
            style={{ width: 30, height: 30 }}
          />
        }
        uncheckedIcon={
          <Image
            source={{ uri: 'https://image.ibb.co/fda0Cx/no_check.png' }}
            style={{ width: 30, height: 30 }}
          />
        }
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should allow custom checked Icon', () => {
    const component = shallow(
      <CheckBox
        checked={false}
        checkedIcon={
          <Image
            source={{ uri: 'https://image.ibb.co/jcY95H/checked.png' }}
            style={{ width: 30, height: 30 }}
          />
        }
        uncheckedIcon={
          <Image
            source={{ uri: 'https://image.ibb.co/fda0Cx/no_check.png' }}
            style={{ width: 30, height: 30 }}
          />
        }
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
