import React from 'react';
import colors from '../theme/colors';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 381.65px;
  height: 428px;
  border: 1px ${colors.grey200} solid;
  background: ${colors.white};
  margin: 12px;
  padding-bottom: 8px;

  @media (max-width: 768px) {
    height: 437px;
    width: 327px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 327px;
  padding-bottom: 12px;
`;

const BedAmount = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: 'Open Sans', sans-serif;
  width: 112.73px;
  height: 14px;
  color: #0024aa;
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 2px;
  margin-top: 6px;
  padding-left: 20px;
`;

const CabinName = styled.h4`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: 'Open Sans', sans-serif;
  width: 66px;
  height: 24px;
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  padding-left: 20px;
  margin-top: 8px;
  margin-bottom: 4px;
`;

const P = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: 'Open Sans', sans-serif;
  width: 960px;
  height: 48px;
  color: #333333;
  font-size: 14px;
  line-height: 22px;
  padding-left: 20px;
  max-width: 100%;
  margin-top: 8px;
  margin-bottom: 12px;
`;

const Card = ({ image, name, beds, description }) => {
  return (
    <CardWrapper key={name}>
      <CardImg src={require(`../images/${image}`)} alt={name} />
      <BedAmount>{beds}</BedAmount>
      <CabinName>{name}</CabinName>
      <P>{description}</P>
    </CardWrapper>
  );
};

export default Card;
