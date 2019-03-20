import styled from 'styled-components';
import colors from './colors';

export const H1 = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  color: ${colors.dark};
  font-size: 3.052em;
  font-weight: normal;
  margin-top: 4px;
`;

export const WhiteH1 = styled(H1)`
  color: ${colors.white};
`;

export const H2 = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  color: ${colors.blue};
  font-size: 2.441em;
  font-weight: normal;
  margin: 0px;
`;

export const H3 = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  color: ${colors.black};
  font-size: 1.953em;
  font-weight: 600;
  margin: auto;
`;

export const H4 = styled.h4`
  font-family: 'Josefin Sans', sans-serif;
  color: #333333;
  font-size: 18px;
  font-weight: 600;
`;

// LP = Large Paragraph

export const LP = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: #333333;
  font-size: 1.25em;
`;

// MP = Medium Paragraph

export const MP = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: ${colors.dark};
  font-size: 1em;
`;

// SP = Small Paragraph

export const SP = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: ${colors.dark};
  font-size: 0.75em;
  line-height: 22px;
`;

export const Description = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  color: ${colors.blue};
  font-size: 0.9em;
  font-weight: 600;
  padding-bottom: 8px;
  padding-top: 8px;
  margin: 0px;
`;

export default { H1, H2, H3, LP, MP, SP, Description };
