import React from 'react';

import Player from './Player';
import Board from './Board';

import "../../styles/main.sass"

const Game = () => {
  return (
    <main className="game">
      <Player name="Player 1" side="left"/>
      <Board />
      <Player name="Player 2" side="right"/>
    </main>
  );
}

export default Game;