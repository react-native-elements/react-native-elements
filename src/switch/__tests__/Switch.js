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

  it('should render with disabled true', () => {
    const component = shallow(
      <Switch value={true} disabled={true} color={'purple'} />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with disabled false', () => {
    const component = shallow(
      <Switch value={true} disabled={false} theme={theme} />
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

  it('renders with props on ios', () => {
    Platform.OS === 'ios';
    const component = shallow(<Switch value={true} color="red" />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with props on web', () => {
    Platform.OS === 'web';
    const onValueChange = jest.fn();
    const component = shallow(
      <Switch value={true} onValueChange={onValueChange} theme={theme} />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
