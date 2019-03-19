import React from 'react';
import colors from '../theme/colors';
import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faTimes);

const DropBtn = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: initial;
    align-self: flex-end;
    cursor: pointer;
    color: ${colors.navy};
    margin: auto;
    margin-right: 16px;
    border-style: none;
    border-radius: 4px;
    border: 1px solid ${colors.grey300};
    background: rgba(255, 255, 255, 0);
    height: 48px;
    width: 48px;
  }
`;

const DropMenu = ({ handleOpen, menuicon }) => {
  return (
    <DropBtn onClick={handleOpen}>
      <FontAwesomeIcon icon={menuicon} />
    </DropBtn>
  );
};

export default DropMenu;
