import React from 'react'
import styled from 'styled-components';
import {AppsIcon, SettingsIcon} from "../../../../icons";
import {DefaultIcon} from "../Button/Button.Styled";
import SignInButton from "../Button/SignInButton";

const HeaderRight = () => {
    return (
        <Container>
            <Button>
                <AppsIcon/>
            </Button>
            <Button>
                <SettingsIcon/>
            </Button>
            <SignInButton/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled(DefaultIcon)`
`;

export default HeaderRight;