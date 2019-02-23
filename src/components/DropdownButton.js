import React, { Component } from 'react';
import fin from '../images/flags/finnish.png';
import styled from 'styled-components';
import colors from '../theme/colors';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown);

const BtnImg = styled.img`
  height: 20px;
  width: 34px;
  margin: auto;
  border: 1px solid ${colors.grey200};
  border-radius: 4px;
`;

const FlagBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 130px;
  height: 48px;
  border: 1px solid #d9dee9;
  border-radius: 4px;
  margin: auto;
  background: rgba(255, 255, 255, 0);
`;

const LangTxt = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: 'Open Sans', sans-serif;
  width: 55px;
  height: 16px;
  color: ${colors.grey400};
  font-size: 12px;
  font-weight: solid;
  text-align: center;
  margin: auto;
`;

const Icon = styled.div`
  margin: auto;
  color: ${colors.grey400};
`;

class DropdownButton extends Component {
  state = {};
  render() {
    return (
      <FlagBtn>
        <BtnImg src={fin} alt="fin-flag" />
        <LangTxt>FIN</LangTxt>
        <Icon>
          <FontAwesomeIcon icon={'angle-down'} />
        </Icon>
      </FlagBtn>
    );
  }
}

export default DropdownButton;
