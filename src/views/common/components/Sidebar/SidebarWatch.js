import React from 'react'
import styled from 'styled-components';
import Sidebar from "./Sidebar";
import HeaderLeft from "../Header/HeaderLeft";
import cn from 'classnames';
import {useSelector} from "react-redux";


const SidebarWatch = () => {
    const sidebar = useSelector(state => state.app.sidebar);

    return (
        <Container className={cn("SidebarWatch", {isActive: sidebar})}>
            <HeaderLeft/>
            <Sidebar/>
        </Container>
    )
};

const Container = styled.div`
  background: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 3000;

  .isActive {
    transition: 0.6s;
  }
`;


export default SidebarWatch;