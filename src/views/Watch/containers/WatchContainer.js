import React, {useEffect} from 'react'
import styled from 'styled-components';
import {watchActions} from "../../../redux/actionCreators";
import qs from "qs";
import {withRouter} from "react-router-dom";

const WatchContainer = ({location}) => {

    const params = qs.parse(location.search, {ignoreQueryPrefix: true});
    const videoId = params.v;

    useEffect(() => {
        getVideoDetail(videoId);
    }, []);

    const getVideoDetail = (id) => {
        watchActions.getVideoDetail({id})
    };
    
    return (
        <Container>
            watchContainer
        </Container>
    )
}

const Container = styled.div`
  display: flex;
`;

export default withRouter(WatchContainer);