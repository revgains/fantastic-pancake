import React from "react";
import data from "../data/cabins";
import colors from "../theme/colors";
import styled from "styled-components";
import testImg from "../images/banner-autumn.jpg";

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 381.65px;
    height: 428px;
    border: 1px ${colors.grey200} solid;
    background: ${colors.white};
`;

const CardImg = styled.img`
    width: 100%;
    height: 327px;
`;

const BedAmount = styled.p`
    @import url("https://fonts.googleapis.com/css?family=Open+Sans");
    font-family: "Open Sans", sans-serif;
    width: 112.73px;
    height: 14px;
    color: #0024aa;
    font-size: 11px;
    font-weight: 500;
    margin-bottom: 2px;
    margin-top: 6px;
    padding-left: 6px;
`;

const CabinName = styled.h4`
    @import url("https://fonts.googleapis.com/css?family=Open+Sans");
    font-family: "Open Sans", sans-serif;
    width: 66px;
    height: 24px;
    color: #000000;
    font-size: 18px;
    font-weight: 500;
    padding-left: 6px;
`;

const P = styled.p`
    @import url("https://fonts.googleapis.com/css?family=Open+Sans");
    font-family: "Open Sans", sans-serif;
    width: 960px;
    height: 48px;
    color: #333333;
    font-size: 14px;
    line-height: 22px;
    padding-left: 6px;
    max-width: 100%;
`;

const Card = () => {
    const cabinsMap = data.cabins.map(function(cabin) {
        return (
            <CardWrapper key={cabin.name}>
                <CardImg
                    src={require(`../images/${cabin.image}`)}
                    alt={cabin.name}
                />
                <BedAmount>{cabin.beds} beds</BedAmount>
                <CabinName>{cabin.name}</CabinName>
                <P>{cabin.description}</P>
            </CardWrapper>
        );
    });

    return <ul>{cabinsMap}</ul>;
};

export default Card;
