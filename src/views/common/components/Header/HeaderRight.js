import React from 'react'
import styled from 'styled-components';
import {AppsIcon, CreateIcon, NotificationIcon, ViewMoreIcon} from "../../../../icons";
import {DefaultIcon} from "../Button/Button.Styled";
import SignInButton from "./SignInButton";
import {useSelector} from "react-redux";
import Member from "./Member";

const HeaderRight = () => {

    const {isLoggedIn, profile} = useSelector(state => state.auth);

    return (
        <Container>
            {
                isLoggedIn &&
                <Button>
                    <CreateIcon/>
                </Button>
            }

            <Button>
                <AppsIcon/>
            </Button>

            {
                isLoggedIn ?
                    <>
                        <Button>
                            <NotificationIcon/>
                        </Button>
                        <Member profile={profile}/>
                    </>
                    :
                    <>
                        <Button className={'button'}>
                            <ViewMoreIcon/>
                        </Button>
                        <Button>
                            <SignInButton/>
                        </Button>
                    </>
            }

        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.div`
  margin: 0 4px;
`;

export default HeaderRight;