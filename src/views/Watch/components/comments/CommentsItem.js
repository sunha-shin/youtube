import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components';
import ProfileThumb from "../../../common/components/Thumnnails/ProfileThumb";
import {DislikeIcon, LikeIcon} from "../../../../icons";
import moment from "moment";
import cn from 'classnames';

const CommentsItem = ({item}) => {
    const [showDesc, setShowDesc] = useState(true);
    const [descHeight, setDescHeight] = useState(0);
    const descRef = useRef(0);

    const height = descHeight > 88;

    const {
        authorDisplayName,
        authorProfileImageUrl,
        likeCount,
        publishedAt,
        textOriginal
    } = item?.snippet?.topLevelComment?.snippet

    useEffect(() => {
        if (descRef.current) {
            setDescHeight(descRef.current.clientHeight);
        }
    }, [])

    return (
        <Container>
            <ProfileThumb
                url={authorProfileImageUrl}
                size={40}
                marginRight={20}/>
            <Content>
                <Username>
                    <p className={'username'}>{authorDisplayName}</p>
                    <p className={'time'}>
                        {moment(publishedAt).fromNow()}
                    </p>
                </Username>
                <Body className={cn('Body', {isActive: showDesc, height: height})}>
                    {
                        height &&
                        <ShowButton onClick={() => setShowDesc(!showDesc)}>
                            {showDesc ? "Show more" : "Show less"}
                        </ShowButton>
                    }
                    <CommentsBody className={'CommentsBody'} ref={descRef}>
                        {textOriginal}
                    </CommentsBody>
                </Body>
                <Bottom>
                    <Button>
                        <LikeIcon
                            size={16}
                            color={'#909090'}
                            margin={"8px 8px 8px 0"}
                        />
                        <p>{likeCount}</p>
                    </Button>
                    <Button>
                        <DislikeIcon
                            size={16}
                            color={'#909090'}
                            margin={"8"}
                        />
                    </Button>
                    <Button>
                        <span>reply</span>
                    </Button>
                </Bottom>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  line-height: 2;
  margin-bottom: 20px;
`;

const Content = styled.div`
  line-height: 1.6;
  flex: 1;
`;

const Username = styled.div`
  display: flex;

  .username {
    font-size: 13px;
    color: #030303;
    margin: 0 4px 2px 0;
    font-weight: bold;
  }

  .time {
    font-size: 12px;
    color: #606060;

  }
`;

const Body = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-bottom: 0;

  &.height {
    padding-bottom: 25px;
  }

`;

const CommentsBody = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;

  .isActive & {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 12px;
    margin: 0 8px 0 0;
    color: #606060;
  }

  span {
    padding: 8px 16px;
    font-size: 13px;
    color: #606060;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ShowButton = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 14px;
  font-weight: bold;
  color: #606060;
  margin: 4px 0 0;
`;

export default CommentsItem;