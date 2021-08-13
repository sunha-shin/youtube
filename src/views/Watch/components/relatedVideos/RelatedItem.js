import React from 'react'
import styled from 'styled-components';
import VideoThumb from "../../../common/components/Thumnnails/VideoThumb";
import {ViewMoreIcon} from "../../../../icons";
import ViewPublishedAt from "../../../common/components/FormatedNum/ViewPublishedAt";
import {navigate} from "../../../../lib/history";
import qs from 'qs';

const RelatedItem = ({item}) => {

    const viewCount = item?.statistics?.viewCount;
    const duration = item?.contentDetails?.duration;
    const imgUrl = item?.snippet?.thumbnails?.medium?.url;
    const {channelTitle, publishedAt} = item?.snippet?.channelTitle;
    const title = item?.snippet?.title;
    const videoId = item?.id;

    const onClick = (videoId) => {
        navigate(`/watch?${qs.stringify({v: videoId})}`)
    };

    return (
        <Container onClick={() => onClick(videoId)}>
            <VideoThumb url={imgUrl} duration={duration}/>
            <Body>
                <p className={'title'}>{title}</p>
                <p className={'username'}>{channelTitle}</p>
                <ViewPublishedAt
                    viewCount={viewCount}
                    publishedAt={publishedAt}
                    fontSize={12}
                />
            </Body>
            <ViewMoreIcon color={'#909090'}/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  cursor: pointer;
`;

const Body = styled.div`
  flex: 1;
  padding: 0 10px;
  line-height: 1.6;

  .title {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 14px;
    font-weight: bold;
    color: #030303;
    margin: 0 0 4px;
  }

  .username {
    font-size: 12px;
    color: #606060;
  }
`;

export default RelatedItem;