import React from 'react';
import { SpeedDial } from '../SpeedDial';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import theme from '../../config/theme';

describe('Speed Dial Component', () => {
  beforeEach(() => {
    let useEffect = jest.spyOn(React, 'useEffect');
    useEffect.mockImplementation((f) => f());
    const app = shallow(<SpeedDial open theme={theme} />);
    expect(app.length).toBe(1);
  });
  it('should render without issues', () => {
    const app = shallow(
      <SpeedDial
        theme={theme}
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
    expect(app.length).toBe(1);
    expect(toJson(app)).toMatchSnapshot();
  });
});
