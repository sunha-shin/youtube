import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import ProfileThumb from "../Thumnnails/ProfileThumb";
import ProfileListbox from "./ProfileListbox";
import Contains from "../Contains";

const Member = ({profile}) => {

    const [listBox, setListBox] = useState(false);

    const onContains = (isContain) => {
        if (!isContain) {
            setListBox(false);
        }
    };

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
                <Contains onContains={onContains}>
                    <ProfileListbox profile={profile}/>
                </Contains>
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