
// import styled from 'styled-components';
import React, { Component } from 'react';

import RootContext from '../context';

class Home extends Component {
  constructor(props) {
    super(props);
    this.toContext = data => this.setState(data);
    this.state = {
      toContext: this.toContext,
    };
  }

  render() {
    return (
      <p>hi</p>
    );
  }
}

Home.contextType = RootContext;

export default Home;
