import React, {useEffect} from 'react'
import styled from 'styled-components';
import RecommendItem from "./RecommendItem";
import {useSelector} from "react-redux";
import {videoActions, watchActions} from "../../../redux/actionCreators";
import {withRouter} from "react-router-dom";
import qs from "qs";

const RecommendVideoList = ({location}) => {

    const params = qs.parse(location.search, {ignoreQueryPrefix: true});
    const videoId = params.v;

    const videoCategoryId = 23;

    // const recommendVideoItem = useSelector(state => state.watch?.recommendVideos?.items);

    useEffect(() => {
        getRecommendVideos();
    }, [])

    const getRecommendVideos = () => {
        videoActions.getRecommendVideos(videoCategoryId, {
            part: 'snippet, statistics, contentDetails',
            chart: 'mostPopular',
            videoCategoryId
        })
    };

    return (
        <Container>
            {
                // recommendVideoItem.map((items, i) => (
                //     <RecommendItem
                //         key={i}
                //         item={items}
                //     />
                // ))
            }

        </Container>
    )
}

const Container = styled.div`
  
`;

export default withRouter(RecommendVideoList);