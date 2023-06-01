import React, { useState } from 'react';

import Player from './Player';
import Board from './Board';
import Piece from './Piece'

import "../../styles/main.sass"
import Pieces from "../../pieces.js"

const Game = () => {
	
	const initializePieces = () => {
		let piecesTemp = [];
		for (let colorKey in Pieces) {
			for(let pieceKey in Pieces[colorKey]) {
				let piece = Pieces[colorKey][pieceKey];
	
				// 8 peões
				if (pieceKey == 'pawn') {
					for (let i = 0; i < 8; i++) {
						piecesTemp.push(new Piece(colorKey, piece.src, piece.alt + ' ' + (i + 1).toString()));
						//piecesTemp.push(<Piece src={piece.src} alt={piece.alt + ' ' + (i + 1).toString()} name={pieceKey}/>);
					}
				}
				// 1 único rei e rainha
				else if (pieceKey == 'king' || pieceKey == 'queen') {
					piecesTemp.push(new Piece(colorKey, piece.src, piece.alt));
					//piecesTemp.push(<Piece src={piece.src} alt={piece.alt} name={pieceKey}/>);
				}
				// 2 das peças restantes
				else {
					piecesTemp.push(new Piece(colorKey, piece.src, piece.alt + ' 1'));
					piecesTemp.push(new Piece(colorKey, piece.src, piece.alt + ' 2'));
					//piecesTemp.push(<Piece src={piece.src} alt={piece.alt + ' 1'} name={pieceKey}/>);
					//piecesTemp.push(<Piece src={piece.src} alt={piece.alt + ' 2'} name={pieceKey}/>);
				}
			}
		}

		return piecesTemp;
	}
	
	const [pieces, setPieces] = useState(initializePieces());

	return (
		<main className="game">
			<Player name="Player 1" side="left" />
			<Board pieces={pieces} />
			<Player name="Player 2" side="right" />
		</main>
	);
}

export default Game;