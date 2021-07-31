import React from 'react'
import styled from 'styled-components';
import Menu from "../components/Sidebar/Menu";
import SidebarMobile from "../components/Sidebar/SidebarMobile";
import {useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarDim from "../components/Sidebar/SidebarDim";

const SidebarContainer = ({location}) => {

    const sidebar = useSelector(state => state.app.sidebar);

    return (
        <Container>
            {
                (location.pathname === '/watch') ?
                    <SidebarDim isVisible={sidebar}/>
                    :
                    (sidebar ? <Sidebar/> : <SidebarMobile/>)
            }
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
`;

export default withRouter(SidebarContainer);