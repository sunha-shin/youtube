import React, {useEffect} from 'react'
import styled from 'styled-components';
import {withRouter} from "react-router-dom";
import {videoActions} from "../../../redux/actionCreators";
import qs from "qs";
import {API_KEY} from "../../../constants";
import MainVideoContents from "../components/Video/MainVideoContents";
import _ from 'lodash';
import {useSelector} from "react-redux";
import IosLoader from "../../common/components/Loader/IosLoader";

const VideoByIdContainer = ({location}) => {

    const {videoId} = qs.parse(location.search, {ignoreQueryPrefix: true});
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

    if (_.isEmpty(videoItem)) return (
        <WatchLoader>
            <IosLoader/>
        </WatchLoader>
    );
    // videoItem이 empty면 중단

    return (
        <Container>
            <MainVideoContents videoItem={videoItem}/>
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

const WatchLoader = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withRouter(VideoByIdContainer);