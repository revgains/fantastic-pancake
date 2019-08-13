import React from "react";
import { H1, H3, LP, MP, SP, Description } from "../theme/typography";
import styled from "styled-components";
import colors from "../theme/colors";
import background from "../images/Rorvik-holidaycottages-Finland-hero_transparent.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

/*Hero */
const Wrapper = styled.div`
  background-color: ${colors.white};
  width: 100%;
  background-size: 100%;
`;

const Hero = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${colors.blue};
`;

const TextWrapper = styled.div`
  margin-left: 120px;
  width: 400px;
  padding-top: 158px;
  padding-bottom: 80px;
  @media (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
    width: auto;
    margin-left: 32px;
    margin-right: 32px;
  }
`;
const WhiteH1 = styled(H1)`
  color: ${colors.white};
  margin-top: 0px;
`;

const WhiteP = styled(LP)`
  color: ${colors.white};
`;
/* image and texts */

const CabinImage = styled.div`
  background-image: url(${background});
  width: 66%;
  height: 684px;
  float: left;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    background-image: url(${background});
    width: 100%;
    height: 300px;
    float: center;
    margin-top: 8px;
    margin-bottom: 0px;
  }
`;

const CabinContent = styled.div`
  background-color: ${colors.grey100};
  float: right;
  width: 33%;
  height: 684px;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    float: center;
    width: 100%;
    height: auto;
    margin-top: 0px;
    margin-bottom: 8px;
    padding-bottom: 32px;
  }
`;

const CabinText = styled.div`
  padding-left: 24px;
  padding-top: 128px;
  padding-right: 32px;
  @media (max-width: 768px) {
    padding-top: 24px;
  }
`;

const Link = styled.div`
  color: ${colors.blue};
  font-size: 18px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 600;
`;

const ActivityContent = styled.div`
  background-color: ${colors.grey100};
  float: left;
  width: 33%;
  height: 684px;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    float: center;
    width: 100%;
    height: auto;
    margin-top: 0px;
    margin-bottom: 8px;
    padding-bottom: 32px;
    flex-direction: column;
    display: flex;
  }
`;

const ActivityImage = styled.div`
  background-image: url(${background});
  width: 66%;
  height: 684px;
  float: right;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    background-image: url(${background});
    width: 100%;
    height: 300px;
    float: center;
    margin-top: 8px;
    margin-bottom: 0px;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Hero>
        <TextWrapper>
          <WhiteH1>Rörvik Resort</WhiteH1>
          <WhiteP>
            Rörvik resort is located in Geta which is in the northeast corner of the main island of
            Åland. Rörvik’s water is the clearest and cleanest of the sea water areas of Finland.
            <br />
            <br />
            Rörvik is perfect for people who are looking for nature and quiet “slow life”
            destination. Enjoy from the quietness, beautiful nature with “bonsai “ pines and open
            sea.
          </WhiteP>
        </TextWrapper>
      </Hero>
      <CabinImage />
      <CabinContent>
        <CabinText>
          <Description>8 cottages</Description>
          <H3>Holiday homes in Rörvik</H3>
          <MP>
            “Paviljong Is our biggest cottage with over 100 m2. It has kitchen, big living area,
            sauna and porch on both side of cottage. Sea view. Close to sea.”
          </MP>
          <Link>
            Find your cottage <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Link>
        </CabinText>
      </CabinContent>

      <ActivityContent>
        <ActivityImage />
        <CabinText>
          <Description>Enjoy Åhland</Description>
          <H3>Activities in Geta</H3>
          <MP>
            “Paviljong Is our biggest cottage with over 100 m2. It has kitchen, big living area,
            sauna and porch on both side of cottage. Sea view. Close to sea.”
          </MP>
          <Link>
            Explore activities <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Link>
        </CabinText>
      </ActivityContent>
    </Wrapper>
  );
};

export default Home;
