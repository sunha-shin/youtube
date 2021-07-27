import React from 'react'
import styled from 'styled-components';
import ProfileThumb from "../../common/components/Thumnnails/ProfileThumb";
import {DislikeIcon, LikeIcon} from "../../../icons";

const CommentsItem = () => {
    return (
        <Container>
            <ProfileThumb size={40} marginRight={20}/>
            <Content>
                <Username>
                    <p className={'username'}>불량고양이</p>
                    <p className={'time'}>22 hours ago</p>
                </Username>
                <Body>content</Body>
                <Bottom>
                    <Button>
                        <LikeIcon
                            size={16}
                            color={'#909090'}
                            margin={"8px 8px 8px 0"}
                        />
                        <p>73</p>
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
  }

  .time {
    font-size: 12px;
    color: #606060;

  }
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  color: #030303;
  font-size: 14px;
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


export default CommentsItem;