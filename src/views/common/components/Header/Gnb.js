import React from 'react'
import styled from 'styled-components';
import HeaderRight from "./HeaderRight";
import HeaderSearchBox from "./HeaderSearchBox";
import HeaderLeft from "./HeaderLeft";

const Gnb = () => {
    return (
        <Container>
            <HeaderLeft/>
            <HeaderSearchBox/>
            <HeaderRight/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: 2000;
  background: rgba(255,255,255, 0.98);  
`;

export default Gnb;