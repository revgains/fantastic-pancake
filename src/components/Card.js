import React from 'react';
import data from '../data/cabins';
import colors from '../theme/colors';
import styled from 'styled-components';
import testImg from '../images/banner-autumn.jpg';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 381.65px;
  height: 428px;
  background: green;
`;

const CardImg = styled.img`
  width: 100%;
  height: 327px;
`;

const BedAmount = styled.p`
  width: 112.73px;
  height: 14px;
  color: #0024aa;
  font-size: 11px;
  font-family: Futura-Medium;
  font-weight: 500;
`;

const CabinName = styled.h4`
  width: 66px;
  height: 24px;
  color: #000000;
  font-size: 18px;
  font-family: Futura-Medium;
  font-weight: 500;
`;

const Card = () => {
  return (
    <CardWrapper>
      <CardImg src={testImg} />
      <BedAmount>4 beds</BedAmount>
      <CabinName>Cabin</CabinName>
    </CardWrapper>
  );
};

export default Card;
