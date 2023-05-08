import React from 'react';

import "../../styles/main.sass"
import { useState } from 'react';

import boardImage from "../../img/board/board.svg"
import { useEffect } from 'react';

import Pieces from "../../pieces"
import Square from '../assets/Square';

const Board = () => {
  const [board, setBoard] = useState([]);
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
  )
}

export default Board;