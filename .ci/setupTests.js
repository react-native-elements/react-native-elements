import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock(
  '../node_modules/react-native/Libraries/LayoutAnimation/LayoutAnimation.js',
);
