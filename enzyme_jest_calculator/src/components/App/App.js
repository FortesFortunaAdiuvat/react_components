import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Calculator from '../Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Calcutron 2.0 with Jest & Enzyme
        </p>

        <Calculator />

        <a
          className="App-link"
          href="https://testdriven.io/blog/tdd-with-react-jest-and-enzyme-part-one/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reference TestDriven.io
        </a>
      </header>
    </div>
  );
}

export default App;
