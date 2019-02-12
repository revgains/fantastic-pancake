import React from "react";
import { CabinsWrapper, CardTitle, CardWrapper } from "./Cabins";
import data from "../data/activities.json";
import styled from "styled-components";
import Card from "./Card";

const ActivitiesWrapper = styled(CabinsWrapper)``;

const Activities = () => {
    return (
        <ActivitiesWrapper>
            <CardTitle>Activities in Rörvik</CardTitle>
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
