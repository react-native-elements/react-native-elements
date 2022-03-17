import React from 'react';
import Header from '../index';
import { Button, ImageBackground, StatusBar, View } from 'react-native';
import { renderWithWrapper } from '../../../.ci/testHelper';

const btnCfg = { icon: 'home' };
const titleCfg = { text: 'This is a title' };

describe('Header Component', () => {
  it.skip('', () => {
    const { toJSON } = renderWithWrapper(
      <Header
        backgroundImage={{
          uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        }}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Header>
        <Button title="Test button" onPress={() => {}} />
      </Header>
    );
    expect(wrapper.findAllByType(Button).length).toBe(1);
    expect(wrapper.findByType(Button)).not.toBeNull();
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Header>
        <Button title="Test button 1" onPress={() => {}} />
        <Button title="Test button 2" onPress={() => {}} />
      </Header>
    );
    expect(wrapper.findAllByType(Button).length).toBe(2);
  });

  it.skip('', () => {
    const component = renderWithWrapper(<Header leftComponent={btnCfg} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const component = renderWithWrapper(
      <Header
        leftComponent={<Button title="Test button" onPress={() => {}} />}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const component = renderWithWrapper(<Header rightComponent={btnCfg} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Header
        rightComponent={<Button title="Test button" onPress={() => {}} />}
      />
    );
    expect(wrapper.findByType(Button).props.title).toBe('Test button');
  });

  it.skip('', () => {
    const component = renderWithWrapper(<Header centerComponent={titleCfg} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const component = renderWithWrapper(
      <Header
        centerComponent={<Button title="Test button" onPress={() => {}} />}
      />
    );
    expect(component.wrapper.findByType(Button).props.title).toBe(
      'Test button'
    );
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(<Header backgroundColor="#aaa" />);
    expect(wrapper.findAllByType(View)[0].props.style.backgroundColor).toBe(
      '#aaa'
    );
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(<Header elevated />);
    expect(wrapper.findAllByType(View)[0].props.style.elevation).toBe(24);
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Header containerStyle={{ backgroundColor: '#ccc' }} />
    );
    expect(wrapper.findAllByType(View)[0].props.style.backgroundColor).toBe(
      '#ccc'
    );
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Header statusBarProps={{ hidden: true }} />
    );
    expect(wrapper.findByType(StatusBar).props.hidden).toBe(true);
  });

  it('should apply props from theme', () => {
    const testTheme = {
      Header: {
        backgroundColor: 'pink',
      },
    };
    const { wrapper } = renderWithWrapper(
      <Header />,
      'headerContainer',
      testTheme
    );
    expect(wrapper.props.style).toMatchObject({
      backgroundColor: 'pink',
    });
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Header backgroundImage={{ uri: 'http://google.com' }} />
    );
    expect(wrapper.findByType(ImageBackground).props.source).toEqual({
      uri: 'http://google.com',
    });
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Header
        backgroundImage={{ uri: 'http://google.com' }}
        backgroundImageStyle={{ opacity: 0.1 }}
      />
    );
    expect(wrapper.findByType(ImageBackground).props.imageStyle).toMatchObject({
      opacity: 0.1,
    });
  });
});
