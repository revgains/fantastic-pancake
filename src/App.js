import React, { Component } from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
    text-align: center;
`;
const AppTitle = styled.h1`
    color: rebeccapurple;
    font-weight: 600;
`;
class App extends Component {
    render() {
        return (
            <AppWrapper>
                <AppTitle>rörvik reactjs project</AppTitle>
            </AppWrapper>
        );
    }
}

export default App;
