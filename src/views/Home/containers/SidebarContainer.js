import React from 'react'
import styled from 'styled-components';
import Sidebar from "../../common/components/Sidebar/Sidebar";
import SidebarMobile from "../../common/components/Sidebar/SidebarMobile";
import {useSelector} from "react-redux";
import {withRouter} from "react-router-dom";

const SidebarContainer = ({location}) => {

    const sidebar = useSelector(state => state.app.sidebar);

    return (
        <Container>
            {
                sidebar ? <Sidebar/> :
                    (
                        (!(location.pathname === `/watch`)) ?
                            <SidebarMobile/> : <></>
                    )
            }
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(SidebarContainer);