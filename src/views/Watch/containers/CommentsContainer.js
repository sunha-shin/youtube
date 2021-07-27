import React from 'react'
import styled from 'styled-components';
import CommentsList from "../components/CommentsList";

const CommentsContainer = () => {
    return (
        <Container>
            <CommentsList/>
        </Container>
    )
}

const Container = styled.div`

`;

export default CommentsContainer;