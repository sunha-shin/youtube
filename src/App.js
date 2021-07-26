import React from "react";
import styled from "styled-components";
import {GlobalStyle} from "./styled/GlobalStyle";
import {Switch, Route} from 'react-router-dom';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import Search from "./pages/Search";
import Gnb from "./views/common/components/Header/Gnb";
import Watch from "./pages/Watch";
import SidebarContainer from "./views/common/containers/SidebarContainer";
import Channel from "./pages/Channel";

function App() {

    return (
        <Container>
            <GlobalStyle/>
            <Gnb/>
            <SidebarContainer/>
            <Main>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/results"} component={Search}/>
                    <Route exact path={"/watch"} component={Watch}/>
                    <Route exact path={"/channel"} component={Channel}/>
                </Switch>
            </Main>
            <ToastContainer/>
        </Container>
    );
}

const Container = styled.div`
  background: #f9f9f9;
`;

const Main = styled.main`

`;

export default App;

