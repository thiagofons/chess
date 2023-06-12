import React, { useContext } from 'react';
import { MenuContext } from '../controllers/MenuContext';

import Player from './Player';
import Board from './Board';

import "../../styles/main.sass"

const Game = () => {
  const {options} = useContext(MenuContext);

  return (
    <main className="game">
      <Player name={options.players.player1} side="left"/>
      <Board />
      <Player name={options.players.player2} side="right"/>
    </main>
  );
}

export default Game;