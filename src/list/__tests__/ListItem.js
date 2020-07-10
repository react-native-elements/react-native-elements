import React from 'react';
import { Text, Switch } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import theme from '../../config/theme';
import { ThemeProvider } from '../../config';

import ThemedListItem, { ListItem } from '../ListItem';
import ListAvatar from '../ListAvatar';
import ListIcon from '../ListIcon';
import ListTitle from '../ListTitle';
import ListChevron from '../ListChevron';
import ListInput from '../ListInput';

describe('ListItem component', () => {
  it('should render without issues', () => {
    const component = shallow(<ListItem theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with avatar', () => {
    const component = shallow(
      <ListItem theme={theme} containerStyle={{ backgroundColor: 'peru' }}>
        <ListAvatar source="avatar_uri" />
      </ListItem>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with left icon', () => {
    const component = shallow(
      <ListItem theme={theme}>
        <ListIcon name="wifi" type="font-awesome" color="red" size={20} />
      </ListItem>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with Text component', () => {
    const component = shallow(
      <ListItem theme={theme}>
        <Text>Test element</Text>
      </ListItem>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title and subtitle', () => {
    const component = shallow(
      <ListItem theme={theme}>
        <ListTitle
          title="title test"
          titleProps={{ numberOfLines: 5 }}
          subtitle="title test"
          titleStyle={{ backgroundColor: 'peru' }}
          subtitleStyle={{ backgroundColor: 'peru' }}
        />
        <ListTitle right title="title" />
      </ListItem>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with switch', () => {
    const component = shallow(
      <ListItem theme={theme} bottomDivider>
        <Switch value={true} />
        <ListChevron />
      </ListItem>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with input', () => {
    const component = shallow(
      <ListItem theme={theme}>
        <ListInput placeholder="Enter Text" />
      </ListItem>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const testTheme = {
      ListTitle: {
        title: 'List Title',
      },
    };

    const component = create(
      <ThemeProvider theme={testTheme}>
        <ThemedListItem>
          <ListTitle />
        </ThemedListItem>
      </ThemeProvider>
    );

    expect(
      component.root.findByProps({ testID: 'listItemTitle' }).props.children
    ).toBe('List Title');
    expect(component.toJSON()).toMatchSnapshot();
  });
});
