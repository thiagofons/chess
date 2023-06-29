import React from 'react';

export default class Piece {
    color = "";
    src = "";
    alt = "";
    name = ""
    isCaptured = false;

    constructor(color, src, alt) {
        this.color = color;
        this.src = src;
        this.alt = alt;
        this.name = alt.replace(/[0-9]/g, '');
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