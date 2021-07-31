import React from 'react'
import styled from 'styled-components';
import VideoItem from "../../../Watch/components/VideoItem";
import {BreakPoint} from "../../../../constants/styled";

const GridList = ({data = [], renderItem}) => {

    return (
        <Container>
            <Row>
                {
                    data.map((items, i) => (
                        <Col key={i}>
                            {renderItem(items)}
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

  @media (max-width: ${BreakPoint.LG}px) {
    width: 33.33%;
  }

  @media (max-width: ${BreakPoint.MD}px) {
    width: 50%;
  }
  @media (max-width: ${BreakPoint.SM}px) {
    width: 100%;
  }

`;

export default GridList;