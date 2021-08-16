import React from 'react';
import SpeedDial from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('Speed Dial Component', () => {
  it('should match snapshot', () => {
    const { toJSON } = renderWithWrapper(
      <SpeedDial
        isOpen={true}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
      >
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title="Add"
          onPress={() => console.log('Add Something')}
        />
        <SpeedDial.Action
          icon={{ name: 'delete', color: '#fff' }}
          title="Delete"
          onPress={() => console.log('Delete Something')}
        />
      </SpeedDial>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
