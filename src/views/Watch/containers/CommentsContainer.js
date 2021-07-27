import React, {useEffect} from 'react'
import styled from 'styled-components';
import CommentsList from "../components/CommentsList";
import {watchActions} from "../../../redux/actionCreators";
import qs from "qs";
import {withRouter} from "react-router-dom";
import {useSelector} from "react-redux";

const CommentsContainer = ({location}) => {

    const params = qs.parse(location.search, {ignoreQueryPrefix: true});
    const videoId = params.v;
    // const commentsItem = useSelector(state => state.commentsItem?.items[0].snippet.topLevelComment.snippet.textDisplay);
    const commentsItem = useSelector(state => state.watch?.commentsItem);

    console.log("@@ commentsItem", commentsItem)

    useEffect(() => {
        getComments(videoId);
    }, [])

    const getComments = (videoId) => {
        watchActions.getComments({
            part: 'snippet',
            videoId
        })
    };

    return (
        <Container>

            <CommentsList commentsItem={commentsItem}/>

        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(CommentsContainer);