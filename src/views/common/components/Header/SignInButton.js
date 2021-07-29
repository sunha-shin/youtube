import React from 'react'
import styled from 'styled-components';
import {SignInIcon} from "../../../../icons";
import {useSignIn} from "../../../../hooks/useSignIn";
import IosLoader from "../Loader/IosLoader";

const SignInButton = () => {

    const {signIn, loaded} = useSignIn();

    if(!loaded) return <IosLoader/>

    return (
        <Container onClick={signIn}>
            <SignInIcon/>
            <span>sign in</span>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 5px 11px;
  color: #065FD4;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  border-radius: 3px;
  border: 1px solid #065FD4;
  cursor: pointer;
  width: 108.75px;
  height: 42px;

  span {
    margin: 0 0 0 8px;
  }

  svg {
    fill: #065FD4;
  }
`;

export default SignInButton;