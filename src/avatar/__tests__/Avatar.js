import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Avatar from '../Avatar';

describe('Avatar Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Avatar />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render small avatar', () => {
    const component = shallow(
      <Avatar
        small
        rounded
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        activeOpacity={0.7}
        avatarStyle={{ backgroundColor: 'peru' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render medium avatar', () => {
    const component = shallow(
      <Avatar
        medium
        rounded
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        activeOpacity={0.7}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render large avatar', () => {
    const component = shallow(
      <Avatar
        large
        rounded
        icon={{ color: 'blue', name: 'name', size: 22, type: 'type' }}
        activeOpacity={0.7}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render xlarge avatar', () => {
    const component = shallow(
      <Avatar xlarge rounded title="avatar title" activeOpacity={0.7} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render avatar without width', () => {
    const component = shallow(
      <Avatar
        height={90}
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        activeOpacity={0.7}
        avatarStyle={{ backgroundColor: 'peru' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render avatar without height', () => {
    const component = shallow(
      <Avatar width={80} title="avatar title" titleStyle={{ color: 'red' }} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
