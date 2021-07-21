import React from 'react'
import styled from 'styled-components';

const MenuItemMobile = ({title, renderItem}) => {
    return (
        <Container>
            <Contents>
                <Icon>{renderItem}</Icon>
                <Title>{title}</Title>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
  padding: 16px 0 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #f9f9f9;
  }
`;

const Contents = styled.div`

`;

const Icon = styled.div`
  margin: 0 0 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  fill: dimgray;
`;

const Title = styled.div`
  font-size: 10px;
  color: dimgray;
`;
export default MenuItemMobile;