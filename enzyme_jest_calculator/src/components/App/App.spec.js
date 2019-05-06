//shallow render test
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import ReactDOM from "react-dom";
import Calculator from '../Calculator/Calculator';

describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

  // Snapshot Testing, doc ref: https://facebook.github.io/jest/docs/en/snapshot-testing.html
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('create react app generated test, app renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  });

  it('should render the Calculator Component', () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });

});


