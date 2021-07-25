import React from 'react'
import styled from 'styled-components';

const MenuItem = ({title, renderItem, right}) => {
    return (
        <Container>
            <Contents>
                {
                    renderItem &&
                    <Icon>
                        {renderItem}
                    </Icon>
                }
                <h1>
                    {title}
                </h1>
                <RightIcon>
                    {right}
                </RightIcon>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
  display: block;
  cursor: pointer;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 24px;
  z-index: 3000;

  h1 {
    font-size: 14px;
    flex: 1;
  }

  &:hover {
    background: #f9f9f9;
  }
`;

const Icon = styled.div`
  margin-right: 24px;
  fill: dimgray;
`;

const RightIcon = styled.div`

`;
export default MenuItem;