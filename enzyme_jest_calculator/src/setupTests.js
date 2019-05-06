//create-react-app runs the setupTests.js file before each test, and properly configure enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
