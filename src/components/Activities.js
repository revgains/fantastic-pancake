import React from "react";
import { CabinsWrapper, CardWrapper } from "./Cabins";
import data from "../data/activities.json";
import styled from "styled-components";
import Card from "./Card";
import { H3 } from "../theme/typography";

const ActivitiesWrapper = styled(CabinsWrapper)``;

const Activities = () => {
    return (
        <ActivitiesWrapper>
            <H3>Activities in Rörvik</H3>
            <CardWrapper>
                {data.activities.map(activity => {
                    return (
                        <Card
                            name={activity.name}
                            beds={activity.beds}
                            description={activity.description}
                            image={activity.image}
                        />
                    );
                })}
            </CardWrapper>
        </ActivitiesWrapper>
    );
};

export default Activities;
