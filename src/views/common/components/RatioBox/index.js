import React from 'react'
import styled from 'styled-components';

const RatioBox = ({width, height, children}) => {

    return (
        <Container style={{paddingBottom: `${height / width * 100}%`}}>
            <Content>
                {children}
            </Content>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  background: #eee;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  > * {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }

`;

export default RatioBox;