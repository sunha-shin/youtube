import React from 'react'
import styled from 'styled-components';
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarMobile from "../components/Sidebar/SidebarMobile";
import {useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import SidebarDefault from "../components/Sidebar/SidebarDefault";
import SidebarDim from "../components/Sidebar/SidebarDim";

const SidebarContainer = ({location}) => {

    const sidebar = useSelector(state => state.app.sidebar);

    return (
        <Container>
            {
                (location.pathname === '/watch') ?
                    (sidebar && <SidebarDim/>)
                    :
                    (sidebar ? <SidebarDefault/> : <SidebarMobile/>)
            }
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(SidebarContainer);