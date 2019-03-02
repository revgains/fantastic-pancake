import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import colors from '../theme/colors';
import cabin_data from '../data/cabins.json';
import activities_data from '../data/activities.json';
import background from '../images/footerbg.png';
import {MP, H4} from '../theme/typography';
import DropdownButton from './DropdownButton';
import footerLogo from '../images/Logo@1x.png';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookSquare, faInstagram);

const FooterWrapper= styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 504px;
    width: 100%;

    @media (max-width: 768px) {
        
      }
`;

const FooterTitle= styled.div`
    display: flex;
    height: 155px;
    width: 100%;
    background-image: url(${background});
    background-size: 100%;

    @media (max-width: 768px) {
        
      }
`;

const ListContainer= styled.div`
    background: ${colors.white};
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    
 
    @media (max-width: 768px) {
        
      }
`;


const ListElements= styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 72px 24px 72px;

    @media (max-width: 768px) {
        
      }
`;

const ListItem= styled(Link)`
    @import url("https://fonts.googleapis.com/css?family=Open+Sans");
    font-family: "Open Sans", sans-serif;
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
    @media (max-width: 768px) {
        
      }
`;

const Icon = styled(FontAwesomeIcon)`
      margin-left: 24px;
      font-size: 24px;
      color: ${colors.blue};
`;


const ExtraElements= styled.div`
    background: ${colors.grey100};
    display: inline-flex;
    justify-content: space-evenly;
    list-style-type: none;
    justify-content: space-between;
    margin: 0px 72px 0px 72px;

    @media (max-width: 768px) {
        
      }
`;

const FooterText= styled(MP)`
      color:${colors.grey400};
      font-size: 14px;
      margin-bottom: auto;
      margin-top: auto;
`;

const FooterLogo = styled.img`
      display: flex;
      margin: auto;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterTitle>
                <FooterLogo src={footerLogo} alt="rorvik-logo" />
            </FooterTitle>
            <ListContainer>
            <ListElements>
            <H4>Cottages</H4>
                {cabin_data.cabins.map(cabin => <ListItem key={cabin.id} to="/">{cabin.name}</ListItem>)}
            </ListElements>
            <ListElements>
            <H4>Activities</H4>
                {activities_data.activities.map(activity => <ListItem to="/">{activity.name}</ListItem>)}
            </ListElements>
            <ListElements>
            <H4>About</H4>
                <ListItem to="/">Pricing</ListItem>
                <ListItem to="/">Location</ListItem>
                <ListItem to="/">Company</ListItem>
                <ListItem to="/">Contact</ListItem>
            </ListElements>
            <ListElements>
            <H4>Yhteystiedot</H4>
                <MP> 564618165</MP>
                <MP> rorvikstugor@gmail.com</MP>
                <MP> Rörvikvägen, 22340 Geta</MP>
            </ListElements>
            </ListContainer>
            <ExtraElements>
              <H4>Seuraa Meitä
              <a href="https://fi-fi.facebook.com/pages/category/Hotel---Lodging/R%C3%B6rvik-Stugor-%C3%85land-199070200674255/" target="_blank" rel="noopener noreferrer">
              <Icon icon={faFacebookSquare} />
              </a>
              <Icon icon={faInstagram} />
              </H4>
            <FooterText>Käyttöehdot</FooterText>
            <FooterText>Rörvik Stugby @ 2019</FooterText>
              <DropdownButton/>
            </ExtraElements>
        </FooterWrapper>
    )
}
export default Footer;