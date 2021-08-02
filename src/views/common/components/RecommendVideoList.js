import React, {useEffect} from 'react'
import styled from 'styled-components';
import RecommendItem from "./Items/RecommendItem";
import {useSelector} from "react-redux";
import {videoActions, watchActions} from "../../../redux/actionCreators";
import {withRouter} from "react-router-dom";
import qs from "qs";

const RecommendVideoList = ({videoId, videoCategoryId}) => {

    const recommendVideoList = useSelector(state => state.video?.recommendVideo?.[videoCategoryId]);

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
                recommendVideoList &&
                recommendVideoList.map((items, i) => (
                    <RecommendItem
                        key={i}
                        item={items}
                    />
                ))
            }

        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(RecommendVideoList);