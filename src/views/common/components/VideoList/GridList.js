import React from 'react'
import styled from 'styled-components';
import VideoItem from "../Items/VideoItem";

const GridList = ({data = []}) => {

    return (
        <Container>
            <Row>
                {
                    data.map((items, i) => (
                        <Col key={i}>
                            <VideoItem items={items}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`
  
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 12px;
  
`;

const Col = styled.div`
  padding: 12px;
  width: 25%;

`;

export default GridList;