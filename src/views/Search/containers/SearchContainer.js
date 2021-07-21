import React, {useEffect} from 'react'
import styled from 'styled-components';
import {searchActions} from "../../../redux/actionCreators";
import {API_KEY} from "../../../constants";
import {withRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import SearchResultDetail from "../components/Detail/SearchResultDetail";
import qs from "qs";

const SearchContainer = ({location}) => {

    const query = qs.parse(location.search, {ignoreQueryPrefix:true})
    const items = useSelector(state => state.search?.searchResult?.items);

    console.log("@@ search container location", location)

    useEffect(() => {
        getSearchResult();
    }, [query])

    const getSearchResult = () => {
        searchActions.getSearchResult({
            part: 'snippet',
            maxResults: 10,
            key: API_KEY,
            q: {query},
        })
    };

    return (
        <Container>
            {
                items &&
                <SearchResultDetail items={items}/>
            }
        </Container>
    )
}

const Container = styled.div`
  
`;

export default withRouter(SearchContainer);