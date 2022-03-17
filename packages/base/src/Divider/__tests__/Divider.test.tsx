import React from 'react';
import { Divider } from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('Divider Component', () => {
  it('should match snapshot', () => {
    const component = renderWithWrapper(<Divider />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with style', () => {
    const { wrapper } = renderWithWrapper(
      <Divider style={{ borderLeftColor: 'blue' }} />,
      'RNE__Divider'
    );
    expect(wrapper.props.style).toMatchObject({
      borderLeftColor: 'blue',
    });
  });

  it('should render with color and orientation horizontal', () => {
    const { wrapper } = renderWithWrapper(
      <Divider color={'red'} />,
      'RNE__Divider'
    );
    expect(wrapper.props.style).toMatchObject({
      borderBottomColor: 'red',
    });
  });

  it('should render with color and orientation vertical', () => {
    const { wrapper } = renderWithWrapper(
      <Divider color={'pink'} orientation="vertical" />,
      'RNE__Divider'
    );
    expect(wrapper.props.style).toMatchObject({
      borderRightColor: 'pink',
    });
  });

  it('should render with inset true and insetType left', () => {
    const { wrapper } = renderWithWrapper(
      <Divider inset insetType="left" />,
      'RNE__Divider'
    );
    expect(wrapper.props.style).toMatchObject({
      marginLeft: 72,
    });
  });

  it('should render with inset true and insetType right', () => {
    const { wrapper } = renderWithWrapper(
      <Divider inset={true} insetType="right" />,
      'RNE__Divider'
    );
    expect(wrapper.props.style).toMatchObject({
      marginRight: 72,
    });
  });

  it('should render with orientation vertical', () => {
    const { wrapper } = renderWithWrapper(
      <Divider orientation="vertical" />,
      'RNE__Divider'
    );
    expect(wrapper.props.style).toMatchObject({
      height: 'auto',
      alignSelf: 'stretch',
    });
  });

  it('should render with width and orientation horizontal', () => {
    const { wrapper } = renderWithWrapper(
      <Divider width={5} />,
      'RNE__Divider'
    );
    expect(wrapper.props.style).toMatchObject({
      borderBottomWidth: 5,
    });
  });

  it('should render with subHeader and subHeaderStyle', () => {
    const component = renderWithWrapper(
      <Divider subHeader="Test" subHeaderStyle={{ color: 'blue' }} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with subHeader and subHeaderStyle and inset true', () => {
    const component = renderWithWrapper(
      <Divider
        subHeader="Test"
        inset={true}
        subHeaderStyle={{ color: 'blue' }}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
