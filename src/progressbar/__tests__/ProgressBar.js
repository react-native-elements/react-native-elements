import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import { ThemeProvider } from '../../config';
import ProgressBarThemed, {
  ProgressBarElement as ProgressBar,
} from '../ProgressBar';

describe('ProgressBar Component', () => {
  it('should render without issues', () => {
    const component = shallow(<ProgressBar />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have indeterminate false as default', () => {
    const component = shallow(<ProgressBar />);

    const indeterminate = component.props().indeterminate;
    expect(indeterminate).toBe(false);
  });

  it('should have indeterminate equal to true', () => {
    const component = shallow(<ProgressBar indeterminate />);

    const indeterminate = component.props().indeterminate;
    expect(indeterminate).toBe(true);
  });

  it('should have progress equal to 0.5', () => {
    const component = shallow(<ProgressBar progress={0.5} />);

    const progress = component.props().progress;
    expect(progress).toBe(0.5);
  });

  it('should have props color', () => {
    const theme = {
      ProgressBar: {
        progress: 0.5,
      },
    };

    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <ProgressBarThemed color="red" />
      </ThemeProvider>
    );

    expect(
      component.root.findByType(ProgressBarThemed).children[0].children[0].props
        .color
    ).toBe('red');
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should use values from the theme', () => {
    const theme = {
      ProgressBar: {
        progress: 0.5,
        borderRadius: 16,
      },
    };

    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <ProgressBarThemed />
      </ThemeProvider>
    );

    expect(
      component.root.findByType(ProgressBarThemed).children[0].children[0].props
        .progress
    ).toBe(0.5);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('local props should override style props on theme', () => {
    const theme = {
      ProgressBar: {
        style: {
          borderRadius: 16,
        },
      },
    };

    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <ProgressBarThemed />
      </ThemeProvider>
    );

    expect(
      component.root.findByType(ProgressBarThemed).children[0].children[0].props
        .style.borderRadius
    ).toBe(16);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
