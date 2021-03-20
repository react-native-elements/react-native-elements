import React from 'react';
import { Dropdown } from '../Dropdown';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TouchableOpacity } from 'react-native';

describe('BottomSheet Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
          <Dropdown 
            title="--selection--" 
            items={[
                {element:'Facebook',value:'Facebook'},
                {element:'Twitch',value:'Twitch'},
                {element:'Twitter',value:'Twitter'},
            ]}/> 
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should show list', () => {
    const onPress = jest.fn();
    const wrapper = shallow(<Dropdown 
        title="--selection--" 
        onPress={onPress}
        items={[
            {element:'Facebook',value:'Facebook'},
            {element:'Twitch',value:'Twitch'},
            {element:'Twitter',value:'Twitter'},
      ]}/>);
    wrapper.find(TouchableOpacity).first().props().onPress();
    expect(wrapper).toMatchSnapshot();
  });
  it('should Change Selection', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Dropdown 
        title="--selection--" 
        onChange={onChange}
        items={[
            {element:'Facebook',value:'Facebook'},
            {element:'Twitch',value:'Twitch'},
            {element:'Twitter',value:'Twitter'},
      ]}/>);

    wrapper.find(TouchableOpacity).at(1).props().onPress();
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('should not change selection when disabled', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Dropdown 
                              disabled
                              onChange={onChange}
                              title="--selection disabled--" 
                              items={[
                                  {element:'Facebook',value:'Facebook'},
                                  {element:'Twitch',value:'Twitch'},
                                  {element:'Twitter',value:'Twitter'},
                              ]}/>
                             );
    wrapper.simulate('press');
    expect(onChange).not.toHaveBeenCalled();
  });
  it('should display dark theme', () => {
    const component = shallow(<Dropdown 
                theme="dark"
                title="--selection--" 
                items={[
                    {element:'Facebook',value:'Facebook'},
                    {element:'Twitch',value:'Twitch'},
                    {element:'Twitter',value:'Twitter'},
                ]}/>
      );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
