import React from 'react'
import styled from 'styled-components';
import ProfileThumb from "../Thumnnails/ProfileThumb";
import VideoThumb from "../Thumnnails/VideoThumb";
import {ViewMoreIcon} from "../../../../icons";
import moment from "moment";
import {abbreviateNumber} from "../../../../lib/common";
import {navigate} from "../../../../lib/history";
import {useSelector} from "react-redux";
import qs from 'qs';

const VideoItem = ({items = []}) => {

    const videoId = items.id;
    const duration = useSelector(state => items?.contentDetails?.duration);
    const url = useSelector(state => items?.snippet?.thumbnails?.medium?.url);

    const formatedView = abbreviateNumber(items?.statistics?.viewCount);

    const onClick = (id) => {
        navigate(`/watch?${qs.stringify({v: id})}`)
    };

    return (
        <Container onClick={() => onClick(videoId)}>
            <VideoThumb
                duration={duration}
                url={url}
            />
            <Desc>
                <ProfileThumb size={36} marginRight={12}/>
                <DescHead>
                    <h1 className={"title"}>{items?.snippet?.title}</h1>
                    <h1 className={"desc"}>{items?.snippet?.channelTitle}</h1>
                    <h1 className={"desc"}>
                        {formatedView} · {moment(items?.snippet?.publishedAt).fromNow()}
                    </h1>
                </DescHead>
                <ViewMoreIcon color={'#909090'}/>
            </Desc>
        </Container>
    )
}

const Container = styled.div`
  cursor: pointer;
`;

const Desc = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const DescHead = styled.div`
  line-height: 1.6;
  flex: 1;

  .title {
    color: #030303;
    font-size: 16px;
    font-weight: bold;
  }

  .desc {
    color: #606060;
    font-size: 14px;
    line-height: 1.4;
  }
`;

const Icon = styled.div`
  svg {
    fill: dimgray;
  }
`;

export default VideoItem;