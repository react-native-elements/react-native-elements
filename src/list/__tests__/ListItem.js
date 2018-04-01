import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ListItem from '../ListItem';

describe('ListItem component', () => {
  it('should render without issues', () => {
    const component = shallow(<ListItem />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with avatar', () => {
    const component = shallow(
      <ListItem
        avatar={{ source: 'avatar_uri' }}
        containerStyle={{ backgroundColor: 'peru' }}
      />
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
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with left icon component', () => {
    const component = shallow(
      <ListItem leftIcon={<Text>I'm left icon</Text>} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with right icon component', () => {
    const component = shallow(
      <ListItem rightIcon={<Text>I'm right icon</Text>} />
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
        titleStyle={{ backgroundColor: 'peru' }}
        subtitleStyle={{ backgroundColor: 'peru' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with switch', () => {
    const component = shallow(
      <ListItem bottomDivider chevron switch={{ value: true }} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
