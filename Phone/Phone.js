import React, { Component } from 'react';
import { render } from 'react-dom';
import { Parallax, Background } from 'react-parallax';
import phone-mock-up from './phone-mock-up.png';

class Phone extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <img src='phone-mock-up.png' />
      </div>
    );
  }
}

export default Phone;
