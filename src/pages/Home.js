import React from 'react'
import styled from 'styled-components';
import MainListContainer from "../views/Home/containers/MainListContainer";

const Home = () => {
    return (
        <Container>
            {/*<TagsContainer/>*/}
            <MainListContainer/>
        </Container>
    )
}

const Container = styled.div`
  //display: flex;

`;

export default Home;