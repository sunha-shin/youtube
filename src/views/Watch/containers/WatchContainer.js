import React, {useEffect} from 'react'
import styled from 'styled-components';
import {watchActions} from "../../../redux/actionCreators";
import qs from "qs";
import {withRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import VideoDetail from "../components/VideoDetail";

const WatchContainer = ({location}) => {

    const params = qs.parse(location.search, {ignoreQueryPrefix: true});
    const videoId = params.v;

    const videoItem = useSelector(state => state.watch?.[videoId]?.videoItem);
    const commentsItem = useSelector(state => state.watch?.[videoId]?.commentsItem);

    useEffect(() => {
        getVideoDetail(videoId);
    }, [videoId]);

    const getVideoDetail = (id) => {
        watchActions.getVideoDetail({id})
    };
    
    return (
        <Container>
            <VideoDetail
                videoItem={videoItem}
                commentsItem={commentsItem}
            />
        </Container>
    )
}

const Container = styled.div`
  display: flex;
`;

export default withRouter(WatchContainer);