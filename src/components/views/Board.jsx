import React from 'react';

import "../../styles/main.sass"
import { useState } from 'react';

import boardImage from "../../img/board/board.svg"
import { useEffect } from 'react';

import Pieces from "../../pieces"

const Board = () => {
  const [board, setBoard] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleClick = (event) => {
    let ct = event.currentTarget;
    if (ct.children.length != 0) {
      if (selectedPiece) {
        if (ct.id != selectedPiece) {
          let old = document.getElementById(selectedPiece);
          old.classList.toggle("selected-piece");
          setSelectedPiece(ct.id);
        } else {
          setSelectedPiece(null);
        }
      } else {
        setSelectedPiece(ct.id);
      }
      ct.classList.toggle("selected-piece");
    }
  }

  return (
    <>
      <div>
        {(selectedPiece &&
          <span style={{ color: "white" }}>Selected Piece: {selectedPiece}</span>) ||
          <span style={{ color: "white" }}>No piece selected!</span>
        }
      </div>
      <main className="board">
        <div className="cell" id="a8" onClick={handleClick}>
          <img src={Pieces.black.rook} alt="" className="piece" />
        </div>
        <div className="cell" id="b8" onClick={handleClick}>
          <img src={Pieces.black.knight} alt="" className="piece" />
        </div>
        <div className="cell" id="c8" onClick={handleClick}>
          <img src={Pieces.black.bishop} alt="" className="piece" />
        </div>
        <div className="cell" id="d8" onClick={handleClick}>
          <img src={Pieces.black.king} alt="" className="piece" />
        </div>
        <div className="cell" id="e8" onClick={handleClick}>
          <img src={Pieces.black.queen} alt="" className="piece" />
        </div>
        <div className="cell" id="f8" onClick={handleClick}>
          <img src={Pieces.black.bishop} alt="" className="piece" />
        </div>
        <div className="cell" id="g8" onClick={handleClick}>
          <img src={Pieces.black.knight} alt="" className="piece" />
        </div>
        <div className="cell" id="h8" onClick={handleClick}>
          <img src={Pieces.black.rook} alt="" className="piece" />
        </div>
        <div className="cell" id="a7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="b7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="c7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="d7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="e7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="f7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="g7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="h7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="a6" onClick={handleClick}></div>
        <div className="cell" id="b6" onClick={handleClick}></div>
        <div className="cell" id="c6" onClick={handleClick}></div>
        <div className="cell" id="d6" onClick={handleClick}></div>
        <div className="cell" id="e6" onClick={handleClick}></div>
        <div className="cell" id="f6" onClick={handleClick}></div>
        <div className="cell" id="g6" onClick={handleClick}></div>
        <div className="cell" id="h6" onClick={handleClick}></div>
        <div className="cell" id="a5" onClick={handleClick}></div>
        <div className="cell" id="b5" onClick={handleClick}></div>
        <div className="cell" id="c5" onClick={handleClick}></div>
        <div className="cell" id="d5" onClick={handleClick}></div>
        <div className="cell" id="e5" onClick={handleClick}></div>
        <div className="cell" id="f5" onClick={handleClick}></div>
        <div className="cell" id="g5" onClick={handleClick}></div>
        <div className="cell" id="h5" onClick={handleClick}></div>
        <div className="cell" id="a4" onClick={handleClick}></div>
        <div className="cell" id="b4" onClick={handleClick}></div>
        <div className="cell" id="c4" onClick={handleClick}></div>
        <div className="cell" id="d4" onClick={handleClick}></div>
        <div className="cell" id="e4" onClick={handleClick}></div>
        <div className="cell" id="f4" onClick={handleClick}></div>
        <div className="cell" id="g4" onClick={handleClick}></div>
        <div className="cell" id="h4" onClick={handleClick}></div>
        <div className="cell" id="a3" onClick={handleClick}></div>
        <div className="cell" id="b3" onClick={handleClick}></div>
        <div className="cell" id="c3" onClick={handleClick}></div>
        <div className="cell" id="d3" onClick={handleClick}></div>
        <div className="cell" id="e3" onClick={handleClick}></div>
        <div className="cell" id="f3" onClick={handleClick}></div>
        <div className="cell" id="g3" onClick={handleClick}></div>
        <div className="cell" id="h3" onClick={handleClick}></div>
        <div className="cell" id="a2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="b2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="c2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="d2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="e2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="f2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="g2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="h2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell" id="a1" onClick={handleClick}>
          <img src={Pieces.white.rook} alt="" className="piece" />
        </div>
        <div className="cell" id="b1" onClick={handleClick}>
          <img src={Pieces.white.knight} alt="" className="piece" />
        </div>
        <div className="cell" id="c1" onClick={handleClick}>
          <img src={Pieces.white.bishop} alt="" className="piece" />
        </div>
        <div className="cell" id="d1" onClick={handleClick}>
          <img src={Pieces.white.king} alt="" className="piece" />
        </div>
        <div className="cell" id="e1" onClick={handleClick}>
          <img src={Pieces.white.queen} alt="" className="piece" />
        </div>
        <div className="cell" id="f1" onClick={handleClick}>
          <img src={Pieces.white.bishop} alt="" className="piece" />
        </div>
        <div className="cell" id="g1" onClick={handleClick}>
          <img src={Pieces.white.knight} alt="" className="piece" />
        </div>
        <div className="cell" id="h1" onClick={handleClick}>
          <img src={Pieces.white.rook} alt="" className="piece" />
        </div>
      </main>
    </>
  )
}

export default Board;