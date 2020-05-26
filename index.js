import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Phone from './Phone/Phone';

class App extends Component {
  constructor() {
  }

  render() {
    return (
      <Phone />
    );
  }
}

render(<App />, document.getElementById('root'));
