import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cabin_data from '../data/cabins.json';
import activities_data from '../data/activities.json';
import background from '../images/footerbg.png';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  background: pink;
  height: 504px;
  width: 100%;
  bottom: 0;
`;

const FooterTitle = styled.div`
  height: 155px;
  width: 100%;
  background-image: url(${background});
`;

const ListContainer = styled.div`
  background: papayawhip;
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  height: 285px;
`;

const SubTitleWrapper = styled.div`
  color: #000000;
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 500;
  height: 24px;
  width: 73px;
  background: blue;
`;

const ListElements = styled.div`
  flex-direction: row;
  list-style-type: none;
  color: #333333;
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  height: 22px;
  line-height: 22px;
  width: 72px;
  background: green;
  margin: 16px;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  flex: 1;
`;

const ContactElements = styled.div`
  list-style-type: none;
  color: #0024aa;
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: solid;
  height: 16px;
  width: 16px;
  margin: 16px;
`;

const ExtraElements = styled.div`
  display: inline-flex;
  list-style-type: none;
  color: #333333;
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: mediumitalic;
  height: 64px;
  background: rebeccapurple;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTitle />
      <ListContainer>
        <ListElements>
          <SubTitleWrapper>Cottages</SubTitleWrapper>
          {cabin_data.cabins.map(cabin => (
            <ListItem>
              <Link key={cabin.id} to="">
                {cabin.name}
              </Link>
            </ListItem>
          ))}
        </ListElements>
        <ListElements>
          <SubTitleWrapper>Activities</SubTitleWrapper>
          {activities_data.activities.map(activity => (
            <ListItem>
              <Link to="">{activity.name}</Link>
            </ListItem>
          ))}
        </ListElements>
        <ListElements>
          <SubTitleWrapper>About</SubTitleWrapper>
          <ListItem>
            {' '}
            <Link to="">Pricing</Link>
          </ListItem>
          <ListItem>
            {' '}
            <Link to="">Location</Link>
          </ListItem>
          <ListItem>
            {' '}
            <Link to="">Company</Link>
          </ListItem>
          <ListItem>
            {' '}
            <Link to="">Contact</Link>
          </ListItem>
        </ListElements>
        <ContactElements>
          <SubTitleWrapper>Yhteystiedot</SubTitleWrapper>
          <ListItem>564618165</ListItem>
          <ListItem>rorvikstugor@gmail.com</ListItem>
          <ListItem>Rörvikvägen, 22340 Geta</ListItem>
        </ContactElements>
      </ListContainer>
      <ExtraElements>
        Seuraa Meitä <ListItem>Facebook</ListItem> <ListItem>Insta</ListItem>
      </ExtraElements>
    </FooterWrapper>
  );
};

export default Footer;
