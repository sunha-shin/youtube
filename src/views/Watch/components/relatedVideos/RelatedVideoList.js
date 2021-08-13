import React, {useEffect} from 'react'
import styled from 'styled-components';
import RelatedItem from "./RelatedItem";
import {useSelector} from "react-redux";
import {videoActions} from "../../../../redux/actionCreators";
import {withRouter} from "react-router-dom";

const RelatedVideoList = ({videoId, videoCategoryId}) => {

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
                    <RelatedItem
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

export default withRouter(RelatedVideoList);