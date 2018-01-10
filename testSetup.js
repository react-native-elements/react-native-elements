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
