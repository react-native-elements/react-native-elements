import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../config';

import ThemedSocialIcon, { SocialIcon } from '../SocialIcon';

describe('SocialIcon component', () => {
  it('should render without issues', () => {
    const component = shallow(<SocialIcon name="twitter" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should show loading indicator', () => {
    const component = shallow(<SocialIcon name="twitter" loading />);

    expect(component.find('ActivityIndicator').length).toBe(1);
  });

  it('should render light social icon', () => {
    const component = shallow(
      <SocialIcon light raised={false} name="medium" />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render social icon button', () => {
    const component = shallow(
      <SocialIcon title="Sign In With Facebook" button name="facebook" />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render social icon from entypo set', () => {
    const component = shallow(
      <SocialIcon title="Sign In With Facebook" name="facebook" type="entypo" />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have onPress event', () => {
    const onPress = jest.fn();
    const component = shallow(<SocialIcon onPress={onPress} name="gitlab" />);

    component.simulate('press');
    expect(onPress).toHaveBeenCalled();
  });

  it('should apply values from theme', () => {
    const theme = {
      SocialIcon: {
        name: 'facebook',
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedSocialIcon />
      </ThemeProvider>
    );

    expect(
      component.root.findByType(ThemedSocialIcon).children[0].props.name
    ).toBe('facebook');
    expect(component.toJSON()).toMatchSnapshot();
  });
});
