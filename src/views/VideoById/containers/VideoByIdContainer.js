import React, {useEffect} from 'react'
import styled from 'styled-components';
import {withRouter} from "react-router-dom";
import {videoActions} from "../../../redux/actionCreators";
import qs from "qs";
import {API_KEY} from "../../../constants";
import RecommendedVideo from "../components/Video/RecommendedVideo";
import MainVideoContents from "../components/Video/MainVideoContents";
import {useSelector} from "react-redux";

const VideoByIdContainer = ({location}) => {

    const videoId = (qs.parse(location.search, {ignoreQueryPrefix: true}).v);
    const videoItem = useSelector(state => state.video?.videoItem);

    useEffect(() => {
        getVideoById(videoId)
    }, [])

    const getVideoById = (id) => {
        videoActions.getVideoById({
            part: `snippet, statistics`,
            id,
            key: API_KEY,
        })
    };

    return (
        <Container>
            {
                videoItem &&
                <MainVideoContents videoItem={videoItem}/>
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 75px;
  background: #f9f9f9;
`;

export default withRouter(VideoByIdContainer);