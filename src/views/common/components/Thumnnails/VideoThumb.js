import React from 'react'
import styled from 'styled-components';
import {PlayIcon} from "../../../../icons";
import ytDurationFormat from 'youtube-duration-format';

const VideoThumb = ({url = '', duration = 'PT0000'}) => {

    const formatedDuration = ytDurationFormat(duration);

    return (
        <Container>
            <Thumb>
                <img src={url} alt=""/>
                <Icon>
                    <PlayIcon/>
                </Icon>
                <Duration>
                    {formatedDuration}
                </Duration>
            </Thumb>
        </Container>
    )
}

const Container = styled.div`

`;

const Thumb = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  img {
    flex: 1;
    background: #aaa;    
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  fill: #fff;
  opacity: 0;
  transition: .5s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const Duration = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 100;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  margin: 4px;
  padding: 3px 4px;
  background: #000000CC;
  border-radius: 3px;
`;

export default VideoThumb;