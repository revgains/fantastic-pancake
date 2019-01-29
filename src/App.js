import React, { Component } from "react";
import styled from "styled-components";
import Routing from "./components/Routing";

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;
const AppTitle = styled.h1`
    color: fuchsia;
    font-weight: 600;
    padding: 8px;
`;

const AppHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: black;
`;

const AppBody = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`;

class App extends Component {
    render() {
        return (
            <AppWrapper>
                <AppHeader>
                    <AppTitle>rörvik reactjs project</AppTitle>
                </AppHeader>
                <AppBody>
                    <Routing />
                </AppBody>
            </AppWrapper>
        );
    }
}

export default App;
