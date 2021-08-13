import React from 'react'
import styled from 'styled-components';
import MainVideoItem from "./mainVideo/MainVideoItem";
import CommentsList from "./comments/CommentsList";
import IosLoader from "../../common/components/Loader/IosLoader";
import RelatedVideoList from "./relatedVideos/RelatedVideoList";
import {useSelector} from "react-redux";

const VideoDetail = ({videoItem, commentsItem}) => {

    const videoId = videoItem?.[0]?.id;
    const videoCategoryId = useSelector(state => state.watch?.[videoId]?.videoItem?.[0].snippet?.categoryId);

    return (
        <Container>
            {
                (videoItem && commentsItem) ?
                    <>
                        <Main>
                            <MainVideoItem videoItem={videoItem}/>
                            <CommentsList commentsItem={commentsItem}/>
                        </Main>
                        <RelatedVideo>
                            <RelatedVideoList
                                videoId={videoId}
                                videoCategoryId={videoCategoryId}
                            />
                        </RelatedVideo>
                    </>
                    : <IosLoader/>
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  max-width: 1750px;
  margin: 0 auto;
`;

const Main = styled.div`
  margin: 0 0 0 24px;
  padding: 24px 24px 0 0;
  flex: 1;
`;

const RelatedVideo = styled.div`
  padding: 24px 24px 0 0;
  width: 426px;
  flex-shrink: 0;
`;

export default VideoDetail;