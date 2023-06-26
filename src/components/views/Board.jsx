import React, { useState, useContext, useEffect } from 'react';
import { MenuContext } from "../controllers/MenuContext";
import "../../styles/main.sass";

import movingPieceAudio from "../../audios/moving_piece.mp3";
import Pieces from "../../pieces";
import Square from '../assets/Square';

const Board = (props) => {
  const [audios, setAudios] = useState({
    movingPiece: new Audio(movingPieceAudio),
  });

  const { options, setOptions } = useContext(MenuContext);

  useEffect(() => {
    audios.movingPiece.volume = options.volume / 100;
  }, [options.volume]);
  
	const getColName = (col) => {
		switch (col) {
			case 0: return 'a';
			case 1: return 'b';
			case 2: return 'c';
			case 3: return 'd';
			case 4: return 'e';
			case 5: return 'f';
			case 6: return 'g';
			case 7: return 'h';
		}
	}

	const getPiece = (row, col) => {
		// Peças pretas
		if (row == 0) {
			switch (col) {
				case 0: return props.pieces.find(piece => piece.alt == Pieces.black.rook.alt + " 1")
				case 1: return props.pieces.find(piece => piece.alt == Pieces.black.knight.alt + " 1")
				case 2: return props.pieces.find(piece => piece.alt == Pieces.black.bishop.alt + " 1")
				case 3: return props.pieces.find(piece => piece.alt == Pieces.black.king.alt)
				case 4: return props.pieces.find(piece => piece.alt == Pieces.black.queen.alt)
				case 5: return props.pieces.find(piece => piece.alt == Pieces.black.bishop.alt + " 2")
				case 6: return props.pieces.find(piece => piece.alt == Pieces.black.knight.alt + " 2")
				case 7: return props.pieces.find(piece => piece.alt == Pieces.black.rook.alt + " 2")
			}
		}

		// Peões pretos
		else if (row == 1) {
			return props.pieces.find(piece => piece.alt == Pieces.black.pawn.alt + " " + (col + 1).toString())
		}

		// Peões brancos
		else if (row == 6) {
			return props.pieces.find(piece => piece.alt == Pieces.white.pawn.alt + " " + (col + 1).toString())
		}

		// Peças brancas
		else if (row == 7) {
			switch (col) {
				case 0: return props.pieces.find(piece => piece.alt == Pieces.white.rook.alt + " 1")
				case 1: return props.pieces.find(piece => piece.alt == Pieces.white.knight.alt + " 1")
				case 2: return props.pieces.find(piece => piece.alt == Pieces.white.bishop.alt + " 1")
				case 3: return props.pieces.find(piece => piece.alt == Pieces.white.king.alt)
				case 4: return props.pieces.find(piece => piece.alt == Pieces.white.queen.alt)
				case 5: return props.pieces.find(piece => piece.alt == Pieces.white.bishop.alt + " 2")
				case 6: return props.pieces.find(piece => piece.alt == Pieces.white.knight.alt + " 2")
				case 7: return props.pieces.find(piece => piece.alt == Pieces.white.rook.alt + " 2")
			}
		}
	}

	const initializeBoard = () => {
		let mat = [];
		let row = 0, col = 0;

		for (row = 0; row < 8; row++) {
			mat[row] = [];
			for (col = 0; col < 8; col++) {
				let className = "cell";

				// se linha for par começa com célula clara
				if (row % 2) {
					// se coluna for par é claro
					if (col % 2) {
						className += " light";
					}
					// senão é escuro
					else {
						className += " dark";
					}
				}
				// senão começa com célula escura 
				else {
					// se coluna for par é escuro
					if (col % 2) {
						className += " dark";
					}
					// senão é claro
					else {
						className += " light";
					}
				}

				let rowName = (8 - row).toString();
				let colName = getColName(col);
				let piece = getPiece(row, col);
				
				mat[row][col] = new Square(piece, rowName, colName, className);
			}
		}

		return mat;
	}

	const [board, setBoard] = useState(initializeBoard());
	const [selectedSquare, setSelectedSquare] = useState(null);

	const handleClick = (square) => {
		// Selecionando quadrado novo
		if (square != selectedSquare) {
			let oldSquare = selectedSquare;
			// Se tinha quadrado antigo selecionado
			if (oldSquare) {
				// Captura sendo feito
				if (square.piece) {
					if (square.piece.color != oldSquare.piece.color) {
            audios.movingPiece.play();
						square.piece.capture();
					} else {
						alert("Não pode capturar sua própria peça!");
						return;
					}
				}

				// Movimentação da peça
				square.piece = oldSquare.piece;
				oldSquare.piece = null;

				// Ao final de movimento/captura deseleciona quadrado
				selectedSquare.setIsSelected(false);
				setSelectedSquare(null);

			} 
			// Se não tinha quadrado antigo selecionado
			else {
				// Seleciona quadrado novo apenas se há peça nele
				if (square.piece) {
					setSelectedSquare(square);
					square.setIsSelected(true);
				}

			}
		}
		// Selecionando mesmo quadrado
		else {
			selectedSquare.setIsSelected(false);
			setSelectedSquare(null);
		}
	}

	return (
		<>
			<div>
				{(selectedSquare &&
					<>
						{selectedSquare.piece && <span style={{ color: "white" }}>Selected Piece: {selectedSquare.piece.alt}</span>}
						<br />
						<span style={{ color: "white" }}>Selected Square: {selectedSquare.id}</span>
					</>
				) ||
					<>
						<br />
						<span style={{ color: "white" }}>No piece selected!</span>
					</>
				}
			</div>
			<main className="board">
				{
					board.map((row) => {
						return row.map((square) => square.render(handleClick));
					})

				}
			</main>
		</>
	)

}

export default Board;
