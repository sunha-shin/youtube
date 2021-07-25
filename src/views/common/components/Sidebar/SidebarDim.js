import React from 'react'
import styled from 'styled-components';
import ReactDOM from "react-dom";
import SidebarDefault from "./SidebarDefault";

const SidebarDim = () => {

    return ReactDOM.createPortal(
        <Container>
            <Screen>
                <SidebarDefault/>
            </Screen>
        </Container>,
        document.getElementById('sidebarDim')
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
`;

export default SidebarDim;