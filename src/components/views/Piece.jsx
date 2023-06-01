import React, { useState } from 'react';

/* export default function Piece({name, src, alt}) {
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
} */

export default class Piece {
    color = "";
    src = "";
    alt = "";
    isCaptured = false;

    constructor(color, src, alt) {
        this.color = color;
        this.src = src;
        this.alt = alt;
    }

    capture() {
        this.isCaptured = true;
    }

    render() {
        return (
            <>
                {
                    !this.isCaptured ?
                    <img src={this.src} alt={this.alt} className="piece" /> :
                    null
                }
            </>
        )
    }
}