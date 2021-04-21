import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Tab } from '../tab';
import theme from '../../config/theme';

describe('Tab Component', () => {
  it('should render without issues', () => {
    const onValueChange = jest.fn();
    const component = shallow(
      <Tab theme={theme} onChange={onValueChange} value={0} variant="primary">
        <Tab.Item theme={theme} title="Tab 1" />
        <Tab.Item theme={theme} title="Tab 2" />
        <Tab.Item theme={theme} title="Tab 3" />
      </Tab>
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
