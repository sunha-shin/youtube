import React from 'react'
import styled from 'styled-components';
import MainVideo from "../VideoList/MainVideo";
import ViewPublishedAt from "../FormatedNum/ViewPublishedAt";
import {DislikeIcon, LikeIcon, SaveIcon, ShareIcon, VerticalViewMoreIcon} from "../../../../icons";
import {abbreviateNumber} from "../../../../lib/common";
import RecommendedVideoItem from "./RecommendedVideoItem";
import ProfileThumb from "../Thumnnails/ProfileThumb";
import {IconButton} from "../Button/Button.Styled";

const MainVideoItem = ({videoItem}) => {

    const videoId = videoItem?.id;

    const {title, description, publishedAt, channelTitle} = videoItem?.[0].snippet;
    const {viewCount, likeCount, dislikeCount} = videoItem?.[0].statistics;

    const formatedLike = abbreviateNumber(likeCount);
    const formatedDislike = abbreviateNumber(dislikeCount);

    return (
        <Container>
            <MainVideo videoId={videoId}/>
            <Header>
                <Title>{title}</Title>
                <HeaderBottom>
                    <ViewPublishedAt
                        publishedAt={publishedAt}
                        viewCount={viewCount}/>
                    <Count>
                        <Menu>
                            <Icon><LikeIcon/></Icon>
                            <p>{formatedLike}</p>
                        </Menu>
                        <Menu>
                            <Icon><DislikeIcon/></Icon>
                            <p>{formatedDislike}</p>
                        </Menu>
                        <Menu>
                            <Icon><ShareIcon/></Icon>
                            <p>share</p>
                        </Menu>
                        <Menu>
                            <Icon><SaveIcon/></Icon>
                            <p>save</p>
                        </Menu>
                        <Menu>
                            <Icon>
                                <VerticalViewMoreIcon/>
                            </Icon>
                        </Menu>
                    </Count>
                </HeaderBottom>
            </Header>
            <Body>
                <BodyTop>
                    <ProfileThumb size={48} marginRight={16}/>
                    <BodyTitle>
                        <p>{channelTitle}</p>
                        <p>123 subscribers</p>
                    </BodyTitle>
                    <Button>subscribe</Button>
                </BodyTop>
                <BodyDesc>
                    {description}
                </BodyDesc>
            </Body>
        </Container>
    )
}

const Container = styled.div`

`;

const Header = styled.div`
  padding: 20px 0 8px;
`;

const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18px;
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 6px 0 0;
  margin: 0 6px;
  color: dimgray;

  p {
    font-size: 14px;
    text-transform: uppercase;
  }
`;

const Icon = styled.div`
  padding: 6px;

  svg {
    fill: rgba(144, 144, 144, 1);
  }
`;

const Body = styled.div`
  margin: 0 0 24px;
  padding: 0 0 16px;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  border-top: 1px solid rgba(224, 224, 224, 1);
`;

const BodyTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 12px;
  padding: 16px 0 0;
`;


const BodyTitle = styled.div`
  flex: 1;
  margin: 2px 0;
  line-height: 1.6;

  p {
    display: flex;
    align-items: center;
  }
`;

const BodyDesc = styled.div`
  line-height: 1.6;
  width: 615px;
  padding-left: 64px;
  white-space: pre-wrap;
`;


const Button = styled(IconButton)`
  border: none;
  background: #cc0013;
  text-transform: uppercase;
  margin: 0 4px;
  padding: 10px 16px;
  font-size: 14px;
  color: #fff;
`;

export default MainVideoItem;