import React from 'react'
import styled from 'styled-components';
import SearchContainer from "../views/Search/containers/SearchContainer";
import cn from "classnames";
import {useSelector} from "react-redux";

const Search = () => {

    const sidebar = useSelector(state => state.app.sidebar);

    return (
        <Container className={cn("SearchContainer", {isActive: sidebar})}>
            <SearchContainer/>
        </Container>
    )
}

const Container = styled.div`
  padding-left: 72px;

  &.isActive {
    padding: 0 50px 0 300px;
  }
`;

export default Search;