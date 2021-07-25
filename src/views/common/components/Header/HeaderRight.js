import React from 'react'
import styled from 'styled-components';
import {AppsIcon, BellIcon, CreateIcon, NotificationIcon, SettingsIcon, ViewMoreIcon} from "../../../../icons";
import {DefaultIcon} from "../Button/Button.Styled";
import SignInButton from "./SignInButton";
import {useSelector} from "react-redux";
import Member from "./Member";
import SignOutButton from "./SignOutButton";

const HeaderRight = () => {

    const {isLoggedIn, profile} = useSelector(state => state.auth);
    
    console.log("@@ profile", profile)

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
                        <Button>
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

const Button = styled(DefaultIcon)`
  margin: 0 4px;
`;

export default HeaderRight;