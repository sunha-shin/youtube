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
    SettingsIcon, SportsIcon, SpotlightIcon,
    SubscriptionsIcon, Video360Icon, YouTubePremiumIcon
} from "../../../../icons";
import SignInButton from "../Header/SignInButton";
import {useSelector} from "react-redux";
import {About, MenuData} from "../../../../constants/menuData";

const Sidebar = () => {

    const {isLoggedIn, profile} = useSelector(state => state.auth);

    return (
        <Container>
            <Section>
                <MenuItem title={MenuData.Home} renderItem={<HomeIcon/>}/>
                <MenuItem title={MenuData.Explore} renderItem={<ExploreIcon/>}/>
                <MenuItem title={MenuData.Subscriptions} renderItem={<SubscriptionsIcon/>}/>
            </Section>

            <Section>
                <MenuItem title={MenuData.Library} renderItem={<LibraryIcon/>}/>
                <MenuItem title={MenuData.History} renderItem={<HistoryIcon/>}/>
            </Section>

            <Section>
                <SectionTitle>
                    <p>
                        more from youtube
                    </p>
                </SectionTitle>
                <MenuItem title={MenuData.YouTubePremium} renderItem={<YouTubePremiumIcon/>}/>
                <MenuItem title={MenuData.Live} renderItem={<PremiumLiveIcon/>}/>
            </Section>

            {
                !isLoggedIn &&
                <Section>
                    <SignInDesc>
                        <p>
                            Sign in to like videos, comment, and subscribe.
                        </p>
                        <SignInButton/>
                    </SignInDesc>
                </Section>
            }

            <Section>
                <SectionTitle>
                    <p>
                        best of youtube
                    </p>
                </SectionTitle>
                <MenuItem title={MenuData.Music} renderItem={<MusicIcon/>}/>
                <MenuItem title={MenuData.Sports} renderItem={<SportsIcon/>}/>
                <MenuItem title={MenuData.Gaming} renderItem={<GamingIcon/>}/>
                <MenuItem title={MenuData.MoviesShows} renderItem={<MoviesShowsIcon/>}/>
                <MenuItem title={MenuData.News} renderItem={<NewsIcon/>}/>
                <MenuItem title={MenuData.Live} renderItem={<LiveIcon/>}/>
                <MenuItem title={MenuData.FashionNBeauty} renderItem={<FashionNBeautyIcon/>}/>
                <MenuItem title={MenuData.Learning} renderItem={<LearningIcon/>}/>
                <MenuItem title={MenuData.Spotlight} renderItem={<SpotlightIcon/>}/>
                <MenuItem title={MenuData.Video360} renderItem={<Video360Icon/>}/>
            </Section>

            <Section>
                <MenuItem title={MenuData.BrowseChannels} renderItem={<BrowseChannelsIcon/>}/>
            </Section>
            <Section>
                <MenuItem title={MenuData.YouTubePremium} renderItem={<SettingsIcon/>}/>
                <MenuItem title={MenuData.ReportHistory} renderItem={<FlagIcon/>}/>
                <MenuItem title={MenuData.Help} renderItem={<HelpIcon/>}/>
                <MenuItem title={MenuData.Feedback} renderItem={<FeedbackIcon/>}/>
            </Section>

            <LastSection>
                <Guide>
                    <p>
                        <span>{About.About}</span>
                        <span>{About.Press}</span>
                        <span>{About.Copyright}</span>
                    </p>
                    <p>
                        <span>{About.ContactUs}</span>
                        <span>{About.Creators}</span>
                    </p>
                    <p>
                        <span>{About.Advertise}</span>
                        <span>{About.Developers}</span>
                    </p>
                </Guide>
                <Guide>
                    <p>
                        <span>{About.Terms}</span>
                        <span>{About.Privacy}</span>
                    </p>
                    <p>
                        <span>{About.PolicyNSafety}</span>
                    </p>
                    <p>
                        <span>{About.HowYouTubeWorks}</span>
                    </p>
                    <p>
                        <span>{About.TestNewFeatures}</span>
                    </p>
                </Guide>
            </LastSection>
        </Container>
    )
}

const Container = styled.div`
  z-index: 2000;
  background: #fff;
  overflow-y: auto;  
`;

const Section = styled.div`
  padding: ${(props) => props.sectionPadding || "8px 0"}px;
  border-bottom: 2px solid #f9f9f9;  
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

const Guide = styled.div`
  padding: 16px 24px 0;

  span {
    color: #606060;
    margin: 0 8px 0 0;
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
    line-height: 1.6;
  }
`;

const LastSection = styled.div`
    padding-bottom: 16px;
`;

export default Sidebar;