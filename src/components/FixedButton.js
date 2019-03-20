import React from 'react';
import colors from '../theme/colors';
import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

library.add(faLongArrowAltRight);

const ButtonWrapper = styled.div`
  background-color: ${colors.blue};
  display: flex;
  height: 72px;
  bottom: 0;

  @media (max-width: 800px) {
    flex: 0 0 auto;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const TextWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Label = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  margin: 24px 16px 0px 32px;
`;

const Description = styled.h2`
  color: #a8afc8;
  font-size: 14px;
  font-family: 'OpenSans', sans-serif;
  font-weight: 300;
  margin: 0px 16px 16px 32px;
`;

const Icon = styled.div`
  color: ${colors.white};
  display: flex;
  margin: auto;
  margin-right: 24px;
  font-size: 32px;
`;

const BookingButtonMobile = () => {
  return (
    <a
      href="http://www.booking.com/Share-ZSkpI9"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ButtonWrapper>
        <TextWapper>
          <Label>Check availability</Label>
          <Description>We will transfer you to booking.com</Description>
        </TextWapper>
        <Icon>
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </Icon>
      </ButtonWrapper>
    </a>
  );
};

export default BookingButtonMobile;
