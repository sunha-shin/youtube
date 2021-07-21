import React from 'react'
import styled from 'styled-components';
import {abbreviateNumber} from "../../../../lib/common";
import moment from "moment";

const ViewPublishedAt = ({viewCount, publishedAt, fontSize}) => {

    const formatedView = abbreviateNumber(viewCount);
    const formatedPublishedAt = moment(publishedAt).fromNow();

    return (
        <Container>
                {formatedView} views · {formatedPublishedAt}
        </Container>
    )
}

const Container = styled.div`
    color: #606060;
    font-size: ${({fontSize}) => fontSize || 14}px;
    line-height: 1.4;
`;

export default ViewPublishedAt;