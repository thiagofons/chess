import React from 'react';

import "../../styles/main.sass"
import { useState } from 'react';

import boardImage from "../../img/board/board.svg"
import { useEffect } from 'react';

import Pieces from "../../pieces"
import Square from '../assets/Square';

const Board = () => {
  /* const [board, setBoard] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState(null);

  // Start the board
  const setSquares = () => {
    let types=["light", "dark"];

    for(let i = 0; i < 64; i++) {
      setBoard(...board, <Square type={types[i % 2]} piece={""}/>)
    }
  }

  useEffect(() => {
    setSquares()
      
  }, [])

  return (
    <div className="board">
      
    </div>
  ) */

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
    }else{
      if (selectedPiece) {
        let old = document.getElementById(selectedPiece);
        old.classList.toggle("selected-piece");
        setSelectedPiece(null);
        let teste = old.firstElementChild;
        ct.appendChild(teste.cloneNode(true))
        teste.remove()
      }
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
        <div className="cell light" id="a8" onClick={handleClick}>
          <img src={Pieces.black.rook} alt="" className="piece" />
        </div>
        <div className="cell dark" id="b8" onClick={handleClick}>
          <img src={Pieces.black.knight} alt="" className="piece" />
        </div>
        <div className="cell light" id="c8" onClick={handleClick}>
          <img src={Pieces.black.bishop} alt="" className="piece" />
        </div>
        <div className="cell dark" id="d8" onClick={handleClick}>
          <img src={Pieces.black.king} alt="" className="piece" />
        </div>
        <div className="cell light" id="e8" onClick={handleClick}>
          <img src={Pieces.black.queen} alt="" className="piece" />
        </div>
        <div className="cell dark" id="f8" onClick={handleClick}>
          <img src={Pieces.black.bishop} alt="" className="piece" />
        </div>
        <div className="cell light" id="g8" onClick={handleClick}>
          <img src={Pieces.black.knight} alt="" className="piece" />
        </div>
        <div className="cell dark" id="h8" onClick={handleClick}>
          <img src={Pieces.black.rook} alt="" className="piece" />
        </div>
        <div className="cell dark" id="a7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell light" id="b7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell dark" id="c7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell light" id="d7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell dark" id="e7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell light" id="f7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell dark" id="g7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell light" id="h7" onClick={handleClick}>
          <img src={Pieces.black.pawn} alt="" className="piece" />
        </div>
        <div className="cell light" id="a6" onClick={handleClick}></div>
        <div className="cell dark" id="b6" onClick={handleClick}></div>
        <div className="cell light" id="c6" onClick={handleClick}></div>
        <div className="cell dark" id="d6" onClick={handleClick}></div>
        <div className="cell light" id="e6" onClick={handleClick}></div>
        <div className="cell dark" id="f6" onClick={handleClick}></div>
        <div className="cell light" id="g6" onClick={handleClick}></div>
        <div className="cell dark" id="h6" onClick={handleClick}></div>
        <div className="cell dark" id="a5" onClick={handleClick}></div>
        <div className="cell light" id="b5" onClick={handleClick}></div>
        <div className="cell dark" id="c5" onClick={handleClick}></div>
        <div className="cell light" id="d5" onClick={handleClick}></div>
        <div className="cell dark" id="e5" onClick={handleClick}></div>
        <div className="cell light" id="f5" onClick={handleClick}></div>
        <div className="cell dark" id="g5" onClick={handleClick}></div>
        <div className="cell light" id="h5" onClick={handleClick}></div>
        <div className="cell light" id="a4" onClick={handleClick}></div>
        <div className="cell dark" id="b4" onClick={handleClick}></div>
        <div className="cell light" id="c4" onClick={handleClick}></div>
        <div className="cell dark" id="d4" onClick={handleClick}></div>
        <div className="cell light" id="e4" onClick={handleClick}></div>
        <div className="cell dark" id="f4" onClick={handleClick}></div>
        <div className="cell light" id="g4" onClick={handleClick}></div>
        <div className="cell dark" id="h4" onClick={handleClick}></div>
        <div className="cell dark" id="a3" onClick={handleClick}></div>
        <div className="cell light" id="b3" onClick={handleClick}></div>
        <div className="cell dark" id="c3" onClick={handleClick}></div>
        <div className="cell light" id="d3" onClick={handleClick}></div>
        <div className="cell dark" id="e3" onClick={handleClick}></div>
        <div className="cell light" id="f3" onClick={handleClick}></div>
        <div className="cell dark" id="g3" onClick={handleClick}></div>
        <div className="cell light" id="h3" onClick={handleClick}></div>
        <div className="cell light" id="a2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell dark" id="b2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell light" id="c2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell dark" id="d2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell light" id="e2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell dark" id="f2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell light" id="g2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell dark" id="h2" onClick={handleClick}>
          <img src={Pieces.white.pawn} alt="" className="piece" />
        </div>
        <div className="cell dark" id="a1" onClick={handleClick}>
          <img src={Pieces.white.rook} alt="" className="piece" />
        </div>
        <div className="cell light" id="b1" onClick={handleClick}>
          <img src={Pieces.white.knight} alt="" className="piece" />
        </div>
        <div className="cell dark" id="c1" onClick={handleClick}>
          <img src={Pieces.white.bishop} alt="" className="piece" />
        </div>
        <div className="cell light" id="d1" onClick={handleClick}>
          <img src={Pieces.white.king} alt="" className="piece" />
        </div>
        <div className="cell dark" id="e1" onClick={handleClick}>
          <img src={Pieces.white.queen} alt="" className="piece" />
        </div>
        <div className="cell light" id="f1" onClick={handleClick}>
          <img src={Pieces.white.bishop} alt="" className="piece" />
        </div>
        <div className="cell dark" id="g1" onClick={handleClick}>
          <img src={Pieces.white.knight} alt="" className="piece" />
        </div>
        <div className="cell light" id="h1" onClick={handleClick}>
          <img src={Pieces.white.rook} alt="" className="piece" />
        </div>
      </main>
    </>
  )

}

export default Board;