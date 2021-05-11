import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';
import { ThemeProvider } from '../../config';
import ThemedDialog, { Dialog } from '../Dialog';

describe('Dialog Component', () => {
  it('should render without any children', () => {
    const component = shallow(<Dialog isVisible />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title', () => {
    const component = shallow(
      <Dialog isVisible>
        <Dialog.Title title="Dialog Title" />
        <Text>This is a test dialog</Text>
      </Dialog>
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without buttons', () => {
    const component = shallow(
      <Dialog isVisible>
        <Text>This is a test dialog</Text>
        <Dialog.Actions>
          <Dialog.Button />
        </Dialog.Actions>
      </Dialog>
    );
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
