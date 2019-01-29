import React, { Component } from "react";
import styled from "styled-components";
import Routing from "./components/Routing";

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
                <div>
                    <Routing />
                </div>
            </AppWrapper>
        );
    }
}

export default App;
