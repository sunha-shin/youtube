import {GlobalStyle} from "./styled/GlobalStyle";
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Search from "./pages/Search";
import Gnb from "./views/common/components/Header/Gnb";
import React from "react";
import VideoById from "./pages/VideoById";
import styled from "styled-components";
import SidebarContainer from "./views/Home/containers/SidebarContainer";

function App() {

    return (
        <Container>
            <GlobalStyle/>
            <Gnb/>
            <SidebarContainer/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/results/:query"} component={Search}/>
                <Route exact path={"/:id"} component={VideoById}/>
            </Switch>
        </Container>
    );
}

const Container = styled.div`
  background: #f9f9f9;
`;


export default App;

