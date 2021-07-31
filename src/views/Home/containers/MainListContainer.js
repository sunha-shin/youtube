import React, {useEffect} from 'react'
import styled from 'styled-components';
import GridList from "../../common/components/VideoList/GridList";
import {appActions, homeActions} from "../../../redux/actionCreators";
import {API_KEY} from "../../../constants";
import {useSelector} from "react-redux";
import cn from 'classnames'
import VideoItem from "../../Watch/components/VideoItem";

const MainListContainer = () => {

    const list = useSelector(state => state.home?.videoList?.items);
    const sidebar = useSelector(state => state.app.sidebar);
    const renderVideoItem = (item) => <VideoItem items={item}/>

    useEffect(() => {
        getVideo();
        appActions.handleSidebar(true);
    }, [])

    const getVideo = () => {
        homeActions.getVideo({
            part: 'snippet, statistics, contentDetails',
            chart: 'mostPopular',
            maxResults: 20,
            key: API_KEY,
        })
    };

    return (
        <Container className={cn("MainListContainer", {isActive: sidebar})}>
            tags@@
            <GridList
                data={list}
                renderItem={renderVideoItem}
            />
        </Container>
    )
}

const Container = styled.div`
  padding-left: 72px;

  &.isActive {
    //padding-left: 240px;
    padding: 0 50px 0 300px;
  }
`;

export default MainListContainer;