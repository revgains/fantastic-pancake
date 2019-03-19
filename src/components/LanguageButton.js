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
  background: rgba(255, 255, 255, 0);
  margin-top: auto;
  margin-bottom: auto;
`;

const LangTxt = styled.p`
  font-family: 'Open Sans', sans-serif;
  width: 55px;
  height: 16px;
  color: ${colors.grey400};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: solid;
  text-align: center;
  margin: auto;
`;

const Icon = styled.div`
  margin: auto;
  color: ${colors.grey400};
`;

class LanguageButton extends Component {
  state = {
    language: 'fin',
    showFlagMenu: false
  };
  render() {
    return (
      <FlagBtn>
        <BtnImg src={fin} alt="fin-flag" />
        <LangTxt>{this.state.language}</LangTxt>
        <Icon>
          <FontAwesomeIcon icon={'angle-down'} />
        </Icon>
      </FlagBtn>
    );
  }
}

export default LanguageButton;