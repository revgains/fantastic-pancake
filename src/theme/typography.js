import styled from "styled-components";
import colors from "./colors";

export const H1 = styled.h1`
    @import url("https://fonts.googleapis.com/css?family=Josefin+Sans");
    font-family: "Josefin Sans", sans-serif;
    color: ${colors.dark};
    font-size: 54px;
    font-weight: normal;
`;

export const WhiteH1 = styled(H1)`
    color: ${colors.white};
`;

export const H2 = styled.h2`
    @import url("https://fonts.googleapis.com/css?family=Josefin+Sans");
    font-family: "Josefin Sans", sans-serif;
    color: ${colors.blue};
    font-size: 44px;
    font-weight: normal;
`;

export const H3 = styled.h3`
    @import url("https://fonts.googleapis.com/css?family=Josefin+Sans");
    font-family: "Josefin Sans", sans-serif;
    color: ${colors.black};
    font-size: 36px;
    font-weight: 600;
    width: 327px;
    height: 86px;
`;

// LP = Large Paragraph

export const LP = styled.p`
    @import url("https://fonts.googleapis.com/css?family=Open+Sans");
    font-family: "Open Sans", sans-serif;
    color: #333333;
    font-size: 24px;
    line-height: 36px;
`;

// MP = Medium Paragraph

export const MP = styled.p`
    @import url("https://fonts.googleapis.com/css?family=Open+Sans");
    font-family: "Open Sans", sans-serif;
    color: ${colors.dark};
    font-size: 18px;
    line-height: 32px;
`;

// SP = Small Paragraph

export const SP = styled.p`
    @import url("https://fonts.googleapis.com/css?family=Open+Sans");
    font-family: "Open Sans", sans-serif;
    color: ${colors.dark};
    font-size: 14px;
    line-height: 22px;
`;

export default { H1, H2, H3, LP, MP, SP };
