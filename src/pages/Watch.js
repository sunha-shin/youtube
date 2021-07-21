import React from 'react'
import styled from 'styled-components';
import VideoByIdContainer from "../views/VideoById/containers/VideoByIdContainer";
import {withRouter} from "react-router-dom";

const Watch = ({location}) => {

    console.log("@@ video by Id container location", location)


    return (
        <Container>
            @@@@@@@@@@@@@@@@@@@@@watch page
            <VideoByIdContainer/>
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(Watch);