import React from 'react'
import styled from 'styled-components';
import SearchResultItem from "../Items/SearchResultItem";
import {FiltersIcon} from "../../../../icons";

const SearchResultDetail = ({items}) => {

    return (
        <Container>
            <Filter>
                <FiltersIcon/>
                <p>filters</p>
            </Filter>
            {
                items.map((item) => (
                    <SearchResultItem
                        items={item}
                        key={item?.id?.videoId}
                    />
                ))
            }
        </Container>
    )
}

const Container = styled.div`
  width: 1096px;
  margin: 0 auto;
  padding: 16px 24px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(224,224,224,1);
  padding: 6px 0;
  
  svg {
    fill:dimgray;
  }
  
  p {
    text-transform: uppercase;
    color: dimgray;
    margin: 0 0 0 8px;
    font-size: 14px;
    font-weight: bold;
  }
`;

export default SearchResultDetail;