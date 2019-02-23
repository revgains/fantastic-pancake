import React from "react";
import colors from "../theme/colors";
import styled from "styled-components"

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

library.add(faLongArrowAltRight);

const ButtonWrapper = styled.div`
    display: none;
    @media (max-width: 768px) {
        background-color: ${colors.blue};
        height: 72px;
        padding-left: 32px;
        display: flex;
        position: relative;
        bottom: 0;
        flex: 0 0 auto;
    }
`;

const TextWapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`


const Label = styled.h1`
    color: #FFFFFF;
    font-size: 18px;
    font-family: JosefinSans-SemiBold;
    font-weight: 600;
    margin-bottom: 0px;
`

const Description = styled.h2`
    color: #A8AFC8;
    font-size: 14px;
    font-family: OpenSans;
    line-height: 22px;
    font-weight: 300;
    margin-top: 0px;
`

const Icon = styled.div`
   color: ${colors.white};
   display: flex;
   margin: auto;
   margin-right: 32px;
`

const BookingButtonMobile = () => {
    return (
        <a href="http://www.booking.com/Share-ZSkpI9" target="_blank">
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
    )
}

export default BookingButtonMobile;