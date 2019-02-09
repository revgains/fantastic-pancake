import React, { Component } from 'react';
import styled from 'styled-components';
import Routing from './components/Routing';
import { Link } from 'react-router-dom';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const AppTitle = styled.h1`
  color: hsl(140, 100%, 75%);
  font-weight: 600;
  padding: 8px;
`;

const AppHeader = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(
    to right,
    hsl(335, 100%, 75%),
    hsl(185, 100%, 75%)
  );
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
  padding: 6px;
  border-left: solid 3px white;
  border-right: solid 3px white;
  border-radius: 24px;
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
          <AppTitle>rörvik reactjs project</AppTitle>
          <Navbar>
            <NavLink>
              <Link to="/">Home</Link>
            </NavLink>
            <NavLink>
              <Link to="/cabins">Cabins</Link>
            </NavLink>
            <NavLink>
              <Link to="/contact">Contact</Link>
            </NavLink>
          </Navbar>
        </AppHeader>
        <AppBody>
          <Routing />
        </AppBody>
      </AppWrapper>
    );
  }
}

export default App;
