import React from 'react';
import BottomSheet from '../BottomSheet';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BottomSheet
        list={[{ title: 'test' }, { title: 'test2' }]}
        cancelButtonIndex={1}
        buttonProps={{ title: 'show' }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
