import React from 'react'
import styled from 'styled-components';
import {ViewMoreIcon} from "../../../../icons";
import VideoThumb from "../../../common/components/Thumnnails/VideoThumb";
import moment from "moment";
import {abbreviateNumber} from "../../../../lib/common";
import {navigate} from "../../../../lib/history";
import qs from "qs";
import {useSelector} from "react-redux";
import ProfileThumb from "../../../common/components/Thumnnails/ProfileThumb";

const SearchResultItem = ({items}) => {

    const videoId = useSelector(state => items?.id?.videoId);

    const dateFormated = moment(items?.snippet?.publishedAt).fromNow();
    const viewFormated = abbreviateNumber(items?.statistics?.viewCount);

    console.log("@@ Search items", items)

    const onClick = (id) => {
        navigate(`/watch?${qs.stringify({v: id})}`)
    };


    return (
        <Container onClick={() => onClick(videoId)}>
            <Thumbnail>
                <VideoThumb url={items?.snippet?.thumbnails?.medium.url}/>
            </Thumbnail>
            <Desc>
                <Header>
                    <TitleText>{items?.snippet?.title}</TitleText>
                    <Icon><ViewMoreIcon/></Icon>
                </Header>
                <Body>
                    <Text>{viewFormated} · {dateFormated}</Text>
                    <ChannelInfo>
                        <ProfileThumb
                            // url={profileImage}
                            size={40}
                            marginRight={20}/>
                        <Text>{items?.snippet?.channelTitle}</Text>
                    </ChannelInfo>
                    <Text>{items?.snippet?.description}</Text>
                </Body>
            </Desc>

        </Container>
    )
}

const Container = styled.div`
  display: flex;
  padding-top: 15px;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  margin-right: 15px;  
  width: 360px;
  //height: 200px;
`;

const Desc = styled.div`
  font-size: 18px;
  color: #030303;
  line-height: 1.6;
  flex: 1;
`;


const TitleText = styled.div`
  font-size: 18px;
  color: #030303;
`;

const Text = styled.div`
  font-size: 12px;
  color: #606060;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  svg {
    fill: dimgray;
  }
`;
const Body = styled.div`

`;

const ChannelInfo = styled.div`
  display: flex;
  padding: 12px 0;
`;


export default SearchResultItem;