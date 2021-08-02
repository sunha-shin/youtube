import React from 'react'
import styled from 'styled-components';
import {appActions} from "../redux/actionCreators";
import {withRouter} from "react-router-dom";
import WatchContainer from "../views/Watch/containers/WatchContainer";

const Watch = () => {

    appActions.handleSidebar(false);

    return (
        <Container>
            <WatchContainer/>
        </Container>
    )
}

const Container = styled.div`
`;

export default Watch;

// const params = qs.parse(location.search, {ignoreQueryPrefix:true});
// const videoId = params.v;
//
// useEffect(() => {
//
// }, [videoId])
