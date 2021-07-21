import React from 'react'
import styled from 'styled-components';
import Sidebar from "../../common/components/Sidebar/Sidebar";
import SidebarMobile from "../../common/components/Sidebar/SidebarMobile";
import {useSelector} from "react-redux";
import {withRouter} from "react-router-dom";

const SidebarContainer = ({match, location}) => {

    const sidebar = useSelector(state => state.app.sidebar);

    const query = match.params.query;
    console.log("@@ match", match)
    console.log("@@ location", location)

    return (
        <Container>
            {
                sidebar ? <Sidebar/> :
                    (
                        (location.pathname === '/' || location.pathname === `/results/${query}`) ?
                            <SidebarMobile/> : <></>
                    )
            }
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(SidebarContainer);