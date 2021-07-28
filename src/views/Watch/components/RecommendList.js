import React from 'react'
import styled from 'styled-components';
import RecommendItem from "./RecommendItem";

const RecommendList = ({items}) => {

    return (
        <Container>
            {
                items.map((items, i) => (
                    <RecommendItem
                        key={i}
                        item={items}
                    />
                ))
            }

        </Container>
    )
}

const Container = styled.div`
  
`;

export default RecommendList;