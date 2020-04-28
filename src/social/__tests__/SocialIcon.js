import React from 'react';
import { ActivityIndicator } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../config';

import ThemedSocialIcon, { SocialIcon } from '../SocialIcon';

describe('SocialIcon component', () => {
  it('should render without issues', () => {
    const component = shallow(<SocialIcon type="twitter" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should show loading indicator', () => {
    const component = shallow(<SocialIcon type="twitter" loading />);

    expect(component.find('ActivityIndicator').length).toBe(1);
  });

  it('should show loading indicator in small size', () => {
    const component = create(<SocialIcon loading small="small" />);

    const activityIndicator = component.root.findByType(ActivityIndicator);
    expect(activityIndicator.props.size).toEqual('small');
  });

  it('should show loading indicator in white color', () => {
    const component = create(<SocialIcon loading iconColor={null} />);

    const activityIndicator = component.root.findByType(ActivityIndicator);
    expect(activityIndicator.props.color).toEqual('white');
  });

  it('should render light social icon', () => {
    const component = shallow(
      <SocialIcon light raised={false} type="medium" />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have width and height based on iconSize', () => {
    const component = shallow(
      <SocialIcon button={false} light={false} raised={false} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should use style and font from props', () => {
    const component = shallow(
      <SocialIcon
        button
        light
        title="title"
        type="github"
        fontFamily="arial"
        fontWeight="bold"
        style={{ backgroundColor: 'pink' }}
        iconStyle={{ borderWidth: 1 }}
        fontStyle={{ justifyContent: 'center' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render social icon button', () => {
    const component = shallow(
      <SocialIcon title="Sign In With Facebook" button type="facebook" />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have onPress event', () => {
    const onPress = jest.fn();
    const component = shallow(<SocialIcon onPress={onPress} type="gitlab" />);

    component.simulate('press');
    expect(onPress).toHaveBeenCalled();
  });

  it('should NOT have onPress event when disabled', () => {
    const onPress = jest.fn();
    const component = shallow(<SocialIcon onPress={onPress} disabled />);

    component.simulate('press');
    expect(onPress).not.toHaveBeenCalled();
  });

  it('should apply values from theme', () => {
    const theme = {
      SocialIcon: {
        type: 'facebook',
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedSocialIcon />
      </ThemeProvider>
    );

    expect(
      component.root.findByType(ThemedSocialIcon).children[0].props.type
    ).toBe('facebook');
    expect(component.toJSON()).toMatchSnapshot();
  });
});
