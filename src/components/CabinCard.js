import React from 'react';
import ImageCarousel from './Carousel';
import styled from 'styled-components';
import FixedButton from './FixedButton';
import colors from '../theme/colors';
import { H1, MP, Description } from '../theme/typography';
import data from '../data/cabins.json';

const Wrapper = styled.div`
  display: flex;
  background: ${colors.grey100};
  width: 100%;
  flex-direction: column;
  align-content: center;
  flex: 1;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 640px;
  background: #f7f7fa;
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

const CardInfo = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  margin: 96px 64px 0px 100px;

  @media (max-width: 800px) {
    margin: 24px 24px 0px 24px;
  }
`;

const CabinCard = () => {
  return (
    <Wrapper>
      <CardContainer>
        <CardInfo>
          <Description>{data.cabins[0].beds}</Description>
          <H1>Paviljong</H1>
          <MP>
            "Paviljong is our biggest cottage with over 100m2. It has a kitchen,
            big living area, sauna and porch on both sides of the cottage. Close
            to the sea."
          </MP>
          <FixedButton />
        </CardInfo>
        <ImageCarousel />
      </CardContainer>
    </Wrapper>
  );
};

export default CabinCard;
