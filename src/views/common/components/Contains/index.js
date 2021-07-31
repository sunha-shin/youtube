import React, {useEffect, useState} from 'react'
import styled from 'styled-components';

const Contains = ({children, onContains}) => {

    const [ref, isContains] = useState();

    useEffect(() => {
        onContains(isContains)
    }, [isContains])

    //
    // const ref = useRef;
    //
    // useEffect(() => {
    //         const handler = (e) => {
    //             if (ref.current) {
    //                 onContains(ref.current.contains(e.target));
    //             }
    //         };
    //
    //         document.addEventListener('click', handler)
    //
    //         return () => {
    //             document.removeEventListener('click', handler);
    //         }
    //     }
    //     , [])

    return (
        <Container ref={ref}>
            {children}
        </Container>
    )
}

const Container = styled.div`

`;

export default Contains;