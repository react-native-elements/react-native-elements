import React from 'react';
import { BottomSheet } from '../BottomSheet';
import { Modal, View } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

/** Renders a React Component with specified layout using onLayout callback */
const renderWithLayout = (component, layout) => {
  // create the component with renderer
  component = renderer.create(component);

  // create a nativeEvent with desired dimensions
  const mockNativeEvent = {
    nativeEvent: {
      layout: layout,
    },
  };

  // manually trigger onLayout with mocked nativeEvent
  component.toJSON().props.onLayout(mockNativeEvent);

  // re-render
  return component.toJSON();
};

describe('BottomSheet Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BottomSheet list={[{ title: 'test' }, { title: 'test2' }]} isVisible />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows when isVisible is true', () => {
    const component = shallow(
      <BottomSheet list={[{ title: 'test' }, { title: 'test2' }]} isVisible />
    );
    expect(component.find(Modal).props().visible).toBeTruthy();
  });

  it('not show when isVisible is false', () => {
    const component = shallow(
      <BottomSheet list={[{ title: 'test' }, { title: 'test2' }]} />
    );
    expect(component.find(Modal).props().visible).toBeFalsy();
  });

  it('onLayout should be called', async () => {
    const component = shallow(
      <BottomSheet list={[{ title: 'test' }, { title: 'test2' }]} isVisible />
    );
    const layout = { width: 768, height: 400 };
    const tree = renderWithLayout(component.find(View).at(1), layout);
    expect(tree).toMatchSnapshot();
  });
});
