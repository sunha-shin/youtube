import React from 'react'
import styled from 'styled-components';
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar";
import cn from 'classnames';
import HeaderLeft from "../Header/HeaderLeft";

const SidebarDim = ({isVisible}) => {

    return (
        <Container className={cn(`SidebarDim`, {isVisible})}>
            <Content>
                <Header>
                    <HeaderLeft/>
                </Header>
                <Sidebar header/>
            </Content>
            <Screen/>
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

const Content = styled.div`
  width: 240px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  
  transform: translateX(-105%);
  transition: 0.2s;

  .isVisible & {
    transform: none;
  }
`;

const Screen = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  display: none;

  .isVisible & {
    display: block;
  }
`;

const Header = styled.div`
  padding: 0 0 0 16px;
  background: #fff;
  width: 100%;
  border-bottom: 2px solid #f9f9f9;
`;

export default SidebarDim;