import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';
import theme from '../../config/theme';
import { ThemeProvider } from '../../config';
import ThemedDialog, { Dialog } from '../Dialog';

describe('Dialog Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Dialog theme={theme} />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('shows when isVisible is true', () => {
    const component = shallow(
      <Dialog isVisible>
        <Text>This is a test dialog</Text>
      </Dialog>
    );
    expect(
      component.find({ testID: 'Internal__Overlay' }).props().isVisible
    ).toBeTruthy();
  });

  it('should not show when isVisible is false', () => {
    const component = shallow(
      <Dialog>
        <Text>This is a test dialog</Text>
      </Dialog>
    );
    expect(
      component.find({ testID: 'Internal__Overlay' }).props().isVisible
    ).toBeFalsy();
  });

  it('should click the primary button and use passed handler', () => {
    const primaryOnPress = jest.fn();
    const wrapper = shallow(
      <Dialog isVisible primaryOnPress={primaryOnPress}>
        <Text>This is a test dialog</Text>
      </Dialog>
    );
    wrapper
      .find({ testID: 'Internal__Overlay' })
      .dive()
      .dive()
      .find({ testID: 'Primary__Button' })
      .simulate('press');
    expect(primaryOnPress).toHaveBeenCalled();
  });

  it('should click the primary button and use passed handler', () => {
    const secondaryOnPress = jest.fn();
    const wrapper = shallow(
      <Dialog
        isVisible
        secondary="Test Action"
        secondaryOnPress={secondaryOnPress}
      >
        <Text>This is a test dialog</Text>
      </Dialog>
    );
    wrapper
      .find({ testID: 'Internal__Overlay' })
      .dive()
      .dive()
      .find({ testID: 'Secondary__Button' })
      .simulate('press');
    expect(secondaryOnPress).toHaveBeenCalled();
  });

  it('should apply values from theme', () => {
    const testTheme = {
      Divider: {
        style: {
          backgroundColor: 'blue',
        },
      },
    };
    const component = create(
      <ThemeProvider theme={testTheme}>
        <ThemedDialog />
      </ThemeProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
