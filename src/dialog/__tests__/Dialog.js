import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import { create } from 'react-test-renderer';
import theme from '../../config/theme';
// import { ThemeProvider } from '../../config';
// import ThemedDialog, { Dialog } from '../Dialog';
import { Dialog } from '../Dialog';

describe('Divider Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Dialog theme={theme} />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  //   it('should apply values from theme', () => {
  //     const testTheme = {
  //       Divider: {
  //         style: {
  //           backgroundColor: 'red',
  //         },
  //       },
  //     };
  //     const component = create(
  //       <ThemeProvider theme={testTheme}>
  //         <ThemedDialog />
  //       </ThemeProvider>
  //     );
  //     expect(
  //       component.root.findByType(ThemedDialog).children[0].props.style
  //     ).toMatchObject({ backgroundColor: 'red' });
  //     expect(component.toJSON()).toMatchSnapshot();
  //   });
});
