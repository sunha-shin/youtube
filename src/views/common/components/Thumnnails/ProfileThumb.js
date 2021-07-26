import React from 'react'
import styled from 'styled-components';

const ProfileThumb = ({url, size}) => {

    return (
        <Container size={size}>
            <img src={url}
                 alt=""
            />
        </Container>
    )
}

const Container = styled.div`
  img {
    height: ${props => props.size || 36}px;
    width: ${props => props.size || 36}px;
    cursor: pointer;
    border-radius: 50%;
  }
`;

export default ProfileThumb;