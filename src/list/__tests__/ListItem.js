import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import theme from '../../config/theme';
import { ThemeProvider } from '../../config';

import ThemedListItem, { ListItem } from '../ListItem';

describe('ListItem component', () => {
  it('should render without issues', () => {
    const component = shallow(<ListItem theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with avatar', () => {
    const component = shallow(
      <ListItem
        theme={theme}
        avatar={{ source: 'avatar_uri' }}
        containerStyle={{ backgroundColor: 'peru' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with left icon', () => {
    const component = shallow(
      <ListItem
        theme={theme}
        leftIcon={{
          name: 'wifi',
          type: 'font-awesome',
          color: 'red',
          size: 20,
        }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with left icon component', () => {
    const component = shallow(
      <ListItem theme={theme} leftIcon={<Text>I'm left icon</Text>} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with right icon component', () => {
    const component = shallow(
      <ListItem theme={theme} rightIcon={<Text>I'm right icon</Text>} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with title and subtitle', () => {
    const component = shallow(
      <ListItem
        theme={theme}
        title="title test"
        titleProps={{ numberOfLines: 5 }}
        subtitle="title test"
        rightTitle="title"
        titleStyle={{ backgroundColor: 'peru' }}
        subtitleStyle={{ backgroundColor: 'peru' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with switch', () => {
    const component = shallow(
      <ListItem theme={theme} bottomDivider chevron switch={{ value: true }} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const theme = {
      ListItem: {
        title: 'List Title',
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedListItem />
      </ThemeProvider>
    );

    expect(
      component.root.findByProps({ testID: 'listItemTitle' }).props.children
    ).toBe('List Title');
    expect(component.toJSON()).toMatchSnapshot();
  });
});
