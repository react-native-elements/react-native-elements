import React from 'react';
import ListItem from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { Avatar, Icon } from '../..';
import { TextInput } from 'react-native';

describe('ListItem component', () => {
  it('should match snapshot', () => {
    const component = renderWithWrapper(<ListItem />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with avatar', () => {
    const { wrapper } = renderWithWrapper(
      <ListItem containerStyle={{ backgroundColor: 'peru' }}>
        <Avatar source={{ uri: 'avatar_uri' }} />
      </ListItem>
    );
    expect(wrapper.findByType(Avatar).props).toMatchObject({
      source: { uri: 'avatar_uri' },
    });
  });

  it('should render with left icon', () => {
    const { wrapper } = renderWithWrapper(
      <ListItem>
        <Icon name="wifi" type="font-awesome" color="red" size={20} />
      </ListItem>
    );
    expect(wrapper.findByType(Icon).props).toMatchObject({
      name: 'wifi',
      color: 'red',
    });
  });

  it('should render with topDivider and bottomDivider', () => {
    const { wrapper } = renderWithWrapper(
      <ListItem topDivider={true} bottomDivider={true} />,
      'RNE__LISTITEM__padView'
    );
    expect(wrapper.props.style).toMatchObject({
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5,
    });
  });

  it('should render with disabled true and styles', () => {
    const { wrapper } = renderWithWrapper(
      <ListItem
        disabled={true}
        containerStyle={{ padding: 10 }}
        disabledStyle={{ backgroundColor: 'gray' }}
      />,
      'RNE__LISTITEM__padView'
    );
    expect(wrapper.props.style).toMatchObject({
      backgroundColor: 'gray',
    });
  });

  it('should render with title and subtitle', () => {
    const component = renderWithWrapper(
      <ListItem>
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
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should warn the user when using linearGradient without it installed', () => {
    console.error = jest.fn();
    renderWithWrapper(
      <ListItem
        linearGradientProps={{ colors: ['#4c669f', '#3b5998', '#192f6a'] }}
      />
    );
    expect((console.error as jest.Mock).mock.calls[0][0]).toBe(
      "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}"
    );
  });

  it('should render with input', () => {
    const onChange = jest.mock;
    const { wrapper } = renderWithWrapper(
      <ListItem>
        <ListItem.Input placeholder="Enter Text" onChangeText={onChange} />
      </ListItem>
    );
    const input = wrapper.findByType(TextInput);
    expect(input.props.placeholder).toBe('Enter Text');
  });

  it('should apply values from theme', () => {
    const theme = {
      ListItemTitle: {
        style: {
          color: 'red',
        },
      },
    };
    const { wrapper } = renderWithWrapper(
      <ListItem>
        <ListItem.Title />
      </ListItem>,
      'listItemTitle',
      theme
    );
    expect(wrapper.props.style.color).toBe('red');
  });
});
