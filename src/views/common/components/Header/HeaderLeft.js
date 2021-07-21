import React, {useEffect} from 'react'
import styled from 'styled-components';
import {MenuIcon} from "../../../../icons";
import Logo from "./Logo";
import {DefaultIcon} from "../Button/Button.Styled";
import {useSelector} from "react-redux";
import {appActions} from "../../../../redux/actionCreators";
import {navigate} from "../../../../lib/history";

const HeaderLeft = () => {
    const sidebar = useSelector(state => state.app.sidebar);

    const handleSidebar = () => {
        appActions.handleSidebar(!sidebar)
        console.log("@@ sidebar", sidebar)
    };

    return (
        <Container>
            <Button onClick={handleSidebar}>
                <MenuIcon/>
            </Button>
            <Logo/>
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


export default HeaderLeft;