import React, { Component } from 'react';
import styled from 'styled-components';
import Routing from './components/Routing';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Open+Sans');
        font-family: 'Open Sans', sans-serif;
    }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const AppBody = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <AppBody>
          <Routing />
        </AppBody>
      </AppWrapper>
    );
  }
}

export default App;
