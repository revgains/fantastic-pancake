import React from 'react';
import data from '../data/cabins.json';
import Card from './Card';
import colors from '../theme/colors';
import styled from 'styled-components';

const CabinsWrapper = styled.div`
  display: flex;
  background: ${colors.grey100};
  width: 100%;
  height: 1440px;
  padding: 64px;
  padding-top: 64px;
  flex-direction: column;
`;

const CabinsTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  width: 327px;
  height: 86px;
  color: ${colors.dark};
  font-size: 36px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const Cabins = () => {
  return (
    <CabinsWrapper>
      <CabinsTitle>Accommodations in Rörvik</CabinsTitle>
      <CardWrapper>
        {data.cabins.map(cabin => {
          return (
            <Card
              name={cabin.name}
              beds={cabin.beds}
              description={cabin.description}
              image={cabin.image}
            />
          );
        })}
      </CardWrapper>
    </CabinsWrapper>
  );
};

export default Cabins;
