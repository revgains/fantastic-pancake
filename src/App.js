import React, { Component } from "react";
import styled from "styled-components";
import Routing from "./components/Routing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import colors from "./theme/colors";

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: ${colors.grey100};
`;

const AppBody = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 80px;
    min-height: 100%;
    flex: 1;
`;

class App extends Component {
    render() {
        return (
            <AppWrapper>
                <Header />
                <AppBody>
                    <Routing />
                </AppBody>
                <Footer />
            </AppWrapper>
        );
    }
}

export default App;
