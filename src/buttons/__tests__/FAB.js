import React from 'react';
import { FAB } from '../FAB';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import theme from '../../config/theme';

describe('FAB Component', () => {
  beforeEach(() => {
    let useEffect = jest.spyOn(React, 'useEffect');
    useEffect.mockImplementation((f) => f());
    const app = shallow(<FAB theme={theme} />);
    expect(app.length).toBe(1);
  });
  it('should render without issues', () => {
    const app = shallow(<FAB theme={theme} />);
    expect(app.length).toBe(1);
    expect(toJson(app)).toMatchSnapshot();
  });
  it('should render with placement', () => {
    const app = shallow(<FAB theme={theme} placement="left" />);
    expect(app.length).toBe(1);
    expect(toJson(app)).toMatchSnapshot();
  });
  it('should render with title and size small', () => {
    const app = shallow(<FAB theme={theme} title="test" size="small" />);
    expect(app.length).toBe(1);
    expect(toJson(app)).toMatchSnapshot();
  });
  it('should render with title and size large', () => {
    const app = shallow(<FAB theme={theme} title="test" size="large" />);
    expect(app.length).toBe(1);
    expect(toJson(app)).toMatchSnapshot();
  });
  it('should render without title and size small', () => {
    const app = shallow(<FAB theme={theme} size="small" />);
    expect(app.length).toBe(1);
    expect(toJson(app)).toMatchSnapshot();
  });
  it('should render without title and size large', () => {
    const app = shallow(<FAB theme={theme} size="large" />);
    expect(app.length).toBe(1);
    expect(toJson(app)).toMatchSnapshot();
  });
  it('should render with disabled', () => {
    const app = shallow(<FAB theme={theme} disabled={true} />);
    expect(app.length).toBe(1);
    expect(toJson(app)).toMatchSnapshot();
  });
  it('should render with upperCase', () => {
    const app = shallow(<FAB theme={theme} upperCase={true} />);
    expect(app.length).toBe(1);
    expect(toJson(app)).toMatchSnapshot();
  });
  it('should render invisible', () => {
    const app = shallow(<FAB theme={theme} visible={false} />);
    expect(app.length).toBe(1);
    expect(toJson(app)).toMatchSnapshot();
  });
});
