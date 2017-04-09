import React from 'react';
import {shallow} from 'enzyme';
import SocialIcon from '../SocialIcon';

describe('SocialIcon component', () => {
  it('should render without issues', () => {
    const component = shallow(<SocialIcon type="twitter"/>);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('should show loading indicator', () => {
    const component = shallow(<SocialIcon loading />);

    expect(component.find('ActivityIndicator').length).toBe(1);
  });

  it('should render light social icon', () => {
    const component = shallow(<SocialIcon
      light
      raised={false}
      type='medium'
    />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('should render social icon button', () => {
    const component = shallow(<SocialIcon
      title='Sign In With Facebook'
      button
      type='facebook'
    />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('should render social icon button', () => {
    const component = shallow(<SocialIcon
      title='Sign In With Facebook'
      button
      type='facebook'
    />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('should have onPress event', () => {
    const onPress = jest.fn();
    const component = shallow(<SocialIcon onPress={onPress} />);

    component.simulate('press');
    expect(onPress).toHaveBeenCalled();
  });
});
