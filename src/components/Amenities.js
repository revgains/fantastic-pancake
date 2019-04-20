import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import { H4 } from '../theme/typography';
import cabin_data from '../data/cabins.json';

const Wrapper = styled.div`
    display: flex
    flex-direction: column;
`;

const Title = styled(H4)`
    color: ${colors.blue};
`;

const Container = styled.div`
    display: flex;
`;

const Item = styled.div`
    
`;

const Filter = ({}) => {
/*
tee filter että saadaan vain yhden mökin tiedot näkyviin
*/
}

const Amenities = () => {
    return (  
        <Wrapper>
                <Title>Amenities</Title>
                <Container>
                    {cabin_data.cabins.map(cabin => (
                    <Item key={cabin.id}>{cabin.amenities}
                    </Item>))}
                </Container>
        </Wrapper>
    );
};
 
export default Amenities;