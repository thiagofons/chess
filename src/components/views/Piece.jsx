import React, { useState } from 'react';

export default function Piece({name, src, alt}) {
    const [isCaptured, setIsCaptured] = useState(false);

    const capture = () => {
        setIsCaptured(true);
    }

    return (
        <>
            {
                !isCaptured ?
                <img src={src} alt={alt} className="piece" /> :
                null
            }
        </>
    )
}