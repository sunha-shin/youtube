import React, {useEffect} from 'react'
import styled from 'styled-components';
import {useSelector} from "react-redux";

const RecommendVideosContainer = () => {

    const state = useSelector(state => state);

    useEffect(() => {
        getRecommendVideos();
    }, [])

    const getRecommendVideos = () => {

    };


    return (
        <Container>
            RecommendVideos
        </Container>
    )
}

const Container = styled.div`

`;

export default RecommendVideosContainer;