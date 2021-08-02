import React from 'react'
import styled from 'styled-components';
import {appActions} from "../redux/actionCreators";
import {withRouter} from "react-router-dom";
import WatchContainer from "../views/Watch/containers/WatchContainer";

const Watch = ({location}) => {

    appActions.handleSidebar(false);

    return (
        <Container>
            <WatchContainer/>
            {/*<Main>*/}
            {/*    <VideoByIdContainer/>*/}
            {/*    <CommentsContainer/>*/}
            {/*</Main>*/}
            {/*<RecommendVideo>*/}
            {/*    <RecommendVideosContainer/>*/}
            {/*</RecommendVideo>*/}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  //margin: 0 75px;
  overflow: hidden;
  max-width: 1750px;
  margin: 0 auto;
`;

const Main = styled.div`
  margin: 0 0 0 24px;
  padding: 24px 24px 0 0;
  flex: 1;
`;

const RecommendVideo = styled.div`
  padding: 24px 24px 0 0;
  width: 426px;
  background: #eee;
  flex-shrink: 0;
`;


export default withRouter(Watch);

// const params = qs.parse(location.search, {ignoreQueryPrefix:true});
// const videoId = params.v;
//
// useEffect(() => {
//
// }, [videoId])
