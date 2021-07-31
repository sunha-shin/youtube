import React, {useEffect, useRef, useState} from 'react';

export const useIsContains = () => {
    const ref = useRef;
    const [isContains, setIsContains] = useState(false);


    useEffect(() => {
            const handler = (e) => {
                if (ref.current) {
                    setIsContains(ref.current.contains(e.target))
                }
            };

            document.addEventListener('click', handler)

            return () => {
                document.removeEventListener('click', handler);
            }
        }
        , [])

    return [ref, isContains];
};