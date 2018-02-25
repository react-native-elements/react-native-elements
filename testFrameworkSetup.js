import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const { document } = new JSDOM('').window;
global.document = document;

const documentHTML =
  '<!doctype html><html><body><div id="root"></div></body></html>';

configure({ adapter: new Adapter() });

Object.defineProperty(document, 'currentScript', {
  value: document.createElement('script'),
});

jest.mock('react-native-vector-icons/dist/Zocial', () => 'Icon');
jest.mock('react-native-vector-icons/dist/Octicons', () => 'Icon');
jest.mock('react-native-vector-icons/dist/MaterialIcons', () => 'Icon');
jest.mock(
  'react-native-vector-icons/dist/MaterialCommunityIcons',
  () => 'Icon'
);
jest.mock('react-native-vector-icons/dist/Ionicons', () => 'Icon');
jest.mock('react-native-vector-icons/dist/Foundation', () => 'Icon');
jest.mock('react-native-vector-icons/dist/EvilIcons', () => 'Icon');
jest.mock('react-native-vector-icons/dist/Entypo', () => 'Icon');
jest.mock('react-native-vector-icons/dist/FontAwesome', () => 'Icon');
jest.mock('react-native-vector-icons/dist/SimpleLineIcons', () => 'Icon');
jest.mock('react-native-vector-icons/dist/Feather', () => 'Icon');
