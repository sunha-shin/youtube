import React from 'react'
import styled from 'styled-components';
import SearchBox from "../SearchBox";
import {MicIcon, SearchIcon} from "../../../../icons";
import {DefaultIcon} from "../Button/Button.Styled";

const HeaderSearchBox = () => {
    return (
        <Container>
            <SearchBox/>
            <Button>
                <MicIcon/>
            </Button>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled(DefaultIcon)`
  cursor: pointer;
`;

export default HeaderSearchBox;