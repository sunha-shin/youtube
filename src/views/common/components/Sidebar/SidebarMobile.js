import React from 'react'
import styled from 'styled-components';
import {ExploreIcon, HistoryIcon, HomeIcon, LibraryIcon, SubscriptionsIcon} from "../../../../icons";
import MenuItemMobile from "../Items/MenuItemMobile";

const SidebarMobile = () => {
    return (
        <Container>
            <MenuItemMobile title={"Home"} renderItem={<HomeIcon/>}/>
            <MenuItemMobile title={"Explore"} renderItem={<ExploreIcon/>}/>
            <MenuItemMobile title={"Subscriptions"} renderItem={<SubscriptionsIcon/>}/>
            <MenuItemMobile title={"Library"} renderItem={<LibraryIcon/>}/>
            <MenuItemMobile title={"History"} renderItem={<HistoryIcon/>}/>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 56px;
  bottom: 0;
  left: 0;
  width: 72px;
  z-index: 2000;
  background: rgba(255, 255, 255);
`;

export default SidebarMobile;