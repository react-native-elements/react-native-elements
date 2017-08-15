import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../Header';
import NavButton from '../NavButton';
import Title from '../Title';

import { getTheme } from '../../config';

const options = {
  context: { theme: getTheme() },
  childContextTypes: { theme: PropTypes.object },
};

const btnCfg = { icon: 'home' };
const titleCfg = { text: 'This is a title' };

describe('Header Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Header />, options);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render children when passed in', () => {
    const component = shallow(
      <Header>
        <Button title="Test button" onPress={() => {}} />
      </Header>,
      options
    );

    expect(component.find('Button').length).toBe(1);
  });

  it('should render left component by passing a config through props', () => {
    const component = shallow(<Header leftComponent={btnCfg} />, options);

    expect(component.find(NavButton).length).toBe(1);
  });

  it('should render left component by passing a component through props', () => {
    const component = shallow(
      <Header
        leftComponent={<Button title="Test button" onPress={() => {}} />}
      />,
      options
    );

    expect(component.find('Button').length).toBe(1);
  });

  it('should render right component by passing a config through props', () => {
    const component = shallow(<Header rightComponent={btnCfg} />, options);

    expect(component.find(NavButton).length).toBe(1);
  });

  it('should render right component by passing a component through props', () => {
    const component = shallow(
      <Header
        rightComponent={<Button title="Test button" onPress={() => {}} />}
      />,
      options
    );

    expect(component.find('Button').length).toBe(1);
  });

  it('should render center component by passing a config through props', () => {
    const component = shallow(<Header centerComponent={titleCfg} />, options);

    expect(component.find(Title).length).toBe(1);
  });

  it('should render center component by passing a component through props', () => {
    const component = shallow(
      <Header
        centerComponent={<Button title="Test button" onPress={() => {}} />}
      />,
      options
    );

    expect(component.find('Button').length).toBe(1);
  });

  it('should allow to pass backgroundColor through prop', () => {
    const component = shallow(<Header backgroundColor="#aaa" />, options);

    expect(
      component.find('View').first().props().style[1].backgroundColor
    ).toBe('#aaa');
  });

  it('should allow to pass styles through outerContainerStyles prop', () => {
    const component = shallow(
      <Header outerContainerStyles={{ backgroundColor: '#ccc' }} />,
      options
    );

    expect(component.find('View').at(0).props().style[2].backgroundColor).toBe(
      '#ccc'
    );
  });

  it('should allow to pass styles through innerContainerStyles prop', () => {
    const component = shallow(
      <Header innerContainerStyles={{ backgroundColor: '#ccc' }} />,
      options
    );

    expect(component.find('View').at(1).props().style[1].backgroundColor).toBe(
      '#ccc'
    );
  });

  it('should accept props for StatusBar', () => {
    const component = shallow(
      <Header statusBarProps={{ hidden: true }} />,
      options
    );

    expect(component.find('StatusBar').props().hidden).toBe(true);
  });
});
