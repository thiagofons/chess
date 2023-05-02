import React from 'react';

import "../../styles/main.sass"
import { useState } from 'react';

import boardImage from "../../img/board/board.svg"
import { useEffect } from 'react';

import Pieces from "../../pieces"

const Board = () => {
  const [board, setBoard] = useState([]);

  return (
    <main className="board">
      <div className="row"><img src={Pieces.black.pawn} alt=""/></div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
      <div className="row">a</div>
    </main>
  )
}

export default Board;