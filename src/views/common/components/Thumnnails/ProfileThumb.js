import React from 'react'
import styled from 'styled-components';

const ProfileThumb = ({url, size, marginRight}) => {

    return (
        <Container size={size} marginRight={marginRight}>
            <img src={url || "https://yt3.ggpht.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-nd-rj"}
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
  }
`;

export default ProfileThumb;