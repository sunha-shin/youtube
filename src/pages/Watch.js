import React from 'react'
import styled from 'styled-components';
import VideoByIdContainer from "../views/Watch/containers/VideoByIdContainer";
import CommentsContainer from "../views/Watch/containers/CommentsContainer";
import RecommendVideosContainer from "../views/Watch/containers/RecommendVideosContainer";
import {appActions} from "../redux/actionCreators";

const Watch = () => {

    appActions.handleSidebar(false);

    return (
        <Container>
            <Main>
                <VideoByIdContainer/>
                <CommentsContainer/>
            </Main>
            <RecommendVideo>
                <RecommendVideosContainer/>
            </RecommendVideo>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  padding: 24px 24px 0 0;
  margin: 0 0 24px 64px;
`;

const RecommendVideo = styled.div`
  padding: 24px 24px 0 0;
`;


export default Watch;