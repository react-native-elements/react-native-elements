import React from 'react';
import Divider from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { FullTheme } from '../../config';

describe('Divider Component', () => {
  it.skip('', () => {
    const component = renderWithWrapper(<Divider />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Divider style={{ borderLeftColor: 'blue' }} />,
      'RNE__Divider'
    );
    expect(wrapper.props.style).toMatchObject({
      borderLeftColor: 'blue',
    });
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Divider color={'red'} />,
      'RNE__Divider'
    );
    expect(wrapper.props.style).toMatchObject({
      borderBottomColor: 'red',
    });
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Divider color={'pink'} orientation="vertical" />,
      'RNE__Divider'
    );
    expect(wrapper.props.style).toMatchObject({
      borderRightColor: 'pink',
    });
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Divider inset insetType="left" />,
      'RNE__Divider'
    );
    expect(wrapper.props.style).toMatchObject({
      marginLeft: 72,
    });
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Divider inset={true} insetType="right" />,
      'RNE__Divider'
    );
    expect(wrapper.props.style).toMatchObject({
      marginRight: 72,
    });
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Divider orientation="vertical" />,
      'RNE__Divider'
    );
    expect(wrapper.props.style).toMatchObject({
      height: 'auto',
      alignSelf: 'stretch',
    });
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Divider width={5} />,
      'RNE__Divider'
    );
    expect(wrapper.props.style).toMatchObject({
      borderBottomWidth: 5,
    });
  });

  it.skip('', () => {
    const component = renderWithWrapper(
      <Divider subHeader="Test" subHeaderStyle={{ color: 'blue' }} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const component = renderWithWrapper(
      <Divider
        subHeader="Test"
        inset={true}
        subHeaderStyle={{ color: 'blue' }}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const theme: Partial<FullTheme> = {
      Divider: {
        style: {
          backgroundColor: 'red',
        },
      },
    };
    const { wrapper } = renderWithWrapper(<Divider />, 'RNE__Divider', theme);
    expect(wrapper.props.style).toMatchObject({ backgroundColor: 'red' });
  });
});
