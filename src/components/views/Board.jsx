import React from 'react';

import "../../styles/main.sass"
import { useState } from 'react';

import boardImage from "../../img/board/board.svg"
import { useEffect } from 'react';

const Board = () => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    setBoard()
  }, []);

  return (
    <main className="board">
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
      <div className="row">a</div>
    </main>
  )
}

export default Board;