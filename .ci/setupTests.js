import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('react-native-vector-icons/FontAwesome5', () => {
  return console.log;
});

configure({ adapter: new Adapter() });
