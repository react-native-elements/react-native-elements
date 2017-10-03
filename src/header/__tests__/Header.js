import React from 'react';
import { Button } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../Header';
import NavButton from '../NavButton';
import Title from '../Title';

const btnCfg = { icon: 'home' };
const titleCfg = { text: 'This is a title' };

describe('Header Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Header />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render children when passed in', () => {
    const component = shallow(
      <Header>
        <Button title="Test button" onPress={() => {}} />
      </Header>
    );

    expect(component.find('Button').length).toBe(1);
  });

  it('should render multiple children when passed in', () => {
    const component = shallow(
      <Header>
        <Button title="Test button 1" onPress={() => {}} />
        <Button title="Test button 2" onPress={() => {}} />
      </Header>
    );

    expect(component.find('Button').length).toBe(2);
  });

  it('should render left component by passing a config through props', () => {
    const component = shallow(<Header leftComponent={btnCfg} />);

    expect(component.find(NavButton).length).toBe(1);
  });

  it('should render left component by passing a component through props', () => {
    const component = shallow(
      <Header
        leftComponent={<Button title="Test button" onPress={() => {}} />}
      />
    );

    expect(component.find('Button').length).toBe(1);
  });

  it('should render right component by passing a config through props', () => {
    const component = shallow(<Header rightComponent={btnCfg} />);

    expect(component.find(NavButton).length).toBe(1);
  });

  it('should render right component by passing a component through props', () => {
    const component = shallow(
      <Header
        rightComponent={<Button title="Test button" onPress={() => {}} />}
      />
    );

    expect(component.find('Button').length).toBe(1);
  });

  it('should render center component by passing a config through props', () => {
    const component = shallow(<Header centerComponent={titleCfg} />);

    expect(component.find(Title).length).toBe(1);
  });

  it('should render center component by passing a component through props', () => {
    const component = shallow(
      <Header
        centerComponent={<Button title="Test button" onPress={() => {}} />}
      />
    );

    expect(component.find('Button').length).toBe(1);
  });

  it('should allow to pass backgroundColor through prop', () => {
    const component = shallow(<Header backgroundColor="#aaa" />);

    expect(
      component.find('View').first().props().style[1].backgroundColor
    ).toBe('#aaa');
  });

  it('should allow to pass styles through outerContainerStyles prop', () => {
    const component = shallow(
      <Header outerContainerStyles={{ backgroundColor: '#ccc' }} />
    );

    expect(component.find('View').at(0).props().style[2].backgroundColor).toBe(
      '#ccc'
    );
  });

  it('should allow to pass styles through innerContainerStyles prop', () => {
    const component = shallow(
      <Header innerContainerStyles={{ backgroundColor: '#ccc' }} />
    );

    expect(component.find('View').at(1).props().style[1].backgroundColor).toBe(
      '#ccc'
    );
  });

  it('should accept props for StatusBar', () => {
    const component = shallow(<Header statusBarProps={{ hidden: true }} />);

    expect(component.find('StatusBar').props().hidden).toBe(true);
  });
});
