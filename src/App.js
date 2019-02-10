import React, { Component } from 'react';
import styled from 'styled-components';
import Routing from './components/Routing';
import { Link } from 'react-router-dom';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const AppTitle = styled.h2`
  margin: auto;
  color: #0024aa;
  font-weight: 600;
  padding: 8px;
`;

const AppSubTitle = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Nunito');
  width: 104px;
  height: 32px;
  color: #333333;
  font-size: 11px;
  font-family: 'Nunito', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 16px;
  margin: auto;
`;

const AppHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 82px;
  background: #ffffff;
`;

const AppBody = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const NavLink = styled(Link)`
  margin: auto;
  width: 104px;
  height: 21px;
  color: #0024aa;
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
  &:hover  {
    border-bottom: 2px solid #0024aa;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <AppTitle>RÖRVIK</AppTitle>
          <AppSubTitle>RENT SEASIDE CABINS IN ÅLAND</AppSubTitle>
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
