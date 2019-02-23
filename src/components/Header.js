import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../theme/colors';
import headerLogo from '../images/rorvik-logo.svg';
import DropdownButton from './DropdownButton';

const Logo = styled.div`
  margin: auto;
  height: 32px;
  width: 204px;
  padding-left: 16px;
  @media (max-width: 768px) {
    display: flex;
    margin: auto;
    margin-top: 12px;
    margin-left: 0;
  }
`;

const AppSubTitle = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  width: 104px;
  height: 32px;
  color: ${colors.dark};
  font-size: 11px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 16px;
  margin: auto;
  margin-left: 4px;
  padding-top: 4px;
  @media (max-width: 768px) {
    margin: auto;
    margin-left: 16px;
    white-space: nowrap;
  }
`;

const AppHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 82px;
  position: fixed;
  background: ${colors.white};
  @media (max-width: 768px) {
    margin: auto;
    flex-direction: column;
  }
`;

const NavLink = styled(Link)`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  width: 104px;
  height: 99%;
  margin: auto;
  line-height: 5em;
  color: ${colors.dark};
  font-size: 16px;
  font-family: 'Josefin Sans', sans-serif;
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
    border-bottom: 6px solid #0024aa;
  }
`;

const NavElements = styled.div`
  display: flex;
  margin-right: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <AppHeader>
      <Logo>
        <Link to="/">
          <img src={headerLogo} alt="rorvik-logo" />
        </Link>
      </Logo>
      <AppSubTitle>rent seaside cabins in åland</AppSubTitle>
      <NavElements>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cabins">Cottages</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/contact">Contacts</NavLink>
        <DropdownButton />
      </NavElements>
    </AppHeader>
  );
};

export default Header;
