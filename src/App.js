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
  color: blue;
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

const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const NavLink = styled.li`
  list-style-type: none;
  margin: auto;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  &:active {
    background: white;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <AppTitle>RÖRVIK</AppTitle>
          <AppSubTitle>RENT SEASIDE CABINS IN ÅLAND</AppSubTitle>
          <NavLink>
            <Link to="/cabins">Cottages</Link>
          </NavLink>
          <NavLink>
            <Link to="/activities">Activities</Link>
          </NavLink>
          <NavLink>
            <Link to="/pricing">Pricing</Link>
          </NavLink>
          <NavLink>
            <Link to="/contact">Contacts</Link>
          </NavLink>
        </AppHeader>
        <AppBody>
          <Routing />
        </AppBody>
      </AppWrapper>
    );
  }
}

export default App;
