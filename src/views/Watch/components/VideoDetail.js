import React from 'react'
import styled from 'styled-components';
import RecommendVideoList from "./RecommendVideoList";

const VideoDetail = ({videoId, videoItem, commentsItem}) => {

    return (
        <Container>
            VideoDetail
            <RecommendVideoList/>

        </Container>
    )
}

const Container = styled.div`

`;

export default VideoDetail;