import React from 'react'
import styled from 'styled-components';

const ProfileThumb = ({size}) => {
    return (
        <Container>
            <Thumb>
                <img src={"https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"}
                     alt=""/>
            </Thumb>
        </Container>
    )
}

const Container = styled.div`

`;

const Thumb = styled.div`
  height: ${(props) => props.size || 36}px;
  width: ${(props) => props.size || 36}px;
  margin-right: 12px;

  img {
    border-radius: 50%;
  }
`;

export default ProfileThumb;