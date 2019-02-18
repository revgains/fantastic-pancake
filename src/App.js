<<<<<<< HEAD
import React, { Component } from "react";
import styled from "styled-components";
import Routing from "./components/Routing";
import Header from "./components/Header";

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const AppBody = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 80px;
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
=======
import React, { Component } from 'react';
import styled from 'styled-components';
import Routing from './components/Routing';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import Footer from './components/Footer';

const GlobalStyles = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Open+Sans');
        font-family: 'Open Sans', sans-serif;
    }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const AppBody = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  height: 100%;
  flex: 1;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <AppBody>
          <Routing />
        </AppBody>
        <Footer/>
      </AppWrapper>
    );
  }
>>>>>>> b2eebf8c0e1378617540188ec82ad0bb4794eab0
}

export default App;
