import React from 'react';
import data from '../data/cabins.json';
import Card from './Card';
import colors from '../theme/colors';
import styled from 'styled-components';

export const CabinsWrapper = styled.div`
  display: flex;
  background: ${colors.grey100};
  width: 100%;
  padding: 120px;
  padding-top: 64px;
  flex-direction: column;
  flex: 1;
`;

export const CardTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  width: 327px;
  height: 86px;
  color: ${colors.dark};
  font-size: 36px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  padding-left: 12px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const Cabins = () => {
  return (
    <CabinsWrapper>
      <CardTitle>Accommodations in Rörvik</CardTitle>
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
