import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';
import theme from '../../config/theme';
import { ThemeProvider } from '../../config';
import ThemedDivider, { Divider } from '../Divider';

describe('Divider Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Divider theme={theme} />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with style', () => {
    const component = shallow(
      <Divider theme={theme} style={{ borderLeftColor: 'blue' }} />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with color and orientation horizontal', () => {
    const component = shallow(
      <Divider theme={theme} color={theme.colors.primary} />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with color and orientation vertical', () => {
    const component = shallow(
      <Divider
        theme={theme}
        color={theme.colors.primary}
        orientation="vertical"
      />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with inset true and insetType left', () => {
    const component = shallow(
      <Divider theme={theme} inset={true} insetType="left" />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with inset true and insetType right', () => {
    const component = shallow(
      <Divider theme={theme} inset={true} insetType="right" />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with inset true and insetType middle', () => {
    const component = shallow(
      <Divider theme={theme} inset={true} insetType="middle" />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with orientation vertical', () => {
    const component = shallow(<Divider theme={theme} orientation="vertical" />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with width and orientation horizontal', () => {
    const component = shallow(<Divider theme={theme} width={5} />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with width and orientation vertical', () => {
    const component = shallow(
      <Divider theme={theme} width={5} orientation="vertical" />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with subHeader and subHeaderStyle', () => {
    const component = shallow(
      <Divider
        theme={theme}
        subHeader="Test"
        subHeaderStyle={{ color: 'blue' }}
      />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with subHeader and subHeaderStyle and inset true', () => {
    const component = shallow(
      <Divider
        theme={theme}
        subHeader="Test"
        inset={true}
        subHeaderStyle={{ color: 'blue' }}
      />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should pass view properties', () => {
    const component = shallow(<Divider theme={theme} testID="testing" />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const testTheme = {
      Divider: {
        style: {
          backgroundColor: 'red',
        },
      },
    };
    const component = create(
      <ThemeProvider theme={testTheme}>
        <ThemedDivider />
      </ThemeProvider>
    );
    expect(
      component.root.findByType(ThemedDivider).children[0].props.style
    ).toMatchObject({ backgroundColor: 'red' });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
