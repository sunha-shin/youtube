import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {SearchIcon} from "../../../../icons";
import {navigate} from "../../../../lib/history";
import qs from 'qs';

const SearchBox = () => {

    const [term, setTerm] = useState('');

    const onChange = (event) => {
        setTerm(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        navigate(`/results?${qs.stringify({search_query: term})}`);
    };

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Label>
                    <Input
                        type={"text"}
                        placeholder={"Search"}
                        onChange={onChange}
                    />
                </Label>
                <Button>
                    <SearchIcon/>
                </Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
  flex: 1;
  margin: 0 0 0 40px;
  padding: 0 4px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 2px;
  background: rgba(255,255,255);
`;

const Label = styled.label`
  display: block;
  flex: 1;
  height: 32px;
  width: 525px;
  border-right: 1px solid #d3d3d3;
  padding: 2px 6px;
`;

const Input = styled.input`
  display: block;
  height: 100%;
  width: 100%;
  border: none;
  background: none;
  outline: none;
  color: gray;
`;

const Button = styled.button`
  background: #F8F8F8;
  padding: 1px 6px;
  border: none;
  height: 32px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    fill: gray
  }
  
  &:hover {
    svg{
      fill:dimgray;
    }
  }
`;


export default SearchBox;