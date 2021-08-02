import React from 'react'
import styled from 'styled-components';
import {defaultUser} from "../../../../constants/styled";

const ProfileThumb = ({url, size, marginRight}) => {

    return (
        <Container size={size} marginRight={marginRight}>
            <img src={url || defaultUser.imageUrl}
                 alt=""
            />
        </Container>
    )
}

const Container = styled.div`
  margin-right:${props => props.marginRight}px;
  
  img {
    height: ${props => props.size || 36}px;
    width: ${props => props.size || 36}px;
    cursor: pointer;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export default ProfileThumb;