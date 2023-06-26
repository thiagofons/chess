import React from 'react';

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
                    <img src={this.src} alt={this.alt} className="piece" draggable="false" /> :
                    null
                }
            </>
        )
    }
}