import React, { Component } from "react";
import styled from "styled-components";
import Routing from "./components/Routing";
import Header from "./components/Header";

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const AppBody = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 80px;
    height: 100%;
`;

class App extends Component {
    render() {
        return (
            <AppWrapper>
                <Header />
                <AppBody>
                    <Routing />
                </AppBody>
            </AppWrapper>
        );
    }
}

export default App;
