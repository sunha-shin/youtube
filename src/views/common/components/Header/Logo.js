import React from 'react'
import styled from 'styled-components';
import {LogoIcon} from "../../../../icons";
import {navigate} from "../../../../lib/history";

const Logo = () => {

    return (
        <Container onClick={() => navigate('/')}>
            <LogoIcon/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 14px 18px 16px;
  cursor: pointer;
`;

export default Logo;