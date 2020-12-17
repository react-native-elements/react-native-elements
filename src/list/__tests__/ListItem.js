import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import theme from '../../config/theme';
import { ThemeProvider } from '../../config';

import ThemedListItem, { ListItem, Icon, Avatar } from '../ListItem';

describe('ListItem component', () => {
  it('should render without issues', () => {
    const component = shallow(<ListItem theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with avatar', () => {
    const component = shallow(
      <ListItem theme={theme} containerStyle={{ backgroundColor: 'peru' }}>
        <Avatar source="avatar_uri" />
      </ListItem>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with left icon', () => {
    const component = shallow(
      <ListItem theme={theme}>
        <Icon name="wifi" type="font-awesome" color="red" size={20} />
      </ListItem>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title and subtitle', () => {
    const component = shallow(
      <ListItem theme={theme}>
        <ListItem.Content>
          <ListItem.Title numberOfLines={5} style={{ backgroundColor: 'peru' }}>
            title test
          </ListItem.Title>
          <ListItem.Subtitle style={{ backgroundColor: 'peru' }}>
            title test
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content right>
          <ListItem.Title right>title</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with input', () => {
    const component = shallow(
      <ListItem theme={theme}>
        <ListItem.Input placeholder="Enter Text" />
      </ListItem>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const testTheme = {
      ListItemTitle: {
        style: {
          color: 'red',
        },
      },
    };

    const component = create(
      <ThemeProvider theme={testTheme}>
        <ThemedListItem>
          <ThemedListItem.Title />
        </ThemedListItem>
      </ThemeProvider>
    );

    expect(
      component.root.findByProps({ testID: 'listItemTitle' }).props.style.color
    ).toBe('red');
  });
});
