import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import headerLogo from '../images/rorvik-logo.svg';
import { H4 } from '../theme/typography';
import { Link } from 'react-router-dom';
import { ContactElement2, ContactText, ContactIcon } from './Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone,
  faEnvelope,
  faLocationArrow,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import DropMenu from './DropMenu';

library.add(faPhone, faEnvelope, faLocationArrow, faTimes);

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
  display: flex;
  flex-direction: row;
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

const MobileNavContact = styled(ContactElement2)`
  margin-left: 23px;
  margin-bottom: 18px;
`;

const Sublink = styled(NavLink)`
  width: 72px;
  height: 22px;
  color: ${colors.dark};
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  margin: 0px 8px 8px 24px;
`;

const SublinkContainer = styled.div`
  display: flex;
  max-height: 75px;
  min-width: 150px;
  justify-content: flex-start;
`;

const MobileNav = ({ handleClick }) => {
  return (
    <MobileNavContainer>
      <NavHeader>
        <MobileLogo src={headerLogo} alt="Rörvik" />
        <DropMenu onClick={handleClick} menuicon={faTimes} />
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
        <MobileH4>About</MobileH4>
        <SublinkContainer>
          <Sublink to="/pricing">Pricing</Sublink>
          <Sublink to="/company">Company</Sublink>
        </SublinkContainer>
        <SublinkContainer>
          <Sublink to="/">Location</Sublink>
          <Sublink to="/contact">Contact</Sublink>
        </SublinkContainer>
      </NavItem>
      <NavItem>
        <MobileH4>Yhteystiedot</MobileH4>
        <MobileNavContact>
          <ContactIcon icon={faPhone} />
          <ContactText>+358 40 044 5669</ContactText>
        </MobileNavContact>
        <MobileNavContact>
          <ContactIcon icon={faEnvelope} />
          <ContactText>rorvikstugor@gmail.com</ContactText>
        </MobileNavContact>
        <MobileNavContact>
          <ContactIcon icon={faLocationArrow} />
          <ContactText>Rörvikvägen, 22340 Geta</ContactText>
        </MobileNavContact>
      </NavItem>
    </MobileNavContainer>
  );
};

export default MobileNav;
