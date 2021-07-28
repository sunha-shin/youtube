import React from 'react'
import styled from 'styled-components';
import {abbreviateNumber} from "../../../../lib/common";
import moment from "moment";

const ViewPublishedAt = ({viewCount, publishedAt, fontSize, mainPublishedAt}) => {

    const formatedView = abbreviateNumber(viewCount);
    const formatedPublishedAt = mainPublishedAt ?
        (moment(publishedAt).format("MMM Do, YY")) : (moment(publishedAt).fromNow());

    return (
        <Container fontSize={fontSize}>
            {formatedView} views · {formatedPublishedAt}
        </Container>
    )
}

const Container = styled.div`
  color: #606060;
  font-size: ${props => props.fontSize || 14}px;
  line-height: 1.4;
`;

export default ViewPublishedAt;