import React, {useEffect} from 'react'
import styled from 'styled-components';
import {withRouter} from "react-router-dom";
import {appActions, watchActions} from "../../../redux/actionCreators";
import qs from "qs";
import MainVideoItem from "../../common/components/Items/MainVideoItem";
import _ from 'lodash';
import {useSelector} from "react-redux";
import IosLoader from "../../common/components/Loader/IosLoader";

const MainVideoContainer = ({location}) => {

    const params = qs.parse(location.search, {ignoreQueryPrefix: true});
    const videoId = params.v;
    const videoItem = useSelector(state => state.watch?.videoItem);

    appActions.handleSidebar(false);

    useEffect(() => {
        getVideoById(videoId)
    }, [])

    const getVideoById = (id) => {
        watchActions.getVideoById({
            part: `snippet, statistics`,
            id,
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
            <MainVideoItem videoItem={videoItem}/>
        </Container>
    )
}

const Container = styled.div`
 
`;

const WatchLoader = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withRouter(MainVideoContainer);