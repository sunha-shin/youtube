import React from 'react'
import styled from 'styled-components';
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarMobile from "../components/Sidebar/SidebarMobile";
import {useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import SidebarWatch from "../components/Sidebar/SidebarWatch";

const SidebarContainer = ({location}) => {

    const sidebar = useSelector(state => state.app.sidebar);

    return (
        <Container>
            {
                (location.pathname === '/watch') ?
                    (sidebar && <SidebarWatch/>)
                    :
                    (sidebar ? <Sidebar/> : <SidebarMobile/>)
            }
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(SidebarContainer);