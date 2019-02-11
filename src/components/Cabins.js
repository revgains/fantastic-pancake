import React from "react";
import data from "../data/cabins.json";
import Card from "./Card";
import colors from "../theme/colors";
import styled from "styled-components";

const CabinsWrapper = styled.div`
    display: flex;
    background: ${colors.grey100};
    width: 100%;
    padding: 120px;
    padding-top: 64px;
    flex-direction: column;
`;

const CabinsTitle = styled.h1`
    @import url("https://fonts.googleapis.com/css?family=Josefin+Sans");
    width: 327px;
    height: 86px;
    color: #000000;
    font-size: 36px;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
`;

const CardWrapper = styled(CabinsWrapper)`
    flex-direction: row;
`;

const Cabins = () => {
    return (
        <CabinsWrapper>
            <CabinsTitle>Accommodations in Rörvik</CabinsTitle>
            <CardWrapper>
                <Card />
            </CardWrapper>
        </CabinsWrapper>
    );
};

export default Cabins;
