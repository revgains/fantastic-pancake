import styled from "styled-components";
import colors from "./colors";

export const H1 = styled.h1`
    @import url("https://fonts.googleapis.com/css?family=Josefin+Sans");
    font-family: "Josefin Sans", sans-serif;
    color: ${colors.dark};
    font-size: 3.052em;
    font-weight: normal;
`;

export const WhiteH1 = styled(H1)`
    color: ${colors.white};
`;

export const H2 = styled.h2`
    @import url("https://fonts.googleapis.com/css?family=Josefin+Sans");
    font-family: "Josefin Sans", sans-serif;
    color: ${colors.blue};
    font-size: 2.441em;
    font-weight: normal;
    margin: 0px;
`;

export const H3 = styled.h3`
    @import url("https://fonts.googleapis.com/css?family=Josefin+Sans");
    font-family: "Josefin Sans", sans-serif;
    color: ${colors.black};
    font-size: 1.953em;
    font-weight: 600;
    margin: auto;
`;

export const H4 = styled.h4`
    @import url("https://fonts.googleapis.com/css?family=Josefin+Sans");
    font-family: "Josefin Sans", sans-serif;
    color: #333333;
    font-size: 18px;
    font-weight: 600;
`;

// LP = Large Paragraph

export const LP = styled.p`
    @import url("https://fonts.googleapis.com/css?family=Open+Sans");
    font-family: "Open Sans", sans-serif;
    color: #333333;
    font-size: 1.25em;
`;

// MP = Medium Paragraph

export const MP = styled.p`
    @import url("https://fonts.googleapis.com/css?family=Open+Sans");
    font-family: "Open Sans", sans-serif;
    color: ${colors.dark};
    font-size: 1.0em;
`;

// SP = Small Paragraph

export const SP = styled.p`
    @import url("https://fonts.googleapis.com/css?family=Open+Sans");
    font-family: "Open Sans", sans-serif;
    color: ${colors.dark};
    font-size: 0.75em;
    line-height: 22px;
`;

export const Description = styled.p`
    @import url("https://fonts.googleapis.com/css?family=Josefin+Sans");
    font-family: "Josefin Sans", sans-serif;
    color: ${colors.blue};
    font-size: 0.9em;
    font-weight: 600;
    padding-bottom: 8px;
    padding-top: 8px;
    margin: 0px;
`;

export default { H1, H2, H3, LP, MP, SP, Description };
