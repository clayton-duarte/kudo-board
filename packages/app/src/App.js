
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import React, { Component } from 'react';

import RootContext from './context';
import theme from './theme';
import Home from './pages';

const GlobalStyle = createGlobalStyle`
body {
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.size};
  color: ${props => props.theme.font.color};
  margin: 0;
}
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.toContext = data => this.setState(data);
    this.state = {
      toContext: this.toContext,
    };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <RootContext.Provider value={this.state}>
          <Home />
          <GlobalStyle />
        </RootContext.Provider>
      </ThemeProvider>
    );
  }
}

export default App;
