import React from 'react';
import data from '../data/cabins.json';
import Card from './Card';
import colors from '../theme/colors';
import styled from 'styled-components';
import { H3 } from '../theme/typography';

export const CabinsWrapper = styled.div`
  display: flex;
  background: ${colors.grey100};
  width: 100%;
  padding-top: 64px;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const H3Title = styled(H3)`
  height: 86px;
  width: 327px;
  margin-left: 74px;

  @media (max-width: 768px) {
    margin: auto;
  }
`;

const Cabins = () => {
  return (
    <CabinsWrapper>
      <H3Title>Accommodations in Rörvik</H3Title>
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
