import React from 'react'
import styled from 'styled-components';
import HomeContainer from "../views/Home/containers/HomeContainer";

const Home = () => {
    return (
        <Container>
            {/*<TagsContainer/>*/}
            <HomeContainer/>
        </Container>
    )
}

const Container = styled.div`
  //display: flex;

`;

export default Home;