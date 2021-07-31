import React from 'react'
import styled from 'styled-components';
import RatioBox from "../../../common/components/RatioBox";

const MainVideo = ({videoId}) => {
    return (
        <Container className={"MainVideo"}>
            <RatioBox
                width={16}
                height={9}>
                <iframe
                    id="player" type="text/html" width="1280" height="720"
                    src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
                    frameBorder="0"/>
                {/*origin에 매개변수 값으로 호스트 페이지의 전체 도메인을 포함해야함*/}
            </RatioBox>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1280px;
  justify-content: center;
  margin: 0 auto;
  max-height: 90vh;
`;

export default MainVideo;