import React, { useContext, useState } from 'react';
import Pieces from "../../pieces.js";
import { MenuContext } from '../controllers/MenuContext';
import Board from './Board';
import Piece from './Piece';
import Player from './Player';

const Game = (props) => {

  const { options } = useContext(MenuContext);
  const [currentPlayer, setCurrentPlayer] = useState(2);

  const initializePieces = () => {
    let piecesTemp = [];
    for (let colorKey in Pieces) {
      for (let pieceKey in Pieces[colorKey]) {
        let piece = Pieces[colorKey][pieceKey];

        // 8 peões
        if (pieceKey == 'pawn') {
          for (let i = 0; i < 8; i++) {
            piecesTemp.push(new Piece(colorKey, piece.src, piece.alt + ' ' + (i + 1).toString()));
          }
        }
        // 1 único rei e rainha
        else if (pieceKey == 'king' || pieceKey == 'queen') {
          piecesTemp.push(new Piece(colorKey, piece.src, piece.alt));
        }
        // 2 das peças restantes
        else {
          piecesTemp.push(new Piece(colorKey, piece.src, piece.alt + ' 1'));
          piecesTemp.push(new Piece(colorKey, piece.src, piece.alt + ' 2'));
        }
      }
    }

    return piecesTemp;
  }

  //const [pieces, setPieces] = useState(initializePieces());
  const pieces = initializePieces();

  const alternatePlayer = () => {
    if (currentPlayer == 1) {
      setCurrentPlayer(2);
    } else if (currentPlayer == 2) {
      setCurrentPlayer(1);
    }
  }

  return (
    <main className="game px-2">
      <Player name={options.players.player1} side="left" isCurrPlayer={currentPlayer == 1} />
      <Board
        pieces={pieces}
        appendMove={props.appendMove}
        currentPlayer={currentPlayer}
        alternatePlayer={alternatePlayer}
        gameState={props.gameState}
        setGameState={props.setGameState}
      />
      <Player name={options.players.player2} side="right" isCurrPlayer={currentPlayer == 2} />
    </main>
  );

}

export default Game;