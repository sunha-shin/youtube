import React from 'react'
import styled from 'styled-components';
import {SortByIcon} from "../../../icons";
import ProfileThumb from "../../common/components/Thumnnails/ProfileThumb";
import {Placeholder} from "../../../constants/StringData";
import CommentsItem from "./CommentsItem";

const CommentsList = () => {
    return (
        <Container>
            <Header>
                <HeaderTop>
                    <Count>200 Comments</Count>
                    <SortBy>
                        <SortByIcon/>
                        <p>sort by</p>
                    </SortBy>
                </HeaderTop>
                <Add>
                    <ProfileThumb size={40} marginRight={20}/>
                    <CommentForm>
                        <input type="text"
                               Placeholder={Placeholder.comment}
                        />
                    </CommentForm>
                </Add>
            </Header>
            <Body>
                <CommentsItem/>
                <CommentsItem/>
                <CommentsItem/>
                <CommentsItem/>
                <CommentsItem/>
            </Body>
        </Container>
    )
}

const Container = styled.div`

`;

const Header = styled.div`
  margin: 24px 0 32px;
`;

const Body = styled.div`

`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 24px;
`;

const Count = styled.div`
  text-transform: capitalize;
  margin: 0 32px 0 0;
  font-size: 16px;
  color: #030303;
`;

const SortBy = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  color: #606060;
  font-weight: 400;
  cursor: pointer;

  p {
    margin: 0 0 0 8px;
  }
`;

const Add = styled.div`
  display: flex;
`;

const CommentForm = styled.div`
  cursor: text;
  padding-bottom: 4px;
  border-bottom: 1px solid #e0e0e0;
  flex: 1;
  height: 25px;

  input {
    border: 0;
    font-size: 14px;
    color: #333;
    width: 200px;
    outline: 0;
    display: block;
    background: none;
  }
`;
export default CommentsList;