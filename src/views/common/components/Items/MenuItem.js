import React from 'react'
import styled from 'styled-components';

const MenuItem = ({title, renderItem}) => {
    return (
        <Container>
            <Contents>
                <Icon>
                    {renderItem}
                </Icon>
                <h1>
                    {title}
                </h1>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
  display: block;
  cursor: pointer;
  margin: 0 24px 0 0;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 24px;

  h1 {
    font-size: 14px;
  }

  &:hover {
    background: #f9f9f9;
  }


`;

const Icon = styled.div`
  margin-right: 24px;
  fill: dimgray;
`;
export default MenuItem;