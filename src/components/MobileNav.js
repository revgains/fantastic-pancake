import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import headerLogo from '../images/rorvik-logo.svg';
import { H4 } from '../theme/typography';
import { Link } from 'react-router-dom';

const MobileNavContainer = styled.div`
  width: 350px;
  height: 100vh;
  background: ${colors.grey100};
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.grey300};
  position: absolute;
  right: 0;
`;

const NavHeader = styled.div`
  color: pink;
  border-bottom: 1px solid ${colors.grey300};
`;

const MobileLogo = styled.img`
  margin: 20px 24px 20px 24px;
`;

const NavItem = styled.div`
  border-bottom: solid 1px ${colors.grey300};
  width: 100%;
  padding: 0px;
  background: ${colors.grey100};
  &:focus,
  &:hover,
  &:visited,
  &:active {
    text-decoration: none;
    cursor: pointer;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const MobileH4 = styled(H4)`
  margin: 20px 24px 20px 24px;
  &:hover {
    color: ${colors.blue};
  }
`;

const MobileNav = () => {
  return (
    <MobileNavContainer>
      <NavHeader>
        <MobileLogo src={headerLogo} alt="Rörvik" />
      </NavHeader>
      <NavLink to="/">
        <NavItem>
          <MobileH4>Home</MobileH4>
        </NavItem>
      </NavLink>
      <NavLink to="/cabins">
        <NavItem>
          <MobileH4>Cottages</MobileH4>
        </NavItem>
      </NavLink>
      <NavLink to="/activities">
        <NavItem>
          <MobileH4>Activities</MobileH4>
        </NavItem>
      </NavLink>
      <NavItem>
        <MobileH4 to="/about">About</MobileH4>
      </NavItem>
    </MobileNavContainer>
  );
};

export default MobileNav;
