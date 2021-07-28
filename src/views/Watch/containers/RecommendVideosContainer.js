import React, {useEffect} from 'react'
import styled from 'styled-components';
import {watchActions} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import RecommendList from "../components/RecommendList";

const RecommendVideosContainer = () => {

    const videoCategoryId = useSelector(state => state.watch?.videoItem?.[0]?.snippet?.categoryId);
    const recommendVideoItem = useSelector(state => state.watch?.recommendVideos?.items);

    useEffect(() => {
        getRecommendVideos(videoCategoryId);
    }, [])

    const getRecommendVideos = (videoCategoryId) => {
        watchActions.getRecommendVideos({
            part: 'snippet, statistics, contentDetails',
            chart: 'mostPopular',
            videoCategoryId
        })
    };

    return (
        <Container>
            {
                recommendVideoItem &&
                <RecommendList items={recommendVideoItem}/>
            }
        </Container>
    )
}

const Container = styled.div`
`;


export default RecommendVideosContainer;