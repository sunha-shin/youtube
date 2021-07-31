import React from 'react'
import styled from 'styled-components';

const AppIcon = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
  svg {
    fill:dimgray;
  }
  
  img {
    fill:dimgray;
  }
`;

export default AppIcon;