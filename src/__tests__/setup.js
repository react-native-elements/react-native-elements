import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('React 16 Setup', () => {
  it('should setup Enzyme Adapter for React 16', () => {
    expect(1).toBe(1);
  });
});
