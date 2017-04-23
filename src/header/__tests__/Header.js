import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../Header';

const btnCfg = { icon: 'home' };
const titleCfg = { text: 'This is a title' };

describe('Header Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Header />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render left component by passing a config through props', () => {
    const component = shallow(
      <Header
        leftComponent={btnCfg}
      />
    );

    expect(component.find('NavButton').length).toBe(1);
  });

  it('should render right component by passing a config through props', () => {
    const component = shallow(
      <Header
        rightComponent={btnCfg}
      />
    );

    expect(component.find('NavButton').length).toBe(1);
  });

  it('should render center component by passing a config through props', () => {
    const component = shallow(
      <Header
        centerComponent={titleCfg}
      />
    );

    expect(component.find('Title').length).toBe(1);
  });

  it('should accept props for StatusBar', () => {
    const component = shallow(
      <Header
        statusBarProps={{ hidden: true }}
      />
    );

    expect(component.find('StatusBar').props().hidden).toBe(true);
  });
});
