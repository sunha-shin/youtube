import React from 'react'
import styled from 'styled-components';
import ProfileThumb from "../Thumnnails/ProfileThumb";
import MenuItem from "../Items/MenuItem";
import {
    AppearanceIcon, FeedbackIcon, HelpIcon, KeyBoardShortCutIcon, LanguageIcon, LocationIcon,
    MembershipIcon,
    RightIcon, SettingsIcon,
    SignOutIcon,
    SwitchAccountIcon,
    YourChannelIcon, YourDataInYoutubeIcon,
    YoutubeStudioIcon
} from "../../../../icons";
import {useSignOut} from "../../../../hooks/useSignOut";
import SignOutButton from "./SignOutButton";
import {MenuData} from "../../../../constants/menuData";
import {Color} from "../../../../constants/styled";

const ProfileListbox = ({profile}) => {

    const {signOut, loaded} = useSignOut();

    return (
        <Container className={"Container"}>

            <Section>
                <Header>
                    <ProfileImg>
                        <ProfileThumb
                            url={profile?.imageUrl}
                            size={40}
                        />
                    </ProfileImg>
                    <Desc>
                        <p className={"userName"}>{profile.name}</p>
                        <p className={"manageAccount"}>{MenuData.ManageYourGoogleAccount}</p>
                    </Desc>
                </Header>
            </Section>

            <Section>
                <MenuItem title={MenuData.SwitchAccount} renderItem={<YourChannelIcon/>}/>
                <MenuItem title={MenuData.Purchases} renderItem={<MembershipIcon/>}/>
                <MenuItem title={MenuData.YouTubeStudio} renderItem={<YoutubeStudioIcon/>}/>
                <MenuItem title={MenuData.SwitchAccount} renderItem={<SwitchAccountIcon/>} right={<RightIcon/>}/>
                <SignOut onClick={signOut}>
                    <MenuItem title={MenuData.SignOut} renderItem={<SignOutIcon/>}/>
                </SignOut>
            </Section>

            <Section>
                <MenuItem title={MenuData.Appearance} renderItem={<AppearanceIcon/>} right={<RightIcon/>}/>
                <MenuItem title={MenuData.Language} renderItem={<LanguageIcon/>} right={<RightIcon/>}/>
                <MenuItem title={MenuData.Location} renderItem={<LocationIcon/>} right={<RightIcon/>}/>
                <MenuItem title={MenuData.Settings} renderItem={<SettingsIcon color={Color.ListboxGray}/>}/>
                <MenuItem title={MenuData.dataInYoutube} renderItem={<YourDataInYoutubeIcon/>}/>
                <MenuItem title={MenuData.Help} renderItem={<HelpIcon color={Color.ListboxGray}/>}/>
                <MenuItem title={MenuData.Feedback} renderItem={<FeedbackIcon/>}/>
                <MenuItem title={MenuData.KeyboardShortcuts} renderItem={<KeyBoardShortCutIcon/>}/>
            </Section>

            <Section>
                <MenuItem title={MenuData.RestrictedMode} right={<RightIcon/>}/>
            </Section>
        </Container>
    )
}

const Container = styled.div`
  width: 300px;
  height: 539px;
  position: fixed;
  z-index: 3000;
  top: 50px;
  right: 20px;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.98);
  overflow-y: auto;
`;

const Section = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #e8e8e8;
  line-height: 1.6;
`;

const Header = styled.div`
  padding: 16px;
  display: flex;
  background: #fff;
`;

const ProfileImg = styled.div`
  padding-right: 16px;
`;

const Desc = styled.div`
  margin-right: 20px;
  line-height: 1.6;

  .userName {
    font-size: 16px;
    color: #030303;
    font-weight: 600;
    cursor: pointer;
  }

  .manageAccount {
    font-size: 14px;
    color: #065FD4;
    cursor: pointer;
  }
`;

const SignOut = styled.div`

`;

export default ProfileListbox;