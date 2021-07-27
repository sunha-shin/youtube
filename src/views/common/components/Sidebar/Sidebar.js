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
import {About, StringData} from "../../../../constants/StringData";

const Sidebar = () => {

    const {isLoggedIn, profile} = useSelector(state => state.auth);

    return (
        <Container>
            <Section>
                <MenuItem title={StringData.Home} renderItem={<HomeIcon/>}/>
                <MenuItem title={StringData.Explore} renderItem={<ExploreIcon/>}/>
                <MenuItem title={StringData.Subscriptions} renderItem={<SubscriptionsIcon/>}/>
            </Section>

            <Section>
                <MenuItem title={StringData.Library} renderItem={<LibraryIcon/>}/>
                <MenuItem title={StringData.History} renderItem={<HistoryIcon/>}/>
            </Section>

            <Section>
                <SectionTitle>
                    <p>
                        more from youtube
                    </p>
                </SectionTitle>
                <MenuItem title={StringData.YouTubePremium} renderItem={<YouTubePremiumIcon/>}/>
                <MenuItem title={StringData.Live} renderItem={<PremiumLiveIcon/>}/>
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
                <MenuItem title={StringData.Music} renderItem={<MusicIcon/>}/>
                <MenuItem title={StringData.Sports} renderItem={<SportsIcon/>}/>
                <MenuItem title={StringData.Gaming} renderItem={<GamingIcon/>}/>
                <MenuItem title={StringData.MoviesShows} renderItem={<MoviesShowsIcon/>}/>
                <MenuItem title={StringData.News} renderItem={<NewsIcon/>}/>
                <MenuItem title={StringData.Live} renderItem={<LiveIcon/>}/>
                <MenuItem title={StringData.FashionNBeauty} renderItem={<FashionNBeautyIcon/>}/>
                <MenuItem title={StringData.Learning} renderItem={<LearningIcon/>}/>
                <MenuItem title={StringData.Spotlight} renderItem={<SpotlightIcon/>}/>
                <MenuItem title={StringData.Video360} renderItem={<Video360Icon/>}/>
            </Section>

            <Section>
                <MenuItem title={StringData.BrowseChannels} renderItem={<BrowseChannelsIcon/>}/>
            </Section>
            <Section>
                <MenuItem title={StringData.YouTubePremium} renderItem={<SettingsIcon/>}/>
                <MenuItem title={StringData.ReportHistory} renderItem={<FlagIcon/>}/>
                <MenuItem title={StringData.Help} renderItem={<HelpIcon/>}/>
                <MenuItem title={StringData.Feedback} renderItem={<FeedbackIcon/>}/>
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