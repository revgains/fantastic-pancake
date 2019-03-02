import React from "react";
import {H1, H2, LP, MP, SP} from "../theme/typography";
import styled from "styled-components";
import colors from "../theme/colors";

const Wrapper = styled.div`
    background-color: ${colors.blue};
    width: 100%;
    background-size: 100%;
`
const TextWrapper = styled.div`
    margin-left: 200px;
    margin-top: 128px;
    margin-bottom: 128px;
    width: 400px;
`
const WhiteH1 = styled(H1)`
 color: ${colors.white}
`

const WhiteP = styled(LP)`
    color: ${colors.white}
`

const TeaserContent = styled.div`
    background-color: ${colors.grey100}
`

const CabinAd = styled.div`
    margin-left: 200px;
    width: 400px;
`

const Home = () => {
    return (
        <Wrapper>
            <TextWrapper>
                <WhiteH1>Rörvik Resort</WhiteH1>
                <WhiteP>Rörvik resort is located in Geta which is in the northeast corner of the main island of Åland.
                Rörvik’s water is the clearest and cleanest of the sea water areas of Finland.
                <br></br>
                <br></br>
                Rörvik is perfect for people who are looking for nature and quiet “slow life” destination. Enjoy from the quietness, beautiful nature with “bonsai “ pines and open sea.</WhiteP>
            </TextWrapper>     
            <TeaserContent>
                <CabinAd>
                <SP>8 cottages</SP>
                <H2>Holiday homes in Rörvik</H2>
                <MP>“Paviljong Is our biggest cottage with over 100 m2. It has kitchen, big living area, sauna and porch on both side of cottage. Sea view. Close to sea.”</MP>
                </CabinAd>
            </TeaserContent>
        </Wrapper> 

    );
};

export default Home;
