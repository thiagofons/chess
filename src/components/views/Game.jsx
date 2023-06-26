import React, { useState } from 'react';

import Board from './Board';
import Piece from './Piece';
import Player from './Player';

import Pieces from "../../pieces.js";
import "../../styles/main.sass";

const Game = (props) => {
	
	const initializePieces = () => {
		let piecesTemp = [];
		for (let colorKey in Pieces) {
			for(let pieceKey in Pieces[colorKey]) {
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
	
	const [pieces, setPieces] = useState(initializePieces());

	return (
		<main className="game">
			<Player name="Player 1" side="left" />
			<Board pieces={pieces} appendMove={props.appendMove} />
			<Player name="Player 2" side="right" />
		</main>
	);
}

export default Game;