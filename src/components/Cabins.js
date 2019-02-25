import React from "react";
import data from "../data/cabins.json";
import Card from "./Card";
import colors from "../theme/colors";
import styled from "styled-components";
import { H3 } from "../theme/typography";

export const CabinsWrapper = styled.div`
    display: flex;
    background: ${colors.grey100};
    width: 100%;
    padding: 120px;
    padding-top: 64px;
    flex-direction: column;
    flex: 1;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
`;
const Cabins = () => {
    return (
        <CabinsWrapper>
            <H3>Accommodations in Rörvik</H3>
            <CardWrapper>
                {data.cabins.map(cabin => {
                    return (
                        <Card
                            name={cabin.name}
                            beds={cabin.beds}
                            description={cabin.description}
                            image={cabin.image}
                        />
                    );
                })}
            </CardWrapper>
        </CabinsWrapper>
    );
};

export default Cabins;
