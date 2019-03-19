import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../theme/colors';
import headerLogo from '../images/rorvik-logo.svg';
import LanguageButton from './LanguageButton';
import DropMenu from './DropMenu';
import MobileNav from './MobileNav';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);

export const Logo = styled.div`
  margin: auto;
  margin-left: 16px;
  margin-right: 8px;
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

const AppSubTitle = styled.div`
  width: 104px;
  height: 32px;
  color: ${colors.dark};
  font-size: 11px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 16px;
  margin: auto;
  margin-left: 8px;
  margin-right: 32px;
  position: relative;
  padding-top: 4px;
  @media (max-width: 768px) {
    margin: auto;
    margin-left: 16px;
    left: 0px;
    white-space: nowrap;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  margin: auto;
  margin-left: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
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
  }
`;

const NavLink = styled(Link)`
  width: 104px;
  height: 94%;
  margin: auto;
  margin-right: 16px;
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
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: none;
  }
`;

class Header extends Component {
  state = {
    showMenu: false
  };

  openMenu = e => {
    e.preventDefault();
    this.setState(
      {
        showMenu: true
      },
      () => {
        document.addEventListener('click', this.closeMenu);
      }
    );
  };

  closeMenu = () => {
    this.setState(
      {
        showMenu: false
      },
      () => {
        document.removeEventListener('click', this.closeMenu);
      }
    );
  };

  render() {
    return (
      <AppHeader>
        <TitleContainer>
          <Logo>
            <Link to="/">
              <img src={headerLogo} alt="rorvik-logo" />
            </Link>
          </Logo>
          <AppSubTitle>rent seaside cabins in åland</AppSubTitle>
        </TitleContainer>

        <NavElements>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cabins">Cottages</NavLink>
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/contact">Contacts</NavLink>
          <LanguageButton />
        </NavElements>
        <DropMenu handleOpen={this.openMenu} menuicon={faBars} />
        {this.state.showMenu ? (
          <MobileNav handleClick={this.closeMenu} />
        ) : null}
      </AppHeader>
    );
  }
}

export default Header;
