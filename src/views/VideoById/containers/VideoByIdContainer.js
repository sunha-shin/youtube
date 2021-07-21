import React from 'react'
import styled from 'styled-components';
import {withRouter} from "react-router-dom";

const VideoByIdContainer = ({videoId}) => {

    // const sidebar = useSelector(state => state.app.sidebar);


    // const getVideoById = () => {
    //
    // };

    return (
        <Container>
            <MainVideoSection>
                {/*<iframe*/}
                {/*    id="player" type="text/html" width="1280" height="720"*/}
                {/*    src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}*/}
                {/*    frameBorder="0"/>*/}
                {/*    origin에 매개변수 값으로 호스트 페이지의 전체 도메인을 포함해야함*/}
            </MainVideoSection>


            <Recommended>

            </Recommended>
        </Container>
    )
}

const Container = styled.div`
  background: #f9f9f9;
  margin: 0 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainVideoSection = styled.div`
  margin: 0 0 0 24px;
  padding: 24px 24px 0 0;
`;

const Recommended = styled.div`

`;
export default withRouter(VideoByIdContainer);