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
import {faPhone, faEnvelope, faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookSquare, faInstagram, faPhone, faEnvelope, faLocationArrow);


/*
kuva toistaa itteään pienil ruuduil,
listelement flex-wrap: wrap ei toimi vaan listat menee otsikon yli,
contactelement teksti ei mene iconin vieree vaan alapuolelle,
kännykässä fb ja insta logot ei mene Seuraa meitä tekstin alle,
*/


const FooterWrapper= styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 504px;
    width: 100%;

    @media (max-width: 768px) {
        width: auto;
        height: auto;
      }
`;

const FooterTitle= styled.div`
    display: flex;
    height: 155px;
    width: 100%;
    background-image: url(${background});
    background-size: 100%;

    @media (max-width: 768px) {
        background-size: auto;
        background-repeat: no-repeat;
      }
`;

const ListContainer= styled.div`
    background: ${colors.white};
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    
 
    @media (max-width: 768px) {
        flex-direction: column;
      }
`;

const ListElements= styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 72px 24px 72px;
    height: 182px;

    @media (max-width: 768px) {
        align-items: flex-start;
        margin: 5px 5px 24px 24px;
        height: 146px;

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
        margin-right: 2px;
        align-items: flex-start
      }
`;

const Icon = styled(FontAwesomeIcon)`
    margin-left: 24px;
    font-size: 24px;
    color: ${colors.blue};
`;

const ContactIcon = styled(FontAwesomeIcon)`
    font-size: 16px;
    color: ${colors.blue};
    justify-content: space-between;
    margin: 5px 5px 5px 5px;

`;


const ExtraElements= styled.div`
    background: ${colors.grey100};
    display: inline-flex;
    justify-content: space-evenly;
    list-style-type: none;
    justify-content: space-between;
    margin: 0px 72px 0px 72px;

    @media (max-width: 768px) {
        margin: 5px 5px 5px 24px
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        heigth: 147px;
      }
`;

const ContactElement= styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 72px 24px 72px;

    @media (max-width: 768px) {
        margin: 5px 5px 5px 24px;
    }
`;

const ContactElement2= styled.div`
    display: inline-flex;
    align-items: center;
`;

const ContactText = styled.p`
    @import url("https://fonts.googleapis.com/css?family=Open+Sans");
    font-family: "Open Sans", sans-serif;
    color: ${colors.dark};
    font-size: 14px;
    line-height: 22px;
`;

const FooterText= styled(MP)`
    color:${colors.grey400};
    font-size: 14px;
    margin-bottom: auto;
    margin-top: auto;

    @media (max-width: 768px) {
        order: 1;
    }
`;

const FooterLogo = styled.img`
    display: flex;
    margin: auto;
`;

const ListTitle= styled.div`
    flex: inline-flex;
    width: 100%;
`;

const ListLinks= styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 72px 24px 72px;
    flex-wrap: wrap;
    height: 182px;
    margin: 5px 5px 5px 5px;

    @media (max-width: 768px) {
        align-items: flex-start;
        margin: 5px 5px 24px 24px;
        height: 146px;

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
                {cabin_data.cabins.map(cabin => <ListItem key={cabin.id} to="/">{cabin.name}</ListItem>)}
            </ListLinks>
            </ListElements>
            <ListElements>
            <ListTitle>
            <H4>Activities</H4>
            </ListTitle>
            <ListLinks>
                {activities_data.activities.map(activity => <ListItem to="/">{activity.name}</ListItem>)}
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
                <ContactIcon icon={faPhone}/>
                <ContactText>+358 40 044 5669</ContactText>
            </ContactElement2>
            <ContactElement2>
                <ContactIcon icon={faEnvelope}/>
                <ContactText>Rorvikstugor@gmail.com</ContactText>
            </ContactElement2>
            <ContactElement2>
                <ContactIcon icon={faLocationArrow}/>
                <ContactText>Rörvikvägen, 22340 Geta</ContactText>
            </ContactElement2>
            </ContactElement>
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