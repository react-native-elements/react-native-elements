import React from 'react';
import { Button, View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import theme from '../../config/theme';
import { ThemeProvider } from '../../config';

import ThemedHeader, { Header } from '../Header';

const btnCfg = { icon: 'home' };
const titleCfg = { text: 'This is a title' };

describe('Header Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Header theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render children when passed in', () => {
    const component = shallow(
      <Header theme={theme}>
        <Button title="Test button" onPress={() => {}} />
      </Header>
    );

    expect(component.find(Button).length).toBe(1);
  });

  it('should render multiple children when passed in', () => {
    const component = shallow(
      <Header theme={theme}>
        <Button title="Test button 1" onPress={() => {}} />
        <Button title="Test button 2" onPress={() => {}} />
      </Header>
    );

    expect(component.find(Button).length).toBe(2);
  });

  it('should render left component by passing a config through props', () => {
    const component = shallow(<Header theme={theme} leftComponent={btnCfg} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render left component by passing a component through props', () => {
    const component = shallow(
      <Header
        theme={theme}
        leftComponent={<Button title="Test button" onPress={() => {}} />}
      />
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render right component by passing a config through props', () => {
    const component = shallow(<Header theme={theme} rightComponent={btnCfg} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render right component by passing a component through props', () => {
    const component = shallow(
      <Header
        theme={theme}
        rightComponent={<Button title="Test button" onPress={() => {}} />}
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render center component by passing a config through props', () => {
    const component = shallow(
      <Header theme={theme} centerComponent={titleCfg} />
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render center component by passing a component through props', () => {
    const component = shallow(
      <Header
        theme={theme}
        centerComponent={<Button title="Test button" onPress={() => {}} />}
      />
    );

    expect(component.find('Button').length).toBe(1);
  });

  it('should allow to pass backgroundColor through prop', () => {
    const component = shallow(<Header theme={theme} backgroundColor="#aaa" />);

    expect(
      component
        .find(View)
        .first()
        .props().style.backgroundColor
    ).toBe('#aaa');
  });

  it('should allow to pass styles through containerStyle prop', () => {
    const component = shallow(
      <Header theme={theme} containerStyle={{ backgroundColor: '#ccc' }} />
    );

    expect(
      component
        .find(View)
        .at(0)
        .props().style.backgroundColor
    ).toBe('#ccc');
  });

  it('should accept props for StatusBar', () => {
    const component = shallow(
      <Header theme={theme} statusBarProps={{ hidden: true }} />
    );

    expect(component.find('StatusBar').props().hidden).toBe(true);
  });

  it('should apply values from theme', () => {
    const theme = {
      Header: {
        backgroundColor: 'pink',
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedHeader />
      </ThemeProvider>
    );

    expect(
      component.root.findByProps({ testID: 'headerContainer' }).props.style
    ).toMatchObject({
      backgroundColor: 'pink',
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
