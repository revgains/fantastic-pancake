import React from 'react';
import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft, faArrowRight);

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 99;
  bottom: 0;
  textalign: center;
`;

const ButtonRight = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  userselect: none;
  position: absolute;
  bottom: 0;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.8);
  right: 0;
  margin-right: 24px;
  margin-bottom: 18px;
`;

const ButtonLeft = styled(ButtonRight)`
  margin-right: 82px;
  margin-bottom: 18px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.8);
`;

export default function Buttons(props) {
  const { index, total, loop, prevHandler, nextHandler } = props;
  return (
    <Wrapper>
      {(loop || index !== 0) && (
        <ButtonLeft onClick={prevHandler}>
          <Icon icon={faArrowLeft} />
        </ButtonLeft>
      )}
      {(loop || index !== total - 1) && (
        <ButtonRight onClick={nextHandler}>
          <Icon icon={faArrowRight} />
        </ButtonRight>
      )}
    </Wrapper>
  );
}
