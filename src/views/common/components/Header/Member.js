import React, {useState} from 'react'
import styled from 'styled-components';
import ProfileThumb from "../Thumnnails/ProfileThumb";
import ProfileListbox from "./ProfileListbox";

const Member = ({profile}) => {

    const [listBox, setListBox] = useState(false);

    return (
        <Container>
            <Image onClick={() => setListBox(!listBox)}>
                <ProfileThumb
                    url={profile?.imageUrl}
                    size={32}
                />
            </Image>
            {
                listBox &&
                <ProfileListbox profile={profile}/>
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
  padding: 1px 6px;
`;

const Image = styled.div`

`;

export default Member;