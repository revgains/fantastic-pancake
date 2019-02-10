import React, { Component } from 'react';
import styled from 'styled-components';
import Routing from './components/Routing';
import { Link } from 'react-router-dom';
import colors from './theme/colors';

import headerLogo from './images/rorvik-logo.svg';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Logo = styled.div`
  margin: auto;
  height: 32px;
  width: 204px;
  padding-left: 16px;
`;

const AppSubTitle = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Nunito');
  width: 104px;
  height: 32px;
  color: ${colors.dark};
  font-size: 11px;
  font-family: 'Nunito', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 16px;
  margin: auto;
  margin-left: 4px;
`;

const AppHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 82px;
  position: fixed;
  background: ${colors.white};
`;

const AppBody = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  height: 100%;
`;

const NavLink = styled(Link)`
  width: 104px;
  height: 99%;
  margin: auto;
  line-height: 5em;
  color: ${colors.dark};
  font-size: 16px;
  font-family: Futura-MediumItalic;
  font-weight: mediumitalic;
  text-align: center;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    border-bottom: 3px solid #0024aa;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <Logo>
            <img src={headerLogo} alt="rorvik-logo" />
          </Logo>
          <AppSubTitle>rent seaside cabins in åland</AppSubTitle>
          <NavLink to="/cabins">Cottages</NavLink>
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/contact">Contacts</NavLink>
        </AppHeader>
        <AppBody>
          <Routing />
        </AppBody>
      </AppWrapper>
    );
  }
}

export default App;
