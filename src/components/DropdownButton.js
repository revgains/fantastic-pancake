import React, { Component } from "react";
import fin from "../images/flags/finnish.png";
import styled from "styled-components";
import colors from "../theme/colors";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown);

const Flag = styled.img`
    height: 20px;
    widht: 34px;
    margin: auto;
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
    @import url("https://fonts.googleapis.com/css?family=Open+Sans");
    font-family: "Open Sans", sans-serif;
    width: 55px;
    height: 16px;
    color: ${colors.grey400};
    font-size: 12px;
    font-weight: solid;
    text-align: center;
    margin: auto;
`;

const Arrow = styled.div`
    margin: auto;
    color: ${colors.grey400};
`;

class DropdownButton extends Component {
    state = {};
    render() {
        return (
            <FlagBtn>
                <Flag src={fin} alt="fin-flag" />
                <LangTxt>FIN</LangTxt>
                <Arrow>
                    <FontAwesomeIcon icon="angle-down" />
                </Arrow>
            </FlagBtn>
        );
    }
}

export default DropdownButton;
