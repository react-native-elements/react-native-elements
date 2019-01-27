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
      <Divider theme={theme} style={{ backgroundColor: 'blue' }} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
    expect(component.props().style.backgroundColor).toBe('blue');
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
