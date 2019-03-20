import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../theme/colors';
import cabin_data from '../data/cabins.json';
import activities_data from '../data/activities.json';
import background from '../images/footerbg.png';
import { MP, H4 } from '../theme/typography';
import LanguageButton from './LanguageButton';
import footerLogo from '../images/Logo@1x.png';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationArrow
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faFacebookSquare,
  faInstagram,
  faPhone,
  faEnvelope,
  faLocationArrow
);

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: auto;
  width: 100%;

  @media (max-width: 800px) {
    width: auto;
    height: auto;
  }
`;

const FooterTitle = styled.div`
  display: flex;
  height: 155px;
  width: 100%;
  background-image: url(${background});
  background-size: 110%;
  background-repeat: no-repeat;

  @media (max-width: 800px) {
    background-size: 450%;
  }
`;

const ListContainer = styled.div`
  background: ${colors.white};
  flex-direction: row;
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ListElements = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 72px 16px 72px;

  @media (max-width: 800px) {
    align-items: flex-start;
    margin: 5px 5px 24px 24px;
  }
`;

const ListItem = styled(Link)`
  margin: 2px 2px 2px 10px;
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: 'Open Sans', sans-serif;
  flex: 1;
  margin-right: 20px;
  color: ${colors.dark};
  font-size: 14px;
  line-height: 22px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
    color: ${colors.blue};
  }
  @media (max-width: 800px) {
    margin: 4px;
    align-items: flex-start;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-left: 24px;
  font-size: 24px;
  color: ${colors.blue};

  @media (max-width: 800px) {
    margin-left: 0px;
    margin-right: 16px;
  }
`;

export const ContactIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  color: ${colors.blue};
  justify-content: space-between;
  margin: 5px 5px 5px 5px;
`;

const ExtraElements = styled.div`
    background: ${colors.grey100};
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    margin: 0px 72px 0px 72px;

    @media (max-width: 800px) {
        margin: 4px 4px 4px 24px
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        heigth: 147px;
      }
`;

export const ContactElement = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 72px 16px 72px;

  @media (max-width: 800px) {
    margin: 5px 5px 5px 24px;
  }
`;

export const ContactElement2 = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const ContactText = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: 'Open Sans', sans-serif;
  color: ${colors.dark};
  font-size: 14px;
  line-height: 22px;
  margin: 8px;
`;

const FooterText = styled(MP)`
  color: ${colors.grey400};
  font-size: 14px;
  margin-bottom: auto;
  margin-top: auto;

  @media (max-width: 800px) {
    order: 1;
  }
`;

const FooterLogo = styled.img`
  display: flex;
  margin: auto;
`;

const ListTitle = styled.div`
  flex: inline-flex;
  width: 100%;
  margin-left: 12px;
`;

const ListLinks = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 124px;

    @media (max-width: 800px) {
        align-items: flex-start;
        height: 146px;
        width: 100%;
`;

const SomeContainer = styled.div`
  display: flex;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  margin: auto;
  @media (max-width: 800px) {
    display: flex;
    margin: 0px 0px 0px 0px;
  }
`;

const SomeText = styled(H4)`
  @media (max-width: 800px) {
    margin-bottom: 12px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTitle>
        <FooterLogo src={footerLogo} alt="rorvik-logo" />
      </FooterTitle>
      <ListContainer>
        <ListElements>
          <ListTitle>
            <H4>Cottages</H4>
          </ListTitle>
          <ListLinks>
            {cabin_data.cabins.map(cabin => (
              <ListItem key={cabin.id} to="/">
                {cabin.name}
              </ListItem>
            ))}
          </ListLinks>
        </ListElements>
        <ListElements>
          <ListTitle>
            <H4>Activities</H4>
          </ListTitle>
          <ListLinks>
            {activities_data.activities.map(activity => (
              <ListItem to="/">{activity.name}</ListItem>
            ))}
          </ListLinks>
        </ListElements>
        <ListElements>
          <ListTitle>
            <H4>About</H4>
          </ListTitle>
          <ListLinks>
            <ListItem to="/">Pricing</ListItem>
            <ListItem to="/">Location</ListItem>
            <ListItem to="/">Company</ListItem>
            <ListItem to="/">Contact</ListItem>
          </ListLinks>
        </ListElements>
        <ContactElement>
          <ListTitle>
            <H4>Contact</H4>
          </ListTitle>
          <ContactElement2>
            <ContactIcon icon={faPhone} />
            <ContactText>+358 40 044 5669</ContactText>
          </ContactElement2>
          <ContactElement2>
            <ContactIcon icon={faEnvelope} />
            <ContactText>Rorvikstugor@gmail.com</ContactText>
          </ContactElement2>
          <ContactElement2>
            <ContactIcon icon={faLocationArrow} />
            <ContactText>Rörvikvägen, 22340 Geta</ContactText>
          </ContactElement2>
        </ContactElement>
      </ListContainer>
      <ExtraElements>
        <SomeContainer>
          <SomeText>Seuraa Meitä </SomeText>
          <IconsContainer>
            <a
              href="https://fi-fi.facebook.com/pages/category/Hotel---Lodging/R%C3%B6rvik-Stugor-%C3%85land-199070200674255/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={faFacebookSquare} />
            </a>
            <Icon icon={faInstagram} />
          </IconsContainer>
        </SomeContainer>

        <FooterText>Käyttöehdot</FooterText>
        <FooterText>Rörvik Stugby @ 2019</FooterText>
        <LanguageButton />
      </ExtraElements>
    </FooterWrapper>
  );
};
export default Footer;
