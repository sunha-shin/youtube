import React, {useEffect} from 'react'
import styled from 'styled-components';
import VideoByIdContainer from "../views/Watch/containers/MainVideoContainer";
import CommentsContainer from "../views/Watch/containers/CommentsContainer";
import RecommendVideosContainer from "../views/Watch/containers/RecommendVideosContainer";
import {appActions} from "../redux/actionCreators";
import {withRouter} from "react-router-dom";
import qs from "qs";
import watchContainer from "../views/Watch/containers/WatchContainer";
import WatchContainer from "../views/Watch/containers/WatchContainer";

const Watch = ({location}) => {

    appActions.handleSidebar(false);

    return (
        <Container>
            <WatchContainer/>
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
  margin: 0 75px;
`;

const Main = styled.div`
  margin: 0 0 0 24px;
  padding: 24px 24px 0 0;
  flex: 1;
`;

const RecommendVideo = styled.div`
  padding: 24px 24px 0 0;
  flex: 1;
`;


export default withRouter(Watch);

// const params = qs.parse(location.search, {ignoreQueryPrefix:true});
// const videoId = params.v;
//
// useEffect(() => {
//
// }, [videoId])
