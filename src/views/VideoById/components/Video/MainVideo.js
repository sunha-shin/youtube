import React from 'react'
import styled from 'styled-components';

const MainVideo = ({videoId}) => {
    return (
        <Container>
            <iframe
                id="player" type="text/html" width="1280" height="720"
                src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
                frameBorder="0"/>
            {/*origin에 매개변수 값으로 호스트 페이지의 전체 도메인을 포함해야함*/}
        </Container>
    )
}

const Container = styled.div`

`;

export default MainVideo;