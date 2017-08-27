import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ListItem from '../ListItem';
import { getTheme } from '../../config/';

const options = {
  context: { theme: getTheme() },
  childContextTypes: { theme: PropTypes.object },
};

describe('ListItem component', () => {
  it('should render without issues', () => {
    const component = shallow(<ListItem />, options);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with avatar', () => {
    const component = shallow(
      <ListItem
        avatar="avatar_uri"
        containerStyle={{ backgroundColor: 'peru' }}
        wrapperStyle={{ backgroundColor: 'peru' }}
      />,
      options
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with left icon', () => {
    const component = shallow(
      <ListItem
        leftIcon={{
          name: 'wifi',
          type: 'font-awesome',
          color: 'red',
          size: 20,
        }}
        wrapperStyle={{ backgroundColor: 'peru' }}
      />,
      options
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with left icon component', () => {
    const component = shallow(
      <ListItem
        leftIcon={<Text>I'm left icon</Text>}
        wrapperStyle={{ backgroundColor: 'peru' }}
      />,
      options
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with right icon component', () => {
    const component = shallow(
      <ListItem
        rightIcon={<Text>I'm right icon</Text>}
        wrapperStyle={{ backgroundColor: 'peru' }}
      />,
      options
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title and subtitle', () => {
    const component = shallow(
      <ListItem
        title="title test"
        subtitle="title test"
        rightTitle="title"
        wrapperStyle={{ backgroundColor: 'peru' }}
        titleStyle={{ backgroundColor: 'peru' }}
        subtitleStyle={{ backgroundColor: 'peru' }}
        fontFamily="arial"
      />,
      options
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with textInput', () => {
    const component = shallow(
      <ListItem textInput hideChevron switchButton fontFamily="arial" />,
      options
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
