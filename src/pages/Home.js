import React from 'react'
import styled from 'styled-components';
import MainListContainer from "../views/Home/containers/MainListContainer";
import Sidebar from "../views/common/components/Sidebar/Sidebar";
import Gnb from "../views/common/components/Header/Gnb";
import SidebarContainer from "../views/Home/containers/SidebarContainer";
import TagsContainer from "../views/Home/containers/TagsContainer";

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