import React from 'react'
import styled from 'styled-components';
import MenuItem from "../Items/MenuItem";
import {
    BrowseChannelsIcon,
    ExploreIcon, FashionNBeautyIcon, FeedbackIcon,
    FlagIcon, GamingIcon, HelpIcon,
    HistoryIcon,
    HomeIcon, LearningIcon,
    LibraryIcon, LiveIcon, MoviesShowsIcon, MusicIcon, NewsIcon, PremiumLiveIcon,
    SettingsIcon, SpotlightIcon,
    SubscriptionsIcon, Video360Icon, YouTubePremiumIcon
} from "../../../../icons";
import SignInButton from "../Button/SignInButton";

const Sidebar = () => {
    return (
        <Container>
            <Section>
                <MenuItem title={"Home"} renderItem={<HomeIcon/>}/>
                <MenuItem title={"Explore"} renderItem={<ExploreIcon/>}/>
                <MenuItem title={"Subscriptions"} renderItem={<SubscriptionsIcon/>}/>
            </Section>
            <Section>
                <SectionTitle>
                    <p>
                        more from youtube
                    </p>
                </SectionTitle>
                <MenuItem title={"YouTube Premium"} renderItem={<YouTubePremiumIcon/>}/>
                <MenuItem title={"Live"} renderItem={<PremiumLiveIcon/>}/>
            </Section>
            <Section>
                <MenuItem title={"Browse channels"} renderItem={<BrowseChannelsIcon/>}/>
            </Section>
            <Section>
                <MenuItem title={"Settings"} renderItem={<SettingsIcon/>}/>
                <MenuItem title={"Report history"} renderItem={<FlagIcon/>}/>
                <MenuItem title={"Help"} renderItem={<HelpIcon/>}/>
                <MenuItem title={"Send feedback"} renderItem={<FeedbackIcon/>}/>
            </Section>
            <Section>
                <MenuItem title={"Library"} renderItem={<LibraryIcon/>}/>
                <MenuItem title={"History"} renderItem={<HistoryIcon/>}/>
            </Section>
            <Section>
                <SignInDesc>
                    <p>
                        Sign in to like videos, comment, and subscribe.
                    </p>
                    <SignInButton/>
                </SignInDesc>
            </Section>
            <Section>
                <SectionTitle>
                    <p>
                        best of youtube
                    </p>
                </SectionTitle>
                <MenuItem title={"Music"} renderItem={<MusicIcon/>}/>
                <MenuItem title={"Gaming"} renderItem={<GamingIcon/>}/>
                <MenuItem title={"MoviesShows"} renderItem={<MoviesShowsIcon/>}/>
                <MenuItem title={"News"} renderItem={<NewsIcon/>}/>
                <MenuItem title={"Live"} renderItem={<LiveIcon/>}/>
                <MenuItem title={"FashionNBeauty"} renderItem={<FashionNBeautyIcon/>}/>
                <MenuItem title={"Learning"} renderItem={<LearningIcon/>}/>
                <MenuItem title={"Spotlight"} renderItem={<SpotlightIcon/>}/>
                <MenuItem title={"Video360"} renderItem={<Video360Icon/>}/>
            </Section>


        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 56px;
  bottom: 0;
  left: 0;
  width: 240px;
  z-index: 2000;
  background: rgba(255, 255, 255);
  overflow-y: auto;
`;

const Section = styled.div`
  padding: ${(props) => props.sectionPadding || "8px 0"}px;
  border-bottom: 2px solid #f9f9f9
`;

const SignInDesc = styled.div`
  padding: 8px 32px;

  p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 10px;
  }
`;

const SectionTitle = styled.div`
  text-transform: uppercase;
  padding: 8px 24px;
  color: #606060;
  font-size: 14px;
  font-weight: bold;
`;
export default Sidebar;