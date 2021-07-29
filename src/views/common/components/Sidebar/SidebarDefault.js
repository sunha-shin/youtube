import React from 'react'
import styled from 'styled-components';
import Sidebar from "./Sidebar";
import HeaderLeft from "../Header/HeaderLeft";

const SidebarDefault = () => {
    // const sidebar = useSelector(state => state.app.sidebar);

    return (
        <Container>
            <Header>
                <HeaderLeft/>
            </Header>
            <Sidebar/>
        </Container>
    )
};

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 240px;
  z-index: 2000;
  overflow-y: auto;

  transition: 0.6s;

  &.isActive {
    transform: none;
  }
`;

const Header = styled.div`
  padding: 0 0 0 16px;
  background: #fff;
  width: 100%;
  border-bottom: 2px solid #f9f9f9;
`;


export default SidebarDefault;