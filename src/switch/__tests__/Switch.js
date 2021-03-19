import React from 'react';
import { Platform } from 'react-native';
import { Switch } from '../switch';
import theme from '../../config/theme';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Switch Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Switch value={true} color="green" />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render indeterminant without issues', () => {
    const component = shallow(<Switch value={true} color="red" />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render determinant without issues', () => {
    const component = shallow(
      <Switch value={false} disabled={true} color="green" />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with value', () => {
    const component = shallow(<Switch value={true} color={'purple'} />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without value', () => {
    const component = shallow(<Switch color={'purple'} />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with disabled', () => {
    const component = shallow(
      <Switch value={true} disabled={true} color={'purple'} />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without disabled', () => {
    const component = shallow(<Switch value={true} color={'purple'} />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have an onValueChange event', () => {
    const onValueChange = jest.fn();
    const component = shallow(
      <Switch
        value={true}
        disabled={true}
        onValueChange={onValueChange}
        color={theme.colors.secondary}
      />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with style prop', () => {
    const component = shallow(
      <Switch value={true} color="green" style={{ margin: 10 }} />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders without style prop', () => {
    const component = shallow(<Switch value={true} theme={theme} />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with props on web with disabled true', () => {
    Platform.OS === 'web';
    const component = shallow(
      <Switch
        disabled={true}
        value={false}
        color={'green'}
        trackColor={{ true: theme.colors.secondary, false: '' }}
      />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with props on web with disabled false', () => {
    Platform.OS === 'web';
    const component = shallow(
      <Switch
        disabled={false}
        value={false}
        color={'green'}
        trackColor={{ true: theme.colors.secondary, false: '' }}
      />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with props on ios', () => {
    Platform.OS === 'ios';
    const component = shallow(
      <Switch
        value={true}
        color="red"
        thumbTintColor={undefined}
        trackColor={{ true: theme.colors.secondary, false: '' }}
      />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders without props on ios', () => {
    Platform.OS === 'ios';
    const component = shallow(
      <Switch value={true} color="red" disabled={true} />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with disabled false props on ios', () => {
    const component = shallow(
      <Switch value={true} color="red" disabled={false} />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
